import { useState } from 'react';

export default function CompetencyMapping() {
  // Sample data from the spreadsheet (just 3 rows)
  const initialData = [
    { mainCategory: 'main Category1', subCategory: 'Sub Category 1.1', skillLevel: 'Level 1', functionType: 'HVAC', jobTitle: '1.Technician 1', trainingCode: '1.1.1', ojtCode: 'N.A', lmsAssessmentCode: 'Quiz 1.1.1', ojaCode: 'N.A', inaCode: 'INA1.1.1', deadLine: '3 months', validity: '' },
    { mainCategory: 'main Category1', subCategory: 'Sub Category 1.2', skillLevel: 'Level 1', functionType: 'ELEC', jobTitle: '1.Technician 1', trainingCode: '1.1.2', ojtCode: 'N.A', lmsAssessmentCode: 'Quiz 1.1.2', ojaCode: 'N.A', inaCode: 'INA1.1.2', deadLine: '6 months', validity: '' },
    { mainCategory: 'main Category2', subCategory: 'Sub Category 2.1', skillLevel: 'Level 1', functionType: '', jobTitle: '2.Technician 1', trainingCode: '2.1.1', ojtCode: 'N.A', lmsAssessmentCode: 'Quiz 2.1.1', ojaCode: 'N.A', inaCode: 'INA2.1.1', deadLine: '', validity: '' }
  ];

  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Search functionality
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    
    if (term === '') {
      setData(initialData);
    } else {
      const filteredData = initialData.filter(item => {
        return Object.values(item).some(value => 
          value.toString().toLowerCase().includes(term)
        );
      });
      setData(filteredData);
    }
    setCurrentPage(1);
  };

  // Calculate pagination
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="competency-container">
      <h1 className="mapping-title">Competency Mapping</h1>
      
      {/* Search box */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearch}
          style={{ borderRadius:"30px", padding:"12px 40px 12px 16px", width:"100%", height:"50px", fontSize:"16px", border:"2px solid #ddd", outline:"none", transition:"all 0.3s ease" }}
        />
        <span className="search-icon">🔍</span>
      </div>
      
      {/* Table */}
      <div className="table-container">
        <table className="mapping-table">
          <thead>
            <tr>
                <th colSpan={2}>Skills Category / Tags</th>
                <th>Define Skills level</th>
                <th>Assign Function</th>
                <th>Assign Job Profile</th>
                <th colSpan={2}>Training Map Skills</th>
                <th colSpan={3}>Assessment to Map Skills</th>
                <th rowSpan={2}>Dead Line</th>
                <th rowSpan={2}>Validity</th>
            </tr>
            <tr>
              <th>Main Category</th>
              <th>Sub Category</th>
              <th>Skill Level</th>
              <th>Function Type</th>
              <th>Job Title</th>
              <th>Training Code</th>
              <th>OJT Code</th>
              <th>LMS Assessment</th>
              <th>OJA Code</th>
              <th>INA Code</th>
              
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{item.mainCategory}</td>
                <td>{item.subCategory}</td>
                <td>{item.skillLevel}</td>
                <td>{item.functionType}</td>
                <td>{item.jobTitle}</td>
                <td>{item.trainingCode}</td>
                <td>{item.ojtCode}</td>
                <td>{item.lmsAssessmentCode}</td>
                <td>{item.ojaCode}</td>
                <td>{item.inaCode}</td>
                <td>{item.deadLine}</td>
                <td>{item.validity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <div className="pagination-container">
        <button 
          onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
          disabled={currentPage === 1}
          className="pagination-button"
        >
          Previous
        </button>
        
        <div className="page-numbers">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => paginate(i + 1)}
              className={`page-number ${currentPage === i + 1 ? 'active-page' : ''}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        
        <button
          onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
          disabled={currentPage === totalPages || totalPages === 0}
          className="pagination-button"
        >
          Next
        </button>
      </div>

      <style jsx>{`
        .competency-container {
          width: 100%;
          padding: 24px;
          background-color: #f7f9fc;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .mapping-title {
          font-size: 28px;
          font-weight: 700;
          color: #2c3e50;
          margin-bottom: 24px;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-bottom: 3px solid #3498db;
          padding-bottom: 10px;
          display: inline-block;
        }
        
        .search-container {
          position: relative;
          margin-bottom: 24px;
          max-width: 500px;
        }
        
        .search-input {
          width: 100%;
        //   padding: 12px 40px 12px 24px;
          font-size: 16px;
          border: 2px solid #ddd;
          border-radius: 30px;
          outline: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .search-input:focus {
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.25);
        }
        
        .search-icon {
          position: absolute;
          right: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 18px;
        }
        
        .table-container {
            width: 100%;
            overflow-x: auto;
            margin-bottom: 24px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }
        
        .mapping-table {
          width: 100%;
          min-width: 1200px; /* Ensures the table extends beyond viewport width */
          border-collapse: collapse;
          table-layout: fixed; /* Makes column widths consistent */
        }
        
        .mapping-table thead {
          background-color: #3498db;
          color: white;
        }
        
        .mapping-table th, 
        .mapping-table td {
          padding: 14px 12px;
          text-align: left;
          border: 1px solid #e1e8ed;
        //   white-space: nowrap; /* Prevents text wrapping for better horizontal scrolling */
        }
        
        .mapping-table th {
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-size: 12px;
          position: sticky;
          top: 0;
        //   width: 8.33%; /* Equal distribution across 12 columns */
        }
        
        .even-row {
          background-color: #fff;
        }
        
        .odd-row {
          background-color: #f8f9fa;
        }
        
        .mapping-table tr:hover {
          background-color: #ebf5fb;
          transition: background-color 0.2s ease;
        }
        
        .pagination-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 24px;
        }
        
        .pagination-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          font-weight: 600;
        }
        
        .pagination-button:hover:not(:disabled) {
          background-color: #2980b9;
        }
        
        .pagination-button:disabled {
          background-color: #bdc3c7;
          cursor: not-allowed;
        }
        
        .page-numbers {
          display: flex;
          margin: 0 12px;
        }
        
        .page-number {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #3498db;
          border-radius: 50%;
          margin: 0 5px;
          background-color: transparent;
          color: #3498db;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .page-number:hover:not(.active-page) {
          background-color: #eaf2f8;
        }
        
        .active-page {
          background-color: #3498db;
          color: white;
        }
      `}</style>
    </div>
  );
}



// CompetencyMapping