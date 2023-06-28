import React, { useState } from 'react';

const Home = ({ plantDuration, expectedHarvestDate, fertilizer, seeds, labour, chemicals }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [issueReported, setIssueReported] = useState(false);

  const handleClick = () => {
    setShowDetails(!showDetails);
  };

  const handleReportIssue = () => {
    // Logic to send the issue report to the extension officer account
    // You can make an API call or implement the desired functionality here
    setIssueReported(true);
  };

  const calculateRemainingDuration = () => {
    const currentDate = new Date();
    const startDate = new Date(expectedHarvestDate);
    const remainingDuration = Math.ceil((startDate.getTime() - currentDate.getTime()) / (24 * 60 * 60 * 1000));
    return remainingDuration >= 0 ? remainingDuration : 0;
  };

  const remainingDuration = calculateRemainingDuration();

  return (
    <div>
      <h2>Plant Progress</h2>
      <p>Expected Harvest Date: {expectedHarvestDate}</p>
      <p>Plant Duration: {plantDuration} days</p>
      <div className="progress-bar" onClick={handleClick}>
        <div className="progress" style={{ width: `${remainingDuration}%` }}></div>
      </div>
      <p>{remainingDuration}% Complete</p>

      {showDetails && (
        <div>
          <h3>Plant Details</h3>
          <p>Fertilizer: {fertilizer}</p>
          <p>Seeds: {seeds}</p>
          <p>Labour: {labour}</p>
          <p>Chemicals: {chemicals}</p>
          <p>Duration to Maturity: {remainingDuration} days</p>
        </div>
      )}

      {!issueReported && (
        <button 
          className='btn btn-success'
          onClick={handleReportIssue}
        >
          Report Plant Issue
        </button>
      )}
      {issueReported && (
        <p>Plant issue reported to the extension officer</p>
      )}
    </div>
  );
};

export default Home;