import { useState } from 'react';

const PricingTable = () => {
  const [hoveredBasic, setHoveredBasic] = useState(false);
  const [hoveredStandard, setHoveredStandard] = useState(false);
  const [hoveredPremium, setHoveredPremium] = useState(false);

  return (
    <div className="pricing-container">
      <div className="pricing-header">
        <div className="pricing-label">PRICING TABLE</div>
        <h1 className="pricing-title">Our Membership Price Plan</h1>
      </div>
      
      <div className="pricing-cards">
        {/* Basic Plan Card */}
        <div 
          className="pricing-card"
          onMouseEnter={() => setHoveredBasic(true)}
          onMouseLeave={() => setHoveredBasic(false)}
        >
          <div className="card-header" style={{ borderColor: '#164276' }}>
            <h2 className="plan-name">Basic Plan</h2>
          </div>
          
          <div className="price-container">
            <div className="price">
              <span className="currency">$</span>
              <span className="amount" style={{ color: '#164276' }}>156.00</span>
            </div>
            <div className="billing-period">/PER MONTHLY</div>
          </div>
          
          <div className="features">
            <div className="feature">
              <div className="icon-included" style={{ color: '#164276' }}>✓</div>
              <span>Access to all courses</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#164276' }}>✓</div>
              <span>Example code available</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#164276' }}>✓</div>
              <span>High resolution videos</span>
            </div>
            <div className="feature">
              <div className="icon-excluded">✕</div>
              <span>Certificate after completion</span>
            </div>
            <div className="feature">
              <div className="icon-excluded">✕</div>
              <span>Private sessions</span>
            </div>
          </div>
          
          <button 
            className="choose-plan-btn"
            style={{ 
              backgroundColor: hoveredBasic ? '#164276' : '#164276',
              color: '#fff'
            }}
          >
            CHOOSE THE PLAN →
            {/* <span className="arrow">→</span> */}
          </button>
        </div>

        {/* Standard Plan Card */}
        <div 
          className="pricing-card featured"
          onMouseEnter={() => setHoveredStandard(true)}
          onMouseLeave={() => setHoveredStandard(false)}
        >
          <div className="card-header" style={{ borderColor: '#0075ff' }}>
            <h2 className="plan-name" style={{ color: '#0075ff' }}>For Corporate</h2>
          </div>
          
          <div className="price-container">
            <div className="price">
              <span className="currency" style={{ color: '#0075ff' }}>$</span>
              <span className="amount" style={{ color: '#0075ff' }}>176.00</span>
            </div>
            <div className="billing-period">/PER MONTHLY</div>
          </div>
          
          <div className="features">
            <div className="feature">
              <div className="icon-included" style={{ color: '#0075ff' }}>✓</div>
              <span style={{ color: '#000', fontWeight: 'normal' }}>Access to all courses</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#0075ff' }}>✓</div>
              <span style={{ color: '#000', fontWeight: 'normal' }}>Example code available</span>
            </div>
            <div className="feature">
              <div className="icon-included">✓</div>
              <span style={{ color: '#000', fontWeight: 'normal' }}>High resolution videos</span>
            </div>
            <div className="feature">
              <div className="icon-included">✓</div>
              <span style={{ color: '#000', fontWeight: 'normal' }}>Certificate after completion</span>
            </div>
            <div className="feature">
              <div className="icon-excluded">✕</div>
              <span style={{ color: '#000', fontWeight: 'normal' }}>Private sessions</span>
            </div>
          </div>
          
          <button 
            className="choose-plan-btn"
            style={{ 
              backgroundColor: hoveredStandard ? '#0075ff' : '#0075ff',
              color: '#fff'
            }}
          >
            CHOOSE THE PLAN →
            {/* <span className="arrow">→</span> */}
          </button>
        </div>

        {/* Premium Plan Card */}
        <div 
          className="pricing-card"
          onMouseEnter={() => setHoveredPremium(true)}
          onMouseLeave={() => setHoveredPremium(false)}
        >
          <div className="card-header" style={{ borderColor: '#6bcaff' }}>
            <h2 className="plan-name">For Academic</h2>
          </div>
          
          <div className="price-container">
            <div className="price">
              <span className="currency" style={{ color: '#6bcaff' }}>$</span>
              <span className="amount" style={{ color: '#6bcaff' }}>196.00</span>
            </div>
            <div className="billing-period">/PER MONTHLY</div>
          </div>
          
          <div className="features">
            <div className="feature">
              <div className="icon-included" style={{ color: '#6bcaff' }}>✓</div>
              <span>Access to all courses</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#6bcaff' }}>✓</div>
              <span>Example code available</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#6bcaff' }}>✓</div>
              <span>High resolution videos</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#6bcaff' }}>✓</div>
              <span>Certificate after completion</span>
            </div>
            <div className="feature">
              <div className="icon-included" style={{ color: '#6bcaff' }}>✓</div>
              <span>Private sessions</span>
            </div>
          </div>
          
          <button 
            className="choose-plan-btn"
            style={{ 
              backgroundColor: hoveredPremium ? '#6bcaff' : '#6bcaff',
              color: '#fff'
            }}
          >
            CHOOSE THE PLAN →
            {/* <span className="arrow">→</span> */}
          </button>
        </div>
      </div>

      <style jsx>{`
        .pricing-container {
          font-family: 'Arial', sans-serif;
          max-width: 1200px;
          margin: 4rem auto;
          padding: 40px 20px;
          color: #164276;
        //   background-color: #2E073F
        }
        
        .pricing-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .pricing-label {
          display: inline-flex;
          align-items: center;
          font-size: 14px;
          font-weight: 600;
          color: #164276;
          margin-bottom: 16px;
        }
        
        .pricing-label::before {
          content: "";
          width: 20px;
          height: 20px;
          margin-right: 8px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%232E73FF'%3E%3Cpath d='M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-2h2v2zm0-4h-2V7h2v6z'/%3E%3C/svg%3E");
          background-size: contain;
        }
        
        .pricing-title {
          font-size: 38px;
          font-weight: 700;
          margin: 0;
          color: #000;
        }
        
        .pricing-cards {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        //   border: 2px solid #000;
        }
        
        .pricing-card {
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          width: 100%;
          max-width: 350px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .pricing-card:hover {
          transform: translateY(-10px);
        }
        
        .card-header {
          padding: 24px 0;
          text-align: center;
          border-top: 4px solid;
        }
        
        .plan-name {
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }
        
        .price-container {
          background-color: #f8f9fc;
          padding: 24px 16px;
          text-align: center;
        }
        
        .price {
          display: flex;
          align-items: baseline;
          justify-content: center;
        }
        
        .currency {
          font-size: 48px;
          font-weight: 600;
          margin-right: 4px;
        }
        
        .amount {
          font-size: 48px;
          font-weight: 700;
          line-height: 1;
        }
        
        .billing-period {
          font-size: 14px;
          color: #6b7280;
          margin-top: 8px;
        }
        
        .features {
          padding: 16px 0px;
        //   flex-grow: 1;
        //   border: 1px solid #000;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 10px;
        }
        
        .feature {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 12px;
        //   border: 1px solid #000;
        }
        
        .icon-included, .icon-excluded {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          font-size: 14px;
          font-weight: bold;
        }
        
        .icon-included {
          background-color: rgba(46, 115, 255, 0.1);
        }
        
        .icon-excluded {
          background-color: #f8f9fc;
          color: #ff2e2e;
        }
        
        .choose-plan-btn {
          margin: 16px;
          padding: 14px 24px;
          border: none;
          border-radius: 5px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        //   display: flex;
        //   align-items: center;
        //   justify-content: space-around;
        }
        
        // .arrow {
        //   margin-left: 8px;
        //   font-size: 18px;
        // }
        
        .featured .choose-plan-btn {
          background-color: #FF2E2E;
        }

        @media (max-width: 1024px) {
          .pricing-cards {
            gap: 16px;
          }
          
          .pricing-card {
            max-width: 300px;
          }
        }
        
        @media (max-width: 768px) {
          .pricing-cards {
            flex-direction: column;
            align-items: center;
          }
          
          .pricing-card {
            max-width: 400px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default PricingTable;