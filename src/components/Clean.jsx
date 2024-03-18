import { useState } from "react";
import React from 'react'
import "./clean.css"
import { MdOutlineBathroom } from "react-icons/md";

const Clean = () => {
  const [selectedOption, setSelectedOption] = useState('flush');
  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const [progress, setProgress] = useState(50); // Initial progress value, change as needed

  const handleIncreaseProgress = () => {
    // Increase progress by 10 (or any other value you prefer)
    setProgress((prevProgress) => Math.min(prevProgress + 10, 100));
  };

  const handleDecreaseProgress = () => {
    // Decrease progress by 10 (or any other value you prefer)
    setProgress((prevProgress) => Math.max(prevProgress - 10, 0));
  };
  return (
    <>
      <div className="clean-container">
        {/* Toggle Button */}
        <div className='toggle-div'>
          <button
            className={`toggle-button ${selectedOption === 'flush' ? 'active' : ''}`}
            onClick={() => handleToggle('flush')}
          >
            Flush
          </button>
          <button
            className={`toggle-button ${selectedOption === 'descale' ? 'active' : ''}`}
            onClick={() => handleToggle('descale')}
          >
            Descale
          </button>
        </div>
        {selectedOption == 'flush' && (
          <div className="flush-div">
            <MdOutlineBathroom className="flush-icon" />
            <h1>Flip the brew switch to flush the group head.</h1>
          </div>
        )}
        {selectedOption == 'descale' && (
            <div className="progress-container">
              <progress className="progress-bar" value={progress} max="100"></progress>
              <div className="progress-label">{progress}%</div>
              <div className="progress-buttons">
                <button onClick={handleDecreaseProgress}>Decrease</button>
                <button onClick={handleIncreaseProgress}>Increase</button>
              </div>
            </div>
        )}
      </div>
    </>

  )
}

export default Clean
