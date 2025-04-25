import { useState, useEffect } from 'react';
import axios from 'axios';
import { base_url } from '../Utils/base_url';
import { toast, ToastContainer } from 'react-toastify';

// export default function CompetencyMapping() {
//   // States for different data types
//   const [employees, setEmployees] = useState([]);
//   const [trainings, setTrainings] = useState([]);
//   const [ojtData, setOjtData] = useState([]);
//   const [ojaData, setOjaData] = useState([]);
//   const [inaData, setInaData] = useState([]);
//   const [assessments, setAssessments] = useState([]);
  
//   // State for competency mappings
//   const [competencyMappings, setCompetencyMappings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // States for bulk assignment
//   const [showBulkAssign, setShowBulkAssign] = useState(false);
//   const [bulkAssignment, setBulkAssignment] = useState({
//     functionType: '',
//     jobTitle: '',
//     mainCategory: '',
//     subCategory: '',
//     skillLevel: '',
//     trainingCode: '',
//     ojtCode: '',
//     lmsAssessmentCode: '',
//     ojaCode: '',
//     inaCode: '',
//     validity: ''
//   });

//   // Static data
//   const mainCategories = [
//     "Technical Skills", 
//     "Soft Skills", 
//     "Safety Skills", 
//     "Operational Skills"
//   ];
  
//   const subCategories = {
//     "Technical Skills": ["Electrical", "Mechanical", "HVAC", "Plumbing", "IT"],
//     "Soft Skills": ["Communication", "Leadership", "Time Management", "Problem Solving"],
//     "Safety Skills": ["Fire Safety", "First Aid", "Hazard Identification", "Emergency Response"],
//     "Operational Skills": ["Project Management", "Quality Control", "Resource Management", "Documentation"]
//   };
  
//   const skillLevels = ["Level 1 - Basic", "Level 2 - Intermediate", "Level 3 - Advanced", "Level 4 - Expert"];
  
//   const validityOptions = [
//     { value: "3 months", label: "3 months" },
//     { value: "6 months", label: "6 months" },
//     { value: "9 months", label: "9 months" },
//     { value: "12 months", label: "12 months" }
//   ];

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       // Fetch employees
//       const employeesResponse = await axios.get(`${base_url}/employees`);
//       console.log(employeesResponse);
//       setEmployees(employeesResponse.data);
      
//       // Initialize competency mappings with employee data
//       const initialMappings = employeesResponse.data.map(emp => ({
//         employeeId: emp.employee_id,
//         employeeName: emp.employee_name,
//         functionType: emp.function_title || '',
//         jobTitle: emp.job_title || '',
//         mainCategory: '',
//         subCategory: '',
//         skillLevel: '',
//         trainingCode: '',
//         ojtCode: '',
//         lmsAssessmentCode: '',
//         ojaCode: '',
//         inaCode: '',
//         validity: '',
//         deadLine: ''
//       }));
//       setCompetencyMappings(initialMappings);
      
//       // Fetch other data
//       const trainingsResponse = await axios.get(`${base_url}/trainings`);
//       setTrainings(trainingsResponse.data);
      
//       const ojtResponse = await axios.get(`${base_url}/ojt`);
//       setOjtData(ojtResponse.data);
      
//       const ojaResponse = await axios.get(`${base_url}/oja`);
//       setOjaData(ojaResponse.data);
      
//       const inaResponse = await axios.get(`${base_url}/ina`);
//       setInaData(inaResponse.data);
      
//       const assessmentsResponse = await axios.get(`${base_url}/assessments`);
//       setAssessments(assessmentsResponse.data);
      
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       // Handle error with user notification here
//     }
//   };

//   // Search functionality
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   // Handle changes to individual mapping fields
//   const handleMappingChange = (index, field, value) => {
//     const updatedMappings = [...competencyMappings];
//     updatedMappings[index][field] = value;
    
//     // // If validity is changed, update deadline accordingly
//     // if (field === 'validity') {
//     //   updatedMappings[index].deadLine = value;
//     // }
    
//     setCompetencyMappings(updatedMappings);
//   };

//   // Handle bulk assignment changes
//   const handleBulkAssignmentChange = (field, value) => {
//     const updatedBulkAssignment = { ...bulkAssignment };
//     updatedBulkAssignment[field] = value;
    
//     // If validity is changed, update deadline accordingly
//     if (field === 'validity') {
//       updatedBulkAssignment.deadLine = value;
//     }
    
//     setBulkAssignment(updatedBulkAssignment);
//   };

//   // Apply bulk assignment
//   const applyBulkAssignment = () => {
//     const { functionType, jobTitle } = bulkAssignment;
    
//     // Validate that function and job title are selected
//     if (!functionType || !jobTitle) {
//       toast.info("Please select both Function Type and Job Title for bulk assignment");
//       return;
//     }
    
//     // Update mappings for matching employees
//     const updatedMappings = competencyMappings.map(mapping => {
//       if (mapping.functionType === functionType && mapping.jobTitle === jobTitle) {
//         return {
//           ...mapping,
//           mainCategory: bulkAssignment.mainCategory,
//           subCategory: bulkAssignment.subCategory,
//           skillLevel: bulkAssignment.skillLevel,
//           trainingCode: bulkAssignment.trainingCode,
//           ojtCode: bulkAssignment.ojtCode,
//           lmsAssessmentCode: bulkAssignment.lmsAssessmentCode,
//           ojaCode: bulkAssignment.ojaCode,
//           inaCode: bulkAssignment.inaCode,
//           validity: bulkAssignment.validity,
//           deadLine: bulkAssignment.validity
//         };
//       }
//       return mapping;
//     });
    
//     setCompetencyMappings(updatedMappings);
//     setShowBulkAssign(false);
//     toast.success(`Competency data assigned to all employees with Function: ${functionType} and Job Title: ${jobTitle}`);
//   };

//   // Save all competency mappings
//   const saveCompetencyMappings = async () => {
//     try {
//       await axios.post(`${base_url}/competency_mappings_post`, { mappings: competencyMappings });
//       toast.success('Competency mappings saved successfully!');
//     } catch (error) {
//       console.error("Error saving competency mappings:", error);
//       toast.error('Failed to save competency mappings. Please try again.');
//     }
//   };

//   // Filter competency mappings based on search term
//   const filteredMappings = competencyMappings.filter(mapping => {
//     if (searchTerm === '') return true;
    
//     return (
//       mapping.employeeId?.toLowerCase().includes(searchTerm) ||
//       mapping.employeeName?.toLowerCase().includes(searchTerm) ||
//       mapping.functionType?.toLowerCase().includes(searchTerm) ||
//       mapping.jobTitle?.toLowerCase().includes(searchTerm) ||
//       mapping.mainCategory?.toLowerCase().includes(searchTerm) ||
//       mapping.subCategory?.toLowerCase().includes(searchTerm)
//     );
//   });

//   // Calculate pagination
//   const totalPages = Math.ceil(filteredMappings.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredMappings.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Get unique function types and job titles for bulk assignment
//   const uniqueFunctionTypes = [...new Set(competencyMappings.map(item => item.functionType).filter(Boolean))];
//   const uniqueJobTitles = [...new Set(competencyMappings.map(item => item.jobTitle).filter(Boolean))];

//   return (
//     <div className="competency-container">
//       <h1 className="mapping-title">Competency Mapping</h1>
      
//       <div className="controls-container">
//         {/* Search box */}
//         <div className="search-container">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
//           />
//           <span className="search-icon">🔍</span>
//         </div>
        
//         {/* Action buttons */}
//         <div className="action-buttons">
//           <button 
//             onClick={() => setShowBulkAssign(!showBulkAssign)}
//             className="btn btn-primary"
//           >
//             {showBulkAssign ? 'Hide Bulk Assign' : 'Bulk Assign'}
//           </button>
          
//           <button 
//             onClick={saveCompetencyMappings}
//             className="btn btn-success"
//           >
//             Save All Mappings
//           </button>
//         </div>
//       </div>
      
//       {/* Bulk Assignment Panel */}
//       {showBulkAssign && (
//         <div className="bulk-assign-panel">
//           <h2 className="panel-title">Bulk Assignment</h2>
//           <div className="grid-container grid-5-cols">
//             <div className="form-group">
//               <label className="form-label">Function Type</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.functionType}
//                 onChange={(e) => handleBulkAssignmentChange('functionType', e.target.value)}
//               >
//                 <option value="">-- Select Function --</option>
//                 {uniqueFunctionTypes.map((func, idx) => (
//                   <option key={idx} value={func}>{func}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Job Title</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.jobTitle}
//                 onChange={(e) => handleBulkAssignmentChange('jobTitle', e.target.value)}
//               >
//                 <option value="">-- Select Job Title --</option>
//                 {uniqueJobTitles.map((job, idx) => (
//                   <option key={idx} value={job}>{job}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Main Category</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.mainCategory}
//                 onChange={(e) => handleBulkAssignmentChange('mainCategory', e.target.value)}
//               >
//                 <option value="">-- Select Main Category --</option>
//                 {mainCategories.map((category, idx) => (
//                   <option key={idx} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Sub Category</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.subCategory}
//                 onChange={(e) => handleBulkAssignmentChange('subCategory', e.target.value)}
//                 disabled={!bulkAssignment.mainCategory}
//               >
//                 <option value="">-- Select Sub Category --</option>
//                 {bulkAssignment.mainCategory && subCategories[bulkAssignment.mainCategory]?.map((subCat, idx) => (
//                   <option key={idx} value={subCat}>{subCat}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Skill Level</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.skillLevel}
//                 onChange={(e) => handleBulkAssignmentChange('skillLevel', e.target.value)}
//               >
//                 <option value="">-- Select Skill Level --</option>
//                 {skillLevels.map((level, idx) => (
//                   <option key={idx} value={level}>{level}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="grid-container grid-5-cols">
//             <div className="form-group">
//               <label className="form-label">Training</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.trainingCode}
//                 onChange={(e) => handleBulkAssignmentChange('trainingCode', e.target.value)}
//               >
//                 <option value="">-- Select Training --</option>
//                 {trainings.map((training, idx) => (
//                   <option key={idx} value={training._id}>
//                     {`${training.training_name} - ${training.training_category}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">OJT Code</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.ojtCode}
//                 onChange={(e) => handleBulkAssignmentChange('ojtCode', e.target.value)}
//               >
//                 <option value="">-- Select OJT --</option>
//                 {ojtData.map((ojt, idx) => (
//                   <option key={idx} value={ojt.ojt_code}>
//                     {`${ojt.ojt_code} - ${ojt.ojt_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Assessment</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.lmsAssessmentCode}
//                 onChange={(e) => handleBulkAssignmentChange('lmsAssessmentCode', e.target.value)}
//               >
//                 <option value="">-- Select Assessment --</option>
//                 {assessments.map((assessment, idx) => (
//                   <option key={idx} value={assessment.code}>
//                     {`${assessment.code} - ${assessment.assessment_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">OJA Code</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.ojaCode}
//                 onChange={(e) => handleBulkAssignmentChange('ojaCode', e.target.value)}
//               >
//                 <option value="">-- Select OJA --</option>
//                 {ojaData.map((oja, idx) => (
//                   <option key={idx} value={oja.oja_code}>
//                     {`${oja.oja_code} - ${oja.oja_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">INA Code</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.inaCode}
//                 onChange={(e) => handleBulkAssignmentChange('inaCode', e.target.value)}
//               >
//                 <option value="">-- Select INA --</option>
//                 {inaData.map((ina, idx) => (
//                   <option key={idx} value={ina.ina_code}>
//                     {`${ina.ina_code} - ${ina.ina_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="grid-container grid-2-cols">
//             <div className="form-group">
//               <label className="form-label">Validity</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.validity}
//                 onChange={(e) => handleBulkAssignmentChange('validity', e.target.value)}
//               >
//                 <option value="">-- Select Validity --</option>
//                 {validityOptions.map((option, idx) => (
//                   <option key={idx} value={option.value}>{option.label}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
//               <button 
//                 onClick={applyBulkAssignment}
//                 className="btn btn-primary"
//               >
//                 Apply to Selected Function/Job
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Table */}
//       <div className="table-container">
//         <table className="mapping-table">
//           <thead>
//             <tr>
//               <th colSpan={2}>Employee details</th>
//               <th colSpan={2}>Skills Category / Tags</th>
//               <th>Define Skills level</th>
//               <th>Assign Function</th>
//               <th>Assign Job Profile</th>
//               <th colSpan={2}>Training Map Skills</th>
//               <th colSpan={3}>Assessment to Map Skills</th>
//               <th rowSpan={2}>Dead Line</th>
//               <th rowSpan={2}>Validity</th>
//             </tr>
//             <tr>
//               <th className="id-column">Employee Id</th>
//               <th className="name-column">Employee Name</th>
//               <th className="select-column">Main Category</th>
//               <th className="select-column">Sub Category</th>
//               <th className="select-column">Skill Level</th>
//               <th>Function Type</th>
//               <th>Job Title</th>
//               <th className="select-column">Training Code</th>
//               <th className="select-column">OJT Code</th>
//               <th className="select-column">LMS Assessment</th>
//               <th className="select-column">OJA Code</th>
//               <th className="select-column">INA Code</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.employeeId}</td>
//                 <td>{item.employeeName}</td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.mainCategory}
//                     onChange={(e) => handleMappingChange(index, 'mainCategory', e.target.value)}
//                   >
//                     <option value="">-- Select Main Category --</option>
//                     {mainCategories.map((category, idx) => (
//                       <option key={idx} value={category}>{category}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.subCategory}
//                     onChange={(e) => handleMappingChange(index, 'subCategory', e.target.value)}
//                     disabled={!item.mainCategory}
//                   >
//                     <option value="">-- Select Sub Category --</option>
//                     {item.mainCategory && subCategories[item.mainCategory]?.map((subCat, idx) => (
//                       <option key={idx} value={subCat}>{subCat}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.skillLevel}
//                     onChange={(e) => handleMappingChange(index, 'skillLevel', e.target.value)}
//                   >
//                     <option value="">-- Select Skill Level --</option>
//                     {skillLevels.map((level, idx) => (
//                       <option key={idx} value={level}>{level}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>{item.functionType}</td>
//                 <td>{item.jobTitle}</td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.trainingCode}
//                     onChange={(e) => handleMappingChange(index, 'trainingCode', e.target.value)}
//                   >
//                     <option value="">-- Select Training --</option>
//                     {trainings.map((training, idx) => (
//                       <option key={idx} value={training._id}>
//                         {`${training.training_name} - ${training.training_category}`}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.ojtCode}
//                     onChange={(e) => handleMappingChange(index, 'ojtCode', e.target.value)}
//                   >
//                     <option value="">-- Select OJT --</option>
//                     {ojtData.map((ojt, idx) => (
//                       <option key={idx} value={ojt.ojt_code}>
//                         {`${ojt.ojt_code} - ${ojt.ojt_title}`}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.lmsAssessmentCode}
//                     onChange={(e) => handleMappingChange(index, 'lmsAssessmentCode', e.target.value)}
//                   >
//                     <option value="">-- Select Assessment --</option>
//                     {assessments.map((assessment, idx) => (
//                       <option key={idx} value={assessment.code}>
//                         {`${assessment.code} - ${assessment.assessment_title}`}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.ojaCode}
//                     onChange={(e) => handleMappingChange(index, 'ojaCode', e.target.value)}
//                   >
//                     <option value="">-- Select OJA --</option>
//                     {ojaData.map((oja, idx) => (
//                       <option key={idx} value={oja.oja_code}>
//                         {`${oja.oja_code} - ${oja.oja_title}`}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.inaCode}
//                     onChange={(e) => handleMappingChange(index, 'inaCode', e.target.value)}
//                   >
//                     <option value="">-- Select INA --</option>
//                     {inaData.map((ina, idx) => (
//                       <option key={idx} value={ina.ina_code}>
//                         {`${ina.ina_code} - ${ina.ina_title}`}
//                       </option>
//                     ))}
//                   </select>
//                 </td>
//                 <td className="date-column">
//                   <input 
//                     type='date' 
//                     value={item.deadLine}
//                     onChange={(e) => handleMappingChange(index, 'deadLine', e.target.value)} 
//                   />
//                 </td>
//                 <td>
//                   <select 
//                     className="form-select"
//                     value={item.validity}
//                     onChange={(e) => handleMappingChange(index, 'validity', e.target.value)}
//                   >
//                     <option value="">-- Select Validity --</option>
//                     {validityOptions.map((option, idx) => (
//                       <option key={idx} value={option.value}>{option.label}</option>
//                     ))}
//                   </select>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Pagination */}
//       <div className="pagination-container">
//         <button 
//           onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
//           disabled={currentPage === 1}
//           className="pagination-button"
//         >
//           Previous
//         </button>
        
//         <div className="page-numbers">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => paginate(i + 1)}
//               className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
        
//         <button
//           onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
//           disabled={currentPage === totalPages || totalPages === 0}
//           className="pagination-button"
//         >
//           Next
//         </button>
//       </div>

//       <ToastContainer/>
//     </div>
//   );
// }




export default function CompetencyMapping() {
  // States for different data types
  const [employees, setEmployees] = useState([]);
  const [courses, setCourses] = useState([]);
  const [trainings, setTrainings] = useState([]);
  const [ojtData, setOjtData] = useState([]);
  const [ojaData, setOjaData] = useState([]);
  const [inaData, setInaData] = useState([]);
  const [assessments, setAssessments] = useState([]);
  
  // State for current competency entries that will be created
  const [competencyMappings, setCompetencyMappings] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // States for bulk assignment
  const [showBulkAssign, setShowBulkAssign] = useState(false);
  const [bulkAssignment, setBulkAssignment] = useState({
    functionType: '',
    jobTitle: '',
    mainCategory: '',
    subCategory: '',
    skillLevel: '',
    courseCode: '',
    courseName: '',
    trainingCode: '',
    trainingName: '',
    ojtCode: '',
    ojtTitle: '',
    lmsAssessmentCode: '',
    assessmentTitle: '',
    ojaCode: '',
    ojaTitle: '',
    inaCode: '',
    inaTitle: '',
    validity: '',
    deadLine: ''
  });

  // Static data
  const mainCategories = [
    "Technical Skills", 
    "Soft Skills", 
    "Safety Skills", 
    "Operational Skills"
  ];
  
  const subCategories = {
    "Technical Skills": ["Electrical", "Mechanical", "HVAC", "Plumbing", "IT"],
    "Soft Skills": ["Communication", "Leadership", "Time Management", "Problem Solving"],
    "Safety Skills": ["Fire Safety", "First Aid", "Hazard Identification", "Emergency Response"],
    "Operational Skills": ["Project Management", "Quality Control", "Resource Management", "Documentation"]
  };
  
  const skillLevels = ["Level 1 - Basic", "Level 2 - Intermediate", "Level 3 - Advanced", "Level 4 - Expert"];
  
  const validityOptions = [
    { value: "3 months", label: "3 months" },
    { value: "6 months", label: "6 months" },
    { value: "9 months", label: "9 months" },
    { value: "12 months", label: "12 months" }
  ];

  // Fetch data on component mount
  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      // Fetch employees
      const employeesResponse = await axios.get(`${base_url}/employees`);
      console.log(employeesResponse);
      setEmployees(employeesResponse.data);
      
      // Initialize competency mappings with employee data
      const initialMappings = employeesResponse.data.map(emp => ({
        employeeId: emp.employee_id,
        employeeName: emp.employee_name,
        functionType: emp.function_title || '',
        jobTitle: emp.job_title || '',
        mainCategory: '',
        subCategory: '',
        skillLevel: '',
        courseCode: '',
        courseName: '',
        trainingCode: '',
        trainingName: '',
        ojtCode: '',
        ojtTitle: '',
        lmsAssessmentCode: '',
        assessmentTitle: '',
        ojaCode: '',
        ojaTitle: '',
        inaCode: '',
        inaTitle: '',
        validity: '',
        deadLine: ''
      }));
      setCompetencyMappings(initialMappings);
      
      // Fetch other data
      const coursesResponse = await axios.get(`${base_url}/courses`);
      console.log(coursesResponse);
      
      setCourses(coursesResponse.data);

      const trainingsResponse = await axios.get(`${base_url}/trainings`);
      setTrainings(trainingsResponse.data);
      
      const ojtResponse = await axios.get(`${base_url}/ojt`);
      setOjtData(ojtResponse.data);
      
      const ojaResponse = await axios.get(`${base_url}/oja`);
      setOjaData(ojaResponse.data);
      
      const inaResponse = await axios.get(`${base_url}/ina`);
      setInaData(inaResponse.data);
      
      const assessmentsResponse = await axios.get(`${base_url}/assessments`);
      setAssessments(assessmentsResponse.data);
      
    } catch (error) {
      console.error("Error fetching data:", error);
      // Handle error with user notification here
    }
  };

  // Search functionality
  // const handleSearch = (e) => {
  //   const term = e.target.value.toLowerCase();
  //   setSearchTerm(term);
  //   setCurrentPage(1);
  // };

  // Update the handleMappingChange function to also set the corresponding title when a code is selected
  const handleMappingChange = (index, field, value) => {
    const updatedMappings = [...competencyMappings];
    updatedMappings[index][field] = value;

    if (field === 'courseCode' && value && value !== 'NA') {
      const selectedCourse = courses.find(c => c.course_code === value);
      if (selectedCourse) {
        updatedMappings[index]['courseName'] = selectedCourse.course_title_main;
      }
    }
    
    // When a code is selected, also set its corresponding title
    if (field === 'trainingCode' && value && value !== 'NA') {
      const selectedTraining = trainings.find(t => t.training_code === value);
      if (selectedTraining) {
        updatedMappings[index]['trainingName'] = selectedTraining.training_name;
      }
    }
    
    if (field === 'ojtCode' && value && value !== 'NA') {
      const selectedOjt = ojtData.find(o => o.ojt_code === value);
      if (selectedOjt) {
        updatedMappings[index]['ojtTitle'] = selectedOjt.ojt_title;
      }
    }
    
    if (field === 'lmsAssessmentCode' && value && value !== 'NA') {
      const selectedAssessment = assessments.find(a => a.code === value);
      if (selectedAssessment) {
        updatedMappings[index]['assessmentTitle'] = selectedAssessment.assessment_title;
      }
    }
    
    if (field === 'ojaCode' && value && value !== 'NA') {
      const selectedOja = ojaData.find(o => o.oja_code === value);
      if (selectedOja) {
        updatedMappings[index]['ojaTitle'] = selectedOja.oja_title;
      }
    }
    
    if (field === 'inaCode' && value && value !== 'NA') {
      const selectedIna = inaData.find(i => i.ina_code === value);
      if (selectedIna) {
        updatedMappings[index]['inaTitle'] = selectedIna.ina_title;
      }
    }
    
    setCompetencyMappings(updatedMappings);
  };

  // Handle bulk assignment changes
  const handleBulkAssignmentChange = (field, value) => {
    const updatedBulkAssignment = { ...bulkAssignment };
    updatedBulkAssignment[field] = value;

    if (field === 'courseCode' && value && value !== 'NA') {
      const selectedCourse = courses.find(c => c.course_code === value);
      if (selectedCourse) {
        updatedBulkAssignment['courseName'] = selectedCourse.course_title_main;
      }
    }
    
    // When a code is selected in bulk assignment, also set its corresponding title
    if (field === 'trainingCode' && value && value !== 'NA') {
      const selectedTraining = trainings.find(t => t.training_code === value);
      if (selectedTraining) {
        updatedBulkAssignment['trainingName'] = selectedTraining.training_name;
      }
    }
    
    if (field === 'ojtCode' && value && value !== 'NA') {
      const selectedOjt = ojtData.find(o => o.ojt_code === value);
      if (selectedOjt) {
        updatedBulkAssignment['ojtTitle'] = selectedOjt.ojt_title;
      }
    }
    
    if (field === 'lmsAssessmentCode' && value && value !== 'NA') {
      const selectedAssessment = assessments.find(a => a.code === value);
      if (selectedAssessment) {
        updatedBulkAssignment['assessmentTitle'] = selectedAssessment.assessment_title;
      }
    }
    
    if (field === 'ojaCode' && value && value !== 'NA') {
      const selectedOja = ojaData.find(o => o.oja_code === value);
      if (selectedOja) {
        updatedBulkAssignment['ojaTitle'] = selectedOja.oja_title;
      }
    }
    
    if (field === 'inaCode' && value && value !== 'NA') {
      const selectedIna = inaData.find(i => i.ina_code === value);
      if (selectedIna) {
        updatedBulkAssignment['inaTitle'] = selectedIna.ina_title;
      }
    }
    
    // If validity is changed, update deadline accordingly
    // if (field === 'validity') {
    //   // Calculate deadline based on validity if needed
    //   updatedBulkAssignment.deadLine = value;
    // }
    
    setBulkAssignment(updatedBulkAssignment);
  };

  // Apply bulk assignment
  const applyBulkAssignment = () => {
    const { functionType, jobTitle } = bulkAssignment;
    
    // Validate that function and job title are selected
    if (!functionType || !jobTitle) {
      toast.info("Please select both Function Type and Job Title for bulk assignment");
      return;
    }
    
    // Update mappings for matching employees
    const updatedMappings = competencyMappings.map(mapping => {
      if (mapping.functionType === functionType && mapping.jobTitle === jobTitle) {
        return {
          ...mapping,
          mainCategory: bulkAssignment.mainCategory,
          subCategory: bulkAssignment.subCategory,
          skillLevel: bulkAssignment.skillLevel,
          courseCode: bulkAssignment.courseCode,
          courseName: bulkAssignment.courseName, // Include the title
          trainingCode: bulkAssignment.trainingCode,
          trainingName: bulkAssignment.trainingName, // Include the title
          ojtCode: bulkAssignment.ojtCode,
          ojtTitle: bulkAssignment.ojtTitle, // Include the title
          lmsAssessmentCode: bulkAssignment.lmsAssessmentCode,
          assessmentTitle: bulkAssignment.assessmentTitle, // Include the title
          ojaCode: bulkAssignment.ojaCode,
          ojaTitle: bulkAssignment.ojaTitle, // Include the title
          inaCode: bulkAssignment.inaCode,
          inaTitle: bulkAssignment.inaTitle, // Include the title
          validity: bulkAssignment.validity,
          deadLine: bulkAssignment.deadLine || bulkAssignment.validity
        };
      }
      return mapping;
    });
    
    setCompetencyMappings(updatedMappings);
    setShowBulkAssign(false);
    toast.success(`Competency data assigned to all employees with Function: ${functionType} and Job Title: ${jobTitle}`);
  };

  // Save all competency mappings
  const saveCompetencyMappings = async () => {
    try {
      // Filter out mappings that have no competency data set
      const mappingsToSave = competencyMappings.filter(mapping => 
        mapping.mainCategory || mapping.subCategory || mapping.skillLevel || mapping.courseCode ||
        mapping.trainingCode || mapping.ojtCode || mapping.lmsAssessmentCode || 
        mapping.ojaCode || mapping.inaCode
      );
      
      if (mappingsToSave.length === 0) {
        toast.info('No competency data to save. Please assign competencies first.');
        return;
      }
      
      await axios.post(`${base_url}/competency_mappings_post`, { mappings: mappingsToSave });
      toast.success('Competency mappings saved successfully!');
      
      // Reset the form for new entries
      fetchAllData();
    } catch (error) {
      console.error("Error saving competency mappings:", error);
      toast.error('Failed to save competency mappings. Please try again.');
    }
  };

  // Filter competency mappings based on search term
  const filteredMappings = competencyMappings.filter(mapping => {
    if (searchTerm === '') return true;
    
    return (
      mapping.employeeId?.toLowerCase().includes(searchTerm) ||
      mapping.employeeName?.toLowerCase().includes(searchTerm) ||
      mapping.functionType?.toLowerCase().includes(searchTerm) ||
      mapping.jobTitle?.toLowerCase().includes(searchTerm) ||
      mapping.mainCategory?.toLowerCase().includes(searchTerm) ||
      mapping.subCategory?.toLowerCase().includes(searchTerm)
    );
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredMappings.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredMappings.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Get unique function types and job titles for bulk assignment
  const uniqueFunctionTypes = [...new Set(competencyMappings.map(item => item.functionType).filter(Boolean))];
  const uniqueJobTitles = [...new Set(competencyMappings.map(item => item.jobTitle).filter(Boolean))];

  // Render "NA" option in select boxes
  const renderSelectWithNA = (options, value, onChange, placeholder) => (
    <select 
      className="form-select"
      value={value}
      onChange={onChange}
    >
      <option value="">{placeholder}</option>
      <option value="NA">Not Applicable (NA)</option>
      {options}
    </select>
  );

  return (
    <div className="competency-container">
      <h1 className="mapping-title">Competency Mapping</h1>
      
      <div className="controls-container">
        {/* Search box */}
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <span className="search-icon">🔍</span>
        </div>
        
        {/* Action buttons */}
        <div className="action-buttons">
          <button 
            onClick={() => setShowBulkAssign(!showBulkAssign)}
            className="btn btn-primary"
          >
            {showBulkAssign ? 'Hide Bulk Assign' : 'Bulk Assign'}
          </button>
          
          <button 
            onClick={saveCompetencyMappings}
            className="btn btn-success"
          >
            Save All Mappings
          </button>
        </div>
      </div>
      
      {/* Bulk Assignment Panel */}
      {showBulkAssign && (
        <div className="bulk-assign-panel">
          <h2 className="panel-title">Bulk Assignment</h2>
          <div className="grid-container grid-5-cols">
            <div className="form-group">
              <label className="form-label">Function Type</label>
              <select 
                className="form-select"
                value={bulkAssignment.functionType}
                onChange={(e) => handleBulkAssignmentChange('functionType', e.target.value)}
              >
                <option value="">-- Select Function --</option>
                {uniqueFunctionTypes.map((func, idx) => (
                  <option key={idx} value={func}>{func}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Job Title</label>
              <select 
                className="form-select"
                value={bulkAssignment.jobTitle}
                onChange={(e) => handleBulkAssignmentChange('jobTitle', e.target.value)}
              >
                <option value="">-- Select Job Title --</option>
                {uniqueJobTitles.map((job, idx) => (
                  <option key={idx} value={job}>{job}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Main Category</label>
              <select 
                className="form-select"
                value={bulkAssignment.mainCategory}
                onChange={(e) => handleBulkAssignmentChange('mainCategory', e.target.value)}
              >
                <option value="">-- Select Main Category --</option>
                {mainCategories.map((category, idx) => (
                  <option key={idx} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Sub Category</label>
              <select 
                className="form-select"
                value={bulkAssignment.subCategory}
                onChange={(e) => handleBulkAssignmentChange('subCategory', e.target.value)}
                disabled={!bulkAssignment.mainCategory}
              >
                <option value="">-- Select Sub Category --</option>
                {bulkAssignment.mainCategory && subCategories[bulkAssignment.mainCategory]?.map((subCat, idx) => (
                  <option key={idx} value={subCat}>{subCat}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group">
              <label className="form-label">Skill Level</label>
              <select 
                className="form-select"
                value={bulkAssignment.skillLevel}
                onChange={(e) => handleBulkAssignmentChange('skillLevel', e.target.value)}
              >
                <option value="">-- Select Skill Level --</option>
                {skillLevels.map((level, idx) => (
                  <option key={idx} value={level}>{level}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid-container grid-5-cols">
            <div className="form-group">
              <label className="form-label">Course</label>
              {renderSelectWithNA(
                courses.map((course, idx) => (
                  <option key={idx} value={course.course_code}>
                    {`${course.course_code} - ${course.course_title_main}`}
                  </option>
                )),
                bulkAssignment.courseCode,
                (e) => handleBulkAssignmentChange('courseCode', e.target.value),
                "-- Select Course --"
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Training</label>
              {renderSelectWithNA(
                trainings.map((training, idx) => (
                  <option key={idx} value={training.training_code}>
                    {`${training.training_code} - ${training.training_name}`}
                  </option>
                )),
                bulkAssignment.trainingCode,
                (e) => handleBulkAssignmentChange('trainingCode', e.target.value),
                "-- Select Training --"
              )}
            </div>
            
            <div className="form-group">
              <label className="form-label">OJT Code</label>
              {renderSelectWithNA(
                ojtData.map((ojt, idx) => (
                  <option key={idx} value={ojt.ojt_code}>
                    {`${ojt.ojt_code} - ${ojt.ojt_title}`}
                  </option>
                )),
                bulkAssignment.ojtCode,
                (e) => handleBulkAssignmentChange('ojtCode', e.target.value),
                "-- Select OJT --"
              )}
            </div>
            
            <div className="form-group">
              <label className="form-label">Assessment</label>
              {renderSelectWithNA(
                assessments.map((assessment, idx) => (
                  <option key={idx} value={assessment.code}>
                    {`${assessment.code} - ${assessment.assessment_title}`}
                  </option>
                )),
                bulkAssignment.lmsAssessmentCode,
                (e) => handleBulkAssignmentChange('lmsAssessmentCode', e.target.value),
                "-- Select Assessment --"
              )}
            </div>
            
            <div className="form-group">
              <label className="form-label">OJA Code</label>
              {renderSelectWithNA(
                ojaData.map((oja, idx) => (
                  <option key={idx} value={oja.oja_code}>
                    {`${oja.oja_code} - ${oja.oja_title}`}
                  </option>
                )),
                bulkAssignment.ojaCode,
                (e) => handleBulkAssignmentChange('ojaCode', e.target.value),
                "-- Select OJA --"
              )}
            </div>
            
            <div className="form-group">
              <label className="form-label">INA Code</label>
              {renderSelectWithNA(
                inaData.map((ina, idx) => (
                  <option key={idx} value={ina.ina_code}>
                    {`${ina.ina_code} - ${ina.ina_title}`}
                  </option>
                )),
                bulkAssignment.inaCode,
                (e) => handleBulkAssignmentChange('inaCode', e.target.value),
                "-- Select INA --"
              )}
            </div>
          </div>
          
          <div className="grid-container grid-2-cols">
            <div className="form-group">
              <label className="form-label">Validity</label>
              <select 
                className="form-select"
                value={bulkAssignment.validity}
                onChange={(e) => handleBulkAssignmentChange('validity', e.target.value)}
              >
                <option value="">-- Select Validity --</option>
                {validityOptions.map((option, idx) => (
                  <option key={idx} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
            
            <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <button 
                onClick={applyBulkAssignment}
                className="btn btn-primary"
              >
                Apply to Selected Function/Job
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Table */}
      <div className="table-container">
        <table className="mapping-table">
          <thead>
            <tr>
              <th colSpan={2}>Employee details</th>
              <th colSpan={2}>Skills Category / Tags</th>
              <th>Define Skills level</th>
              <th>Assign Function</th>
              <th>Assign Job Profile</th>
              <th>Courses</th>
              <th colSpan={2}>Training Map Skills</th>
              <th colSpan={3}>Assessment to Map Skills</th>
              <th rowSpan={2}>Dead Line</th>
              <th rowSpan={2}>Validity</th>
            </tr>
            <tr>
              <th className="id-column">Employee Id</th>
              <th className="name-column">Employee Name</th>
              <th className="select-column">Main Category</th>
              <th className="select-column">Sub Category</th>
              <th className="select-column">Skill Level</th>
              <th>Function Type</th>
              <th>Job Title</th>
              <th className="select-column">Course</th>
              <th className="select-column">Training Code</th>
              <th className="select-column">OJT Code</th>
              <th className="select-column">LMS Assessment</th>
              <th className="select-column">OJA Code</th>
              <th className="select-column">INA Code</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item, index) => (
              <tr key={index}>
                <td>{item.employeeId}</td>
                <td>{item.employeeName}</td>
                <td>
                  <select 
                    className="form-select"
                    value={item.mainCategory}
                    onChange={(e) => handleMappingChange(index + indexOfFirstItem, 'mainCategory', e.target.value)}
                  >
                    <option value="">-- Select Main Category --</option>
                    {mainCategories.map((category, idx) => (
                      <option key={idx} value={category}>{category}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select 
                    className="form-select"
                    value={item.subCategory}
                    onChange={(e) => handleMappingChange(index + indexOfFirstItem, 'subCategory', e.target.value)}
                    disabled={!item.mainCategory}
                  >
                    <option value="">-- Select Sub Category --</option>
                    {item.mainCategory && subCategories[item.mainCategory]?.map((subCat, idx) => (
                      <option key={idx} value={subCat}>{subCat}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <select 
                    className="form-select"
                    value={item.skillLevel}
                    onChange={(e) => handleMappingChange(index + indexOfFirstItem, 'skillLevel', e.target.value)}
                  >
                    <option value="">-- Select Skill Level --</option>
                    {skillLevels.map((level, idx) => (
                      <option key={idx} value={level}>{level}</option>
                    ))}
                  </select>
                </td>
                <td>{item.functionType}</td>
                <td>{item.jobTitle}</td>
                <td>
                  {renderSelectWithNA(
                    courses.map((course, idx) => (
                      <option key={idx} value={course.course_code}>
                        {`${course.course_code} - ${course.course_title_main}`}
                      </option>
                    )),
                    item.courseCode,
                    (e) => handleMappingChange(index + indexOfFirstItem, 'courseCode', e.target.value),
                    "-- Select Course --"
                  )}
                </td>
                <td>
                  {renderSelectWithNA(
                    trainings.map((training, idx) => (
                      <option key={idx} value={training.training_code}>
                        {`${training.training_code} - ${training.training_name}`}
                      </option>
                    )),
                    item.trainingCode,
                    (e) => handleMappingChange(index + indexOfFirstItem, 'trainingCode', e.target.value),
                    "-- Select Training --"
                  )}
                </td>
                <td>
                  {renderSelectWithNA(
                    ojtData.map((ojt, idx) => (
                      <option key={idx} value={ojt.ojt_code}>
                        {`${ojt.ojt_code} - ${ojt.ojt_title}`}
                      </option>
                    )),
                    item.ojtCode,
                    (e) => handleMappingChange(index + indexOfFirstItem, 'ojtCode', e.target.value),
                    "-- Select OJT --"
                  )}
                </td>
                <td>
                  {renderSelectWithNA(
                    assessments.map((assessment, idx) => (
                      <option key={idx} value={assessment.code}>
                        {`${assessment.code} - ${assessment.assessment_title}`}
                      </option>
                    )),
                    item.lmsAssessmentCode,
                    (e) => handleMappingChange(index + indexOfFirstItem, 'lmsAssessmentCode', e.target.value),
                    "-- Select Assessment --"
                  )}
                </td>
                <td>
                  {renderSelectWithNA(
                    ojaData.map((oja, idx) => (
                      <option key={idx} value={oja.oja_code}>
                        {`${oja.oja_code} - ${oja.oja_title}`}
                      </option>
                    )),
                    item.ojaCode,
                    (e) => handleMappingChange(index + indexOfFirstItem, 'ojaCode', e.target.value),
                    "-- Select OJA --"
                  )}
                </td>
                <td>
                  {renderSelectWithNA(
                    inaData.map((ina, idx) => (
                      <option key={idx} value={ina.ina_code}>
                        {`${ina.ina_code} - ${ina.ina_title}`}
                      </option>
                    )),
                    item.inaCode,
                    (e) => handleMappingChange(index + indexOfFirstItem, 'inaCode', e.target.value),
                    "-- Select INA --"
                  )}
                </td>
                <td className="date-column">
                  <input 
                    type='date' 
                    value={item.deadLine}
                    onChange={(e) => handleMappingChange(index + indexOfFirstItem, 'deadLine', e.target.value)} 
                  />
                </td>
                <td>
                  <select 
                    className="form-select"
                    value={item.validity}
                    onChange={(e) => handleMappingChange(index + indexOfFirstItem, 'validity', e.target.value)}
                  >
                    <option value="">-- Select Validity --</option>
                    {validityOptions.map((option, idx) => (
                      <option key={idx} value={option.value}>{option.label}</option>
                    ))}
                  </select>
                </td>
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
              className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
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

      <ToastContainer/>

      <style jsx>{`
  /* Main Container Styles */
.competency-container {
max-width: 100%;
padding: 2rem;
background-color: #f8f9fa;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
border-radius: 8px;
}

.mapping-title {
font-size: 1.75rem;
font-weight: 700;
color: #2c3e50;
margin-bottom: 1.5rem;
border-bottom: 3px solid #3498db;
padding-bottom: 0.5rem;
display: inline-block;
}

/* Header Controls */
.controls-container {
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 1.5rem;
}

/* Search Box */
.search-container {
position: relative;
width: 33%;
}

.search-input {
border-radius: 30px;
padding: 12px 45px 12px 16px;
width: 100%;
height: 50px;
font-size: 16px;
border: 2px solid #e0e0e0;
outline: none;
transition: all 0.3s ease;
background-color: white;
}

.search-input:focus {
border-color: #3498db;
box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.search-icon {
position: absolute;
right: 16px;
top: 50%;
transform: translateY(-50%);
color: #7f8c8d;
pointer-events: none;
}

/* Buttons */
.action-buttons {
display: flex;
gap: 10px;
}

.btn {
// padding: 20px 20px;
border-radius: 6px;
font-weight: 600;
cursor: pointer;
transition: all 0.2s ease;
border: none;
display: flex;
align-items: center;
justify-content: center;
width: 200px;
height: 40px;
}

.btn-primary {
background-color: #3498db;
color: white;
}

.btn-primary:hover {
background-color: #2980b9;
}

.btn-success {
background-color: #2ecc71;
color: white;
}

.btn-success:hover {
background-color: #27ae60;
}

/* Bulk Assignment Panel */
.bulk-assign-panel {
background-color: #ffffff;
padding: 1.5rem;
margin-bottom: 1.5rem;
border-radius: 8px;
box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
border-left: 4px solid #3498db;
}

.panel-title {
font-size: 1.25rem;
font-weight: 600;
margin-bottom: 1rem;
color: #2c3e50;
}

.grid-container {
display: grid;
gap: 1rem;
}

.grid-5-cols {
grid-template-columns: repeat(5, 1fr);
}

.grid-2-cols {
grid-template-columns: repeat(2, 1fr);
}

/* Form Elements */
.form-group {
margin-bottom: 1rem;
}

.form-label {
display: block;
font-size: 0.875rem;
font-weight: 600;
margin-bottom: 0.5rem;
color: #495057;
}

.form-select,
.form-input {
width: 100%;
padding: 10px 12px;
border: 1px solid #ced4da;
border-radius: 6px;
font-size: 0.9rem;
transition: border-color 0.2s;
background-color: white;
}

.form-select:focus,
.form-input:focus {
border-color: #3498db;
outline: none;
box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
}

.form-select:disabled {
background-color: #f1f3f5;
cursor: not-allowed;
opacity: 0.7;
}

/* Table Styles */
.table-container {
overflow-x: auto;
margin-bottom: 1.5rem;
border-radius: 6px;
box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.mapping-table {
width: 100%;
border-collapse: separate;
border-spacing: 0;
background-color: white;
}

.mapping-table th,
.mapping-table td {
padding: 10px 12px;
text-align: left;
border: 1px solid #dee2e6;
font-size: 0.9rem;
}

.mapping-table th {
background-color: #f2f6fc;
font-weight: 600;
color: #2c3e50;
position: sticky;
top: 0;
z-index: 10;
}

.mapping-table thead th {
border-bottom: 2px solid #3498db;
}

.mapping-table tbody tr:nth-child(even) {
background-color: #f8f9fa;
}

.mapping-table tbody tr:hover {
background-color: #e9f7fe;
}

.mapping-table select {
width: 100%;
padding: 8px;
border: 1px solid #ced4da;
border-radius: 4px;
background-color: white;
font-size: 0.85rem;
}

.mapping-table select:focus {
border-color: #3498db;
outline: none;
box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

.mapping-table select:disabled {
background-color: #f1f3f5;
}

/* Column specific styles for better readability */
.mapping-table .id-column {
width: 100px;
}

.mapping-table .name-column {
width: 150px;
}

.mapping-table .select-column {
min-width: 180px;
}

.mapping-table .date-column {
width: 120px;
}

/* Pagination */
.pagination-container {
display: flex;
justify-content: center;
margin-top: 1.5rem;
}

.pagination-button {
padding: 8px 15px;
// background-color: #f1f3f5;
border: none;
border-radius: 4px;
margin: 0 5px;
cursor: pointer;
font-weight: 500;
transition: all 0.2s;
}

.pagination-button:hover:not(:disabled) {
background-color: #3498db;
color: white;
}

.pagination-button:disabled {
opacity: 0.5;
cursor: not-allowed;
}

.page-numbers {
display: flex;
}

.page-number {
padding: 8px 15px;
margin: 0 3px;
border-radius: 4px;
border: none;
cursor: pointer;
background-color: #fff;
transition: all 0.2s;
color: #3498db;
border: 1px solid #3498db;
}

.page-number.active {
background-color: #3498db;
color: white;
}

.page-number:hover:not(.active) {
background-color: #3498db;
color: #fff;
}

/* Toast Notifications */
.toast-container {
position: fixed;
top: 20px;
right: 20px;
z-index: 1000;
}

/* Responsive Adjustments */
@media (max-width: 1200px) {
.grid-5-cols {
grid-template-columns: repeat(3, 1fr);
}

.search-container {
width: 40%;
}
}

@media (max-width: 992px) {
.grid-5-cols {
grid-template-columns: repeat(2, 1fr);
}

.grid-2-cols {
grid-template-columns: 1fr;
}

.controls-container {
flex-direction: column;
align-items: flex-start;
}

.search-container {
width: 100%;
margin-bottom: 1rem;
}

.action-buttons {
width: 100%;
}
}

@media (max-width: 768px) {
.grid-5-cols {
grid-template-columns: 1fr;
}

.competency-container {
padding: 1rem;
}

.page-numbers {
display: none;
}

.pagination-container {
justify-content: space-between;
}
}
  `}</style>
    </div>
  );
}












// export default function CompetencyMapping() {
//   // States for different data types
//   const [employees, setEmployees] = useState([]);
//   const [trainings, setTrainings] = useState([]);
//   const [ojtData, setOjtData] = useState([]);
//   const [ojaData, setOjaData] = useState([]);
//   const [inaData, setInaData] = useState([]);
//   const [assessments, setAssessments] = useState([]);
  
//   // State for competency mappings
//   const [competencyMappings, setCompetencyMappings] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;

//   // States for bulk assignment
//   const [showBulkAssign, setShowBulkAssign] = useState(false);
//   const [bulkAssignment, setBulkAssignment] = useState({
//     functionType: '',
//     jobTitle: '',
//     mainCategory: '',
//     subCategory: '',
//     skillLevel: '',
//     trainingCode: '',
//     ojtCode: '',
//     lmsAssessmentCode: '',
//     ojaCode: '',
//     inaCode: '',
//     validity: '',
//     deadLine: ''
//   });

//   // Static data
//   const mainCategories = [
//     "Technical Skills", 
//     "Soft Skills", 
//     "Safety Skills", 
//     "Operational Skills"
//   ];
  
//   const subCategories = {
//     "Technical Skills": ["Electrical", "Mechanical", "HVAC", "Plumbing", "IT"],
//     "Soft Skills": ["Communication", "Leadership", "Time Management", "Problem Solving"],
//     "Safety Skills": ["Fire Safety", "First Aid", "Hazard Identification", "Emergency Response"],
//     "Operational Skills": ["Project Management", "Quality Control", "Resource Management", "Documentation"]
//   };
  
//   const skillLevels = ["Level 1 - Basic", "Level 2 - Intermediate", "Level 3 - Advanced", "Level 4 - Expert"];
  
//   const validityOptions = [
//     { value: "3 months", label: "3 months" },
//     { value: "6 months", label: "6 months" },
//     { value: "9 months", label: "9 months" },
//     { value: "12 months", label: "12 months" }
//   ];

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       // Fetch employees
//       const employeesResponse = await axios.get(`${base_url}/employees`);
//       console.log(employeesResponse);
      
//       setEmployees(employeesResponse.data.employee);
      
//       // Fetch competency mappings
//       const competencyMappingsResponse = await axios.get(`${base_url}/competency-mappings`);
      
//       // If there are existing mappings, use them
//       if (competencyMappingsResponse.data && competencyMappingsResponse.data.length > 0) {
//         setCompetencyMappings(competencyMappingsResponse.data);
//       } else {
//         // Initialize competency mappings with employee data if no existing mappings
//         const initialMappings = employeesResponse.data.employee.map(emp => ({
//           employeeId: emp.employee_id,
//           employeeName: emp.employee_name,
//           functionType: emp.function_title || '',
//           jobTitle: emp.job_title || '',
//           mainCategory: '',
//           subCategory: '',
//           skillLevel: '',
//           trainingCode: '',
//           ojtCode: '',
//           lmsAssessmentCode: '',
//           ojaCode: '',
//           inaCode: '',
//           validity: '',
//           deadLine: ''
//         }));
//         setCompetencyMappings(initialMappings);
//       }
      
//       // Fetch other data
//       const trainingsResponse = await axios.get(`${base_url}/trainings`);
//       console.log(trainingsResponse);
//       setTrainings(trainingsResponse.data);
      
//       const ojtResponse = await axios.get(`${base_url}/ojt`);
//       console.log(ojtResponse);
//       setOjtData(ojtResponse.data);
      
//       const ojaResponse = await axios.get(`${base_url}/oja`);
//       console.log(ojaResponse)
//       setOjaData(ojaResponse.data);
      
//       const inaResponse = await axios.get(`${base_url}/ina`);
//       console.log(inaResponse);
//       setInaData(inaResponse.data);
      
//       const assessmentsResponse = await axios.get(`${base_url}/assessments`);
//       console.log(assessmentsResponse);
//       setAssessments(assessmentsResponse.data);
      
//     } catch (error) {
//       console.error("Error fetching data:", error);
//       toast.error("Failed to fetch data. Please try again.");
//     }
//   };

//   // Search functionality
//   const handleSearch = (e) => {
//     const term = e.target.value.toLowerCase();
//     setSearchTerm(term);
//     setCurrentPage(1);
//   };

//   // Handle changes to individual mapping fields
//   const handleMappingChange = (index, field, value) => {
//     const updatedMappings = [...competencyMappings];
//     updatedMappings[index][field] = value;
    
//     // If the value is "NA", also update the corresponding title field
//     if (value === "NA") {
//       switch(field) {
//         case 'trainingCode':
//           updatedMappings[index].trainingName = "Not Applicable";
//           break;
//         case 'ojtCode':
//           updatedMappings[index].ojtTitle = "Not Applicable";
//           break;
//         case 'lmsAssessmentCode':
//           updatedMappings[index].assessmentTitle = "Not Applicable";
//           break;
//         case 'ojaCode':
//           updatedMappings[index].ojaTitle = "Not Applicable";
//           break;
//         case 'inaCode':
//           updatedMappings[index].inaTitle = "Not Applicable";
//           break;
//         default:
//           break;
//       }
//     } else {
//       // Update corresponding title fields based on selected code
//       if (field === 'trainingCode' && value !== '') {
//         const selectedTraining = trainings.find(t => t._id === value);
//         if (selectedTraining) {
//           updatedMappings[index].trainingName = selectedTraining.training_name;
//         }
//       }
      
//       if (field === 'ojtCode' && value !== '') {
//         const selectedOjt = ojtData.find(o => o.ojt_code === value);
//         if (selectedOjt) {
//           updatedMappings[index].ojtTitle = selectedOjt.ojt_title;
//         }
//       }
      
//       if (field === 'lmsAssessmentCode' && value !== '') {
//         const selectedAssessment = assessments.find(a => a.code === value);
//         if (selectedAssessment) {
//           updatedMappings[index].assessmentTitle = selectedAssessment.assessment_title;
//         }
//       }
      
//       if (field === 'ojaCode' && value !== '') {
//         const selectedOja = ojaData.find(o => o.oja_code === value);
//         if (selectedOja) {
//           updatedMappings[index].ojaTitle = selectedOja.oja_title;
//         }
//       }
      
//       if (field === 'inaCode' && value !== '') {
//         const selectedIna = inaData.find(i => i.ina_code === value);
//         if (selectedIna) {
//           updatedMappings[index].inaTitle = selectedIna.ina_title;
//         }
//       }
//     }
    
//     // Calculate deadline date if setting validity
//     if (field === 'deadLine' && value) {
//       updatedMappings[index].assignedDate = new Date().toISOString().split('T')[0];
//     }
    
//     setCompetencyMappings(updatedMappings);
//   };

//   // Handle bulk assignment changes
//   const handleBulkAssignmentChange = (field, value) => {
//     const updatedBulkAssignment = { ...bulkAssignment };
//     updatedBulkAssignment[field] = value;
    
//     // Handle special case for NA values and title fields
//     if (value === "NA") {
//       switch(field) {
//         case 'trainingCode':
//           updatedBulkAssignment.trainingName = "Not Applicable";
//           break;
//         case 'ojtCode':
//           updatedBulkAssignment.ojtTitle = "Not Applicable";
//           break;
//         case 'lmsAssessmentCode':
//           updatedBulkAssignment.assessmentTitle = "Not Applicable";
//           break;
//         case 'ojaCode':
//           updatedBulkAssignment.ojaTitle = "Not Applicable";
//           break;
//         case 'inaCode':
//           updatedBulkAssignment.inaTitle = "Not Applicable";
//           break;
//         default:
//           break;
//       }
//     } else {
//       // Update corresponding title fields based on selected code
//       if (field === 'trainingCode' && value !== '') {
//         const selectedTraining = trainings.find(t => t._id === value);
//         if (selectedTraining) {
//           updatedBulkAssignment.trainingName = selectedTraining.training_name;
//         }
//       }
      
//       if (field === 'ojtCode' && value !== '') {
//         const selectedOjt = ojtData.find(o => o.ojt_code === value);
//         if (selectedOjt) {
//           updatedBulkAssignment.ojtTitle = selectedOjt.ojt_title;
//         }
//       }
      
//       if (field === 'lmsAssessmentCode' && value !== '') {
//         const selectedAssessment = assessments.find(a => a.code === value);
//         if (selectedAssessment) {
//           updatedBulkAssignment.assessmentTitle = selectedAssessment.assessment_title;
//         }
//       }
      
//       if (field === 'ojaCode' && value !== '') {
//         const selectedOja = ojaData.find(o => o.oja_code === value);
//         if (selectedOja) {
//           updatedBulkAssignment.ojaTitle = selectedOja.oja_title;
//         }
//       }
      
//       if (field === 'inaCode' && value !== '') {
//         const selectedIna = inaData.find(i => i.ina_code === value);
//         if (selectedIna) {
//           updatedBulkAssignment.inaTitle = selectedIna.ina_title;
//         }
//       }
//     }
    
//     setBulkAssignment(updatedBulkAssignment);
//   };

//   // Apply bulk assignment
//   const applyBulkAssignment = () => {
//     const { functionType, jobTitle } = bulkAssignment;
    
//     // Validate that function and job title are selected
//     if (!functionType || !jobTitle) {
//       toast.info("Please select both Function Type and Job Title for bulk assignment");
//       return;
//     }
    
//     // Update mappings for matching employees
//     const updatedMappings = competencyMappings.map(mapping => {
//       if (mapping.functionType === functionType && mapping.jobTitle === jobTitle) {
//         const updatedMapping = {
//           ...mapping,
//           mainCategory: bulkAssignment.mainCategory || mapping.mainCategory,
//           subCategory: bulkAssignment.subCategory || mapping.subCategory,
//           skillLevel: bulkAssignment.skillLevel || mapping.skillLevel,
//           trainingCode: bulkAssignment.trainingCode || mapping.trainingCode,
//           trainingName: bulkAssignment.trainingName || mapping.trainingName,
//           ojtCode: bulkAssignment.ojtCode || mapping.ojtCode,
//           ojtTitle: bulkAssignment.ojtTitle || mapping.ojtTitle,
//           lmsAssessmentCode: bulkAssignment.lmsAssessmentCode || mapping.lmsAssessmentCode,
//           assessmentTitle: bulkAssignment.assessmentTitle || mapping.assessmentTitle,
//           ojaCode: bulkAssignment.ojaCode || mapping.ojaCode,
//           ojaTitle: bulkAssignment.ojaTitle || mapping.ojaTitle,
//           inaCode: bulkAssignment.inaCode || mapping.inaCode,
//           inaTitle: bulkAssignment.inaTitle || mapping.inaTitle,
//           validity: bulkAssignment.validity || mapping.validity,
//         };
        
//         // Set deadline if provided
//         if (bulkAssignment.deadLine) {
//           updatedMapping.deadLine = bulkAssignment.deadLine;
//           updatedMapping.assignedDate = new Date().toISOString().split('T')[0];
//         }
        
//         return updatedMapping;
//       }
//       return mapping;
//     });
    
//     setCompetencyMappings(updatedMappings);
//     setShowBulkAssign(false);
//     toast.success(`Competency data assigned to all employees with Function: ${functionType} and Job Title: ${jobTitle}`);
//   };

//   // Save all competency mappings
//   const saveCompetencyMappings = async () => {
//     try {
//       // Add assigned date and status to each mapping
//       const mappingsToSave = competencyMappings.map(mapping => {
//         if (mapping.deadLine && !mapping.assignedDate) {
//           mapping.assignedDate = new Date().toISOString().split('T')[0];
//         }
//         return {
//           ...mapping,
//           status: 'active'
//         };
//       });
      
//       const response = await axios.post(`${base_url}/competency_mappings_post`, { mappings: mappingsToSave });
//       toast.success('Competency mappings saved successfully!');
      
//       // Refresh data after saving
//       fetchAllData();
//     } catch (error) {
//       console.error("Error saving competency mappings:", error);
//       toast.error('Failed to save competency mappings. Please try again.');
//     }
//   };

//   // Filter competency mappings based on search term
//   const filteredMappings = competencyMappings.filter(mapping => {
//     if (searchTerm === '') return true;
    
//     return (
//       mapping.employeeId?.toLowerCase().includes(searchTerm) ||
//       mapping.employeeName?.toLowerCase().includes(searchTerm) ||
//       mapping.functionType?.toLowerCase().includes(searchTerm) ||
//       mapping.jobTitle?.toLowerCase().includes(searchTerm) ||
//       mapping.mainCategory?.toLowerCase().includes(searchTerm) ||
//       mapping.subCategory?.toLowerCase().includes(searchTerm)
//     );
//   });

//   // Calculate pagination
//   const totalPages = Math.ceil(filteredMappings.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = filteredMappings.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   // Get unique function types and job titles for bulk assignment
//   const uniqueFunctionTypes = [...new Set(competencyMappings.map(item => item.functionType).filter(Boolean))];
//   const uniqueJobTitles = [...new Set(competencyMappings.map(item => item.jobTitle).filter(Boolean))];

//   return (
//     <div className="competency-container">
//       <h1 className="mapping-title">Competency Mapping</h1>
      
//       <div className="controls-container">
//         {/* Search box */}
//         <div className="search-container">
//           <input
//             type="text"
//             className="search-input"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <span className="search-icon">🔍</span>
//         </div>
        
//         {/* Action buttons */}
//         <div className="action-buttons">
//           <button 
//             onClick={() => setShowBulkAssign(!showBulkAssign)}
//             className="btn btn-primary"
//           >
//             {showBulkAssign ? 'Hide Bulk Assign' : 'Bulk Assign'}
//           </button>
          
//           <button 
//             onClick={saveCompetencyMappings}
//             className="btn btn-success"
//           >
//             Save All Mappings
//           </button>
//         </div>
//       </div>
      
//       {/* Bulk Assignment Panel */}
//       {showBulkAssign && (
//         <div className="bulk-assign-panel">
//           <h2 className="panel-title">Bulk Assignment</h2>
//           <div className="grid-container grid-5-cols">
//             <div className="form-group">
//               <label className="form-label">Function Type</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.functionType}
//                 onChange={(e) => handleBulkAssignmentChange('functionType', e.target.value)}
//               >
//                 <option value="">-- Select Function --</option>
//                 {uniqueFunctionTypes.map((func, idx) => (
//                   <option key={idx} value={func}>{func}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Job Title</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.jobTitle}
//                 onChange={(e) => handleBulkAssignmentChange('jobTitle', e.target.value)}
//               >
//                 <option value="">-- Select Job Title --</option>
//                 {uniqueJobTitles.map((job, idx) => (
//                   <option key={idx} value={job}>{job}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Main Category</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.mainCategory}
//                 onChange={(e) => handleBulkAssignmentChange('mainCategory', e.target.value)}
//               >
//                 <option value="">-- Select Main Category --</option>
//                 {mainCategories.map((category, idx) => (
//                   <option key={idx} value={category}>{category}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Sub Category</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.subCategory}
//                 onChange={(e) => handleBulkAssignmentChange('subCategory', e.target.value)}
//                 disabled={!bulkAssignment.mainCategory}
//               >
//                 <option value="">-- Select Sub Category --</option>
//                 {bulkAssignment.mainCategory && subCategories[bulkAssignment.mainCategory]?.map((subCat, idx) => (
//                   <option key={idx} value={subCat}>{subCat}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Skill Level</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.skillLevel}
//                 onChange={(e) => handleBulkAssignmentChange('skillLevel', e.target.value)}
//               >
//                 <option value="">-- Select Skill Level --</option>
//                 {skillLevels.map((level, idx) => (
//                   <option key={idx} value={level}>{level}</option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="grid-container grid-5-cols">
//             <div className="form-group">
//               <label className="form-label">Training</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.trainingCode}
//                 onChange={(e) => handleBulkAssignmentChange('trainingCode', e.target.value)}
//               >
//                 <option value="">-- Select Training --</option>
//                 <option value="NA">Not Applicable</option>
//                 {trainings.map((training, idx) => (
//                   <option key={idx} value={training._id}>
//                     {`${training.training_name} - ${training.training_category}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">OJT Code</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.ojtCode}
//                 onChange={(e) => handleBulkAssignmentChange('ojtCode', e.target.value)}
//               >
//                 <option value="">-- Select OJT --</option>
//                 <option value="NA">Not Applicable</option>
//                 {ojtData.map((ojt, idx) => (
//                   <option key={idx} value={ojt.ojt_code}>
//                     {`${ojt.ojt_code} - ${ojt.ojt_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Assessment</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.lmsAssessmentCode}
//                 onChange={(e) => handleBulkAssignmentChange('lmsAssessmentCode', e.target.value)}
//               >
//                 <option value="">-- Select Assessment --</option>
//                 <option value="NA">Not Applicable</option>
//                 {assessments.map((assessment, idx) => (
//                   <option key={idx} value={assessment.code}>
//                     {`${assessment.code} - ${assessment.assessment_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">OJA Code</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.ojaCode}
//                 onChange={(e) => handleBulkAssignmentChange('ojaCode', e.target.value)}
//               >
//                 <option value="">-- Select OJA --</option>
//                 <option value="NA">Not Applicable</option>
//                 {ojaData.map((oja, idx) => (
//                   <option key={idx} value={oja.oja_code}>
//                     {`${oja.oja_code} - ${oja.oja_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">INA Code</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.inaCode}
//                 onChange={(e) => handleBulkAssignmentChange('inaCode', e.target.value)}
//               >
//                 <option value="">-- Select INA --</option>
//                 <option value="NA">Not Applicable</option>
//                 {inaData.map((ina, idx) => (
//                   <option key={idx} value={ina.ina_code}>
//                     {`${ina.ina_code} - ${ina.ina_title}`}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
          
//           <div className="grid-container grid-3-cols">
//             <div className="form-group">
//               <label className="form-label">Validity</label>
//               <select 
//                 className="form-select"
//                 value={bulkAssignment.validity}
//                 onChange={(e) => handleBulkAssignmentChange('validity', e.target.value)}
//               >
//                 <option value="">-- Select Validity --</option>
//                 {validityOptions.map((option, idx) => (
//                   <option key={idx} value={option.value}>{option.label}</option>
//                 ))}
//               </select>
//             </div>
            
//             <div className="form-group">
//               <label className="form-label">Deadline</label>
//               <input 
//                 type="date" 
//                 className="form-control"
//                 value={bulkAssignment.deadLine || ''}
//                 onChange={(e) => handleBulkAssignmentChange('deadLine', e.target.value)}
//               />
//             </div>
            
//             <div className="form-group" style={{ display: 'flex', alignItems: 'flex-end' }}>
//               <button 
//                 onClick={applyBulkAssignment}
//                 className="btn btn-primary"
//               >
//                 Apply to Selected Function/Job
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//       {/* Table */}
//       <div className="table-container">
//         <table className="mapping-table">
//           <thead>
//             <tr>
//               <th colSpan={2}>Employee details</th>
//               <th colSpan={2}>Skills Category / Tags</th>
//               <th>Define Skills level</th>
//               <th>Assign Function</th>
//               <th>Assign Job Profile</th>
//               <th colSpan={2}>Training Map Skills</th>
//               <th colSpan={3}>Assessment to Map Skills</th>
//               <th rowSpan={2}>Dead Line</th>
//               <th rowSpan={2}>Validity</th>
//             </tr>
//             <tr>
//               <th className="id-column">Employee Id</th>
//               <th className="name-column">Employee Name</th>
//               <th className="select-column">Main Category</th>
//               <th className="select-column">Sub Category</th>
//               <th className="select-column">Skill Level</th>
//               <th>Function Type</th>
//               <th>Job Title</th>
//               <th className="select-column">Training Code</th>
//               <th className="select-column">OJT Code</th>
//               <th className="select-column">LMS Assessment</th>
//               <th className="select-column">OJA Code</th>
//               <th className="select-column">INA Code</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentItems.map((item, index) => {
//               // Calculate actual index in the competencyMappings array
//               const actualIndex = indexOfFirstItem + index;
              
//               return (
//                 <tr key={index}>
//                   <td>{item.employeeId}</td>
//                   <td>{item.employeeName}</td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.mainCategory || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'mainCategory', e.target.value)}
//                     >
//                       <option value="">-- Select Main Category --</option>
//                       {mainCategories.map((category, idx) => (
//                         <option key={idx} value={category}>{category}</option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.subCategory || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'subCategory', e.target.value)}
//                       disabled={!item.mainCategory}
//                     >
//                       <option value="">-- Select Sub Category --</option>
//                       {item.mainCategory && subCategories[item.mainCategory]?.map((subCat, idx) => (
//                         <option key={idx} value={subCat}>{subCat}</option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.skillLevel || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'skillLevel', e.target.value)}
//                     >
//                       <option value="">-- Select Skill Level --</option>
//                       {skillLevels.map((level, idx) => (
//                         <option key={idx} value={level}>{level}</option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>{item.functionType}</td>
//                   <td>{item.jobTitle}</td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.trainingCode || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'trainingCode', e.target.value)}
//                     >
//                       <option value="">-- Select Training --</option>
//                       <option value="NA">Not Applicable</option>
//                       {trainings.map((training, idx) => (
//                         <option key={idx} value={training._id}>
//                           {`${training.training_name} - ${training.training_category}`}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.ojtCode || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'ojtCode', e.target.value)}
//                     >
//                       <option value="">-- Select OJT --</option>
//                       <option value="NA">Not Applicable</option>
//                       {ojtData.map((ojt, idx) => (
//                         <option key={idx} value={ojt.ojt_code}>
//                           {`${ojt.ojt_code} - ${ojt.ojt_title}`}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.lmsAssessmentCode || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'lmsAssessmentCode', e.target.value)}
//                     >
//                       <option value="">-- Select Assessment --</option>
//                       <option value="NA">Not Applicable</option>
//                       {assessments.map((assessment, idx) => (
//                         <option key={idx} value={assessment.code}>
//                           {`${assessment.code} - ${assessment.assessment_title}`}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.ojaCode || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'ojaCode', e.target.value)}
//                     >
//                       <option value="">-- Select OJA --</option>
//                       <option value="NA">Not Applicable</option>
//                       {ojaData.map((oja, idx) => (
//                         <option key={idx} value={oja.oja_code}>
//                           {`${oja.oja_code} - ${oja.oja_title}`}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td>
//                     <select 
//                       className="form-select"
//                       value={item.inaCode || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'inaCode', e.target.value)}
//                     >
//                       <option value="">-- Select INA --</option>
//                       <option value="NA">Not Applicable</option>
//                       {inaData.map((ina, idx) => (
//                         <option key={idx} value={ina.ina_code}>
//                           {`${ina.ina_code} - ${ina.ina_title}`}
//                         </option>
//                       ))}
//                     </select>
//                   </td>
//                   <td className="date-column">
//                     <input 
//                       type='date' 
//                       value={item.deadLine || ''}
//                       onChange={(e) => handleMappingChange(actualIndex, 'deadLine', e.target.value)} 
//                     />
//                   </td>
//                   <td>
//                   <select 
//                     className="form-select"
//                     value={item.validity || ''}
//                     onChange={(e) => handleMappingChange(index, 'validity', e.target.value)}
//                   >
//                     <option value="">-- Select Validity --</option>
//                     <option value="NA">Not Applicable</option>
//                     {validityOptions.map((option, idx) => (
//                       <option key={idx} value={option.value}>{option.label}</option>
//                     ))}
//                   </select>
//                 </td>
//               </tr>
//               )
//             })}
//           </tbody>
//         </table>
//       </div>
      
//       {/* Pagination */}
//       <div className="pagination-container">
//         <button 
//           onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
//           disabled={currentPage === 1}
//           className="pagination-button"
//         >
//           Previous
//         </button>
        
//         <div className="page-numbers">
//           {Array.from({ length: totalPages }, (_, i) => (
//             <button
//               key={i}
//               onClick={() => paginate(i + 1)}
//               className={`page-number ${currentPage === i + 1 ? 'active' : ''}`}
//             >
//               {i + 1}
//             </button>
//           ))}
//         </div>
        
//         <button
//           onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
//           disabled={currentPage === totalPages || totalPages === 0}
//           className="pagination-button"
//         >
//           Next
//         </button>
//       </div>

//       <ToastContainer/>

//         <style jsx>{`
//     /* Main Container Styles */
//   .competency-container {
//   max-width: 100%;
//   padding: 2rem;
//   background-color: #f8f9fa;
//   box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
//   border-radius: 8px;
//   }

//   .mapping-title {
//   font-size: 1.75rem;
//   font-weight: 700;
//   color: #2c3e50;
//   margin-bottom: 1.5rem;
//   border-bottom: 3px solid #3498db;
//   padding-bottom: 0.5rem;
//   display: inline-block;
//   }

//   /* Header Controls */
//   .controls-container {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 1.5rem;
//   }

//   /* Search Box */
//   .search-container {
//   position: relative;
//   width: 33%;
//   }

//   .search-input {
//   border-radius: 30px;
//   padding: 12px 45px 12px 16px;
//   width: 100%;
//   height: 50px;
//   font-size: 16px;
//   border: 2px solid #e0e0e0;
//   outline: none;
//   transition: all 0.3s ease;
//   background-color: white;
//   }

//   .search-input:focus {
//   border-color: #3498db;
//   box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
//   }

//   .search-icon {
//   position: absolute;
//   right: 16px;
//   top: 50%;
//   transform: translateY(-50%);
//   color: #7f8c8d;
//   pointer-events: none;
//   }

//   /* Buttons */
//   .action-buttons {
//   display: flex;
//   gap: 10px;
//   }

//   .btn {
//   // padding: 20px 20px;
//   border-radius: 6px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: all 0.2s ease;
//   border: none;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 200px;
//   height: 40px;
//   }

//   .btn-primary {
//   background-color: #3498db;
//   color: white;
//   }

//   .btn-primary:hover {
//   background-color: #2980b9;
//   }

//   .btn-success {
//   background-color: #2ecc71;
//   color: white;
//   }

//   .btn-success:hover {
//   background-color: #27ae60;
//   }

//   /* Bulk Assignment Panel */
//   .bulk-assign-panel {
//   background-color: #ffffff;
//   padding: 1.5rem;
//   margin-bottom: 1.5rem;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
//   border-left: 4px solid #3498db;
//   }

//   .panel-title {
//   font-size: 1.25rem;
//   font-weight: 600;
//   margin-bottom: 1rem;
//   color: #2c3e50;
//   }

//   .grid-container {
//   display: grid;
//   gap: 1rem;
//   }

//   .grid-5-cols {
//   grid-template-columns: repeat(5, 1fr);
//   }

//   .grid-2-cols {
//   grid-template-columns: repeat(2, 1fr);
//   }

//   /* Form Elements */
//   .form-group {
//   margin-bottom: 1rem;
//   }

//   .form-label {
//   display: block;
//   font-size: 0.875rem;
//   font-weight: 600;
//   margin-bottom: 0.5rem;
//   color: #495057;
//   }

//   .form-select,
//   .form-input {
//   width: 100%;
//   padding: 10px 12px;
//   border: 1px solid #ced4da;
//   border-radius: 6px;
//   font-size: 0.9rem;
//   transition: border-color 0.2s;
//   background-color: white;
//   }

//   .form-select:focus,
//   .form-input:focus {
//   border-color: #3498db;
//   outline: none;
//   box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
//   }

//   .form-select:disabled {
//   background-color: #f1f3f5;
//   cursor: not-allowed;
//   opacity: 0.7;
//   }

//   /* Table Styles */
//   .table-container {
//   overflow-x: auto;
//   margin-bottom: 1.5rem;
//   border-radius: 6px;
//   box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
//   }

//   .mapping-table {
//   width: 100%;
//   border-collapse: separate;
//   border-spacing: 0;
//   background-color: white;
//   }

//   .mapping-table th,
//   .mapping-table td {
//   padding: 10px 12px;
//   text-align: left;
//   border: 1px solid #dee2e6;
//   font-size: 0.9rem;
//   }

//   .mapping-table th {
//   background-color: #f2f6fc;
//   font-weight: 600;
//   color: #2c3e50;
//   position: sticky;
//   top: 0;
//   z-index: 10;
//   }

//   .mapping-table thead th {
//   border-bottom: 2px solid #3498db;
//   }

//   .mapping-table tbody tr:nth-child(even) {
//   background-color: #f8f9fa;
//   }

//   .mapping-table tbody tr:hover {
//   background-color: #e9f7fe;
//   }

//   .mapping-table select {
//   width: 100%;
//   padding: 8px;
//   border: 1px solid #ced4da;
//   border-radius: 4px;
//   background-color: white;
//   font-size: 0.85rem;
//   }

//   .mapping-table select:focus {
//   border-color: #3498db;
//   outline: none;
//   box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
//   }

//   .mapping-table select:disabled {
//   background-color: #f1f3f5;
//   }

//   /* Column specific styles for better readability */
//   .mapping-table .id-column {
//   width: 100px;
//   }

//   .mapping-table .name-column {
//   width: 150px;
//   }

//   .mapping-table .select-column {
//   min-width: 180px;
//   }

//   .mapping-table .date-column {
//   width: 120px;
//   }

//   /* Pagination */
//   .pagination-container {
//   display: flex;
//   justify-content: center;
//   margin-top: 1.5rem;
//   }

//   .pagination-button {
//   padding: 8px 15px;
//   // background-color: #f1f3f5;
//   border: none;
//   border-radius: 4px;
//   margin: 0 5px;
//   cursor: pointer;
//   font-weight: 500;
//   transition: all 0.2s;
//   }

//   .pagination-button:hover:not(:disabled) {
//   background-color: #3498db;
//   color: white;
//   }

//   .pagination-button:disabled {
//   opacity: 0.5;
//   cursor: not-allowed;
//   }

//   .page-numbers {
//   display: flex;
//   }

//   .page-number {
//   padding: 8px 15px;
//   margin: 0 3px;
//   border-radius: 4px;
//   border: none;
//   cursor: pointer;
//   background-color: #fff;
//   transition: all 0.2s;
//   color: #3498db;
//   border: 1px solid #3498db;
//   }

//   .page-number.active {
//   background-color: #3498db;
//   color: white;
//   }

//   .page-number:hover:not(.active) {
//   background-color: #3498db;
//   color: #fff;
//   }

//   /* Toast Notifications */
//   .toast-container {
//   position: fixed;
//   top: 20px;
//   right: 20px;
//   z-index: 1000;
//   }

//   /* Responsive Adjustments */
//   @media (max-width: 1200px) {
//   .grid-5-cols {
//   grid-template-columns: repeat(3, 1fr);
//   }

//   .search-container {
//   width: 40%;
//   }
//   }

//   @media (max-width: 992px) {
//   .grid-5-cols {
//   grid-template-columns: repeat(2, 1fr);
//   }

//   .grid-2-cols {
//   grid-template-columns: 1fr;
//   }

//   .controls-container {
//   flex-direction: column;
//   align-items: flex-start;
//   }

//   .search-container {
//   width: 100%;
//   margin-bottom: 1rem;
//   }

//   .action-buttons {
//   width: 100%;
//   }
//   }

//   @media (max-width: 768px) {
//   .grid-5-cols {
//   grid-template-columns: 1fr;
//   }

//   .competency-container {
//   padding: 1rem;
//   }

//   .page-numbers {
//   display: none;
//   }

//   .pagination-container {
//   justify-content: space-between;
//   }
//   }
//     `}</style>
//     </div>
//   );
// }
