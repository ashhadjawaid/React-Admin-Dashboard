import React, { useState } from 'react';
import { BsArrowUp, BsArrowDown } from 'react-icons/bs';
import './Settings.css'; // Import CSS file for styling

const Settings = () => {
  const [selectedOption, setSelectedOption] = useState('temperature');
  const [waterLevel, setWaterLevel] = useState(50);
  const [steamLevel, setSteamLevel] = useState(75); // Added steam level state
  const [mDivValue, setMDivValue] = useState(0);
  const [bDivValue, setBDivValue] = useState(0);
  const [offsetsValue, setOffsetsValue] = useState(0);
  const [hpwrValue, setHpwrValue] = useState(0);
  const [isWarmupOn, setIsWarmupOn] = useState(false);
  const [isLCDSleepOn, setIsLCDSleepOn] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [lcdBrightness, setLCDBrightness] = useState(50);

  // Static values for LC1, LC2, and Pump
  const lc1Value = 10;
  const lc2Value = 20;
  const pumpValue = 30;

  const handleToggle = (option) => {
    setSelectedOption(option);
  };

  const handleIncreaseWaterLevel = () => {
    setWaterLevel((prevLevel) => prevLevel + 1);
  };

  const handleDecreaseWaterLevel = () => {
    setWaterLevel((prevLevel) => prevLevel - 1);
  };

  const handleSave = () => {
    // Logic to save settings
    alert("Settings saved!");
  };

  const handleResetToDefault = () => {
    // Reset all settings to default values
    setMDivValue(0);
    setBDivValue(0);
    setOffsetsValue(0);
    setHpwrValue(0);
    setIsWarmupOn(false);
    setLCDBrightness(50)
    setWaterLevel(50)
    setIsLCDSleepOn(false);
    setIsResetting(true);
    setTimeout(() => {
      setIsResetting(false);
    }, 1000);
  };

  return (
    <div className="settings-container">
      {/* Toggle Button */}
      <div className='toggle-div'>
        <button
          className={`toggle-button ${selectedOption === 'temperature' ? 'active' : ''}`}
          onClick={() => handleToggle('temperature')}
        >
          Temperature
        </button>
        <button
          className={`toggle-button ${selectedOption === 'system' ? 'active' : ''}`}
          onClick={() => handleToggle('system')}
        >
          System
        </button>
      </div>
      {/* Temperature Data */}
      {selectedOption === 'temperature' && (
        <div className="temperature-container">
          {/* Temperature Data in one row */}
          <div className="temperature-row">
            {/* Steam Level */}
            <div className='temp-1'>
              <div className="temperature-column">
                <h4>Steam Level</h4>
                <p>{steamLevel}</p>
              </div>
              {/* Water Level */}
              <div className="temperature-column">
                <h4>Water Level</h4>
                <p>{waterLevel}</p>
                {/* Water level buttons */}
                <div className="water-level-buttons">
                  <button onClick={handleIncreaseWaterLevel}>
                    <BsArrowUp className='arrow-icon' />
                  </button>
                  <button onClick={handleDecreaseWaterLevel}>
                    <BsArrowDown className='arrow-icon' />
                  </button>
                </div>
              </div>
            </div>
            {/* More Div */}
            <div className='temp-2'>
              <div className="temperature-column">
                <h4>M-Div</h4>
                <p>M-Div Value: {mDivValue}</p>
              </div>
              {/* B-Div */}
              <div className="temperature-column">
                <h4>B-Div</h4>
                <p>B-Div Value: {bDivValue}</p>
              </div>
              {/* Offsets */}
              <div className="temperature-column">
                <h4>Offsets</h4>
                <p>Offsets Value: {offsetsValue}</p>
              </div>
            </div>
            {/* HPWR */}
            <div className='temp-3'>
              <div className="temperature-column">
                <h4>HPWR</h4>
                <p>HPWR Value: {hpwrValue}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Settings Data */}
      {selectedOption === 'system' && (
        <div className="settings-data">
          <div className='system-1'>

            <div className="settings-section">
              <h3>LC1 Factor</h3>
              <p>{lc1Value}</p>
            </div>
            <div className="settings-section">
              <h3>LC2 Factor</h3>
              <p>{lc2Value}</p>
            </div>
            <div className="settings-section">
              <h3>Pump Zero</h3>
              <p>{pumpValue}</p>
            </div>
          </div>
          <div className='system-2'>
            <div className="settings-section">
              <h3>LCD Brightness</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={lcdBrightness}
                onChange={(e) => setLCDBrightness(parseInt(e.target.value))}
              />
              <p>{lcdBrightness}</p>
            </div>
          </div>
          <div className='system-3'>
            <div className="settings-section">
              <div>
                <button className={`toggle-button ${isWarmupOn ? 'active' : ''}`} onClick={() => setIsWarmupOn(!isWarmupOn)}>
                  Warmup: {isWarmupOn ? 'ON' : 'OFF'}
                </button>
              </div>
              <div>
                <h3>LCD Sleep</h3>
                <p>{lc2Value}</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='two-buttons'>
        {/* Save Button */}
        <button className="save-button" onClick={handleSave}>Save</button>
        {/* Reset Button */}
        <button className={`reset-button ${isResetting ? 'resetting' : ''}`} onClick={handleResetToDefault}>Reset to Default</button>
      </div>
    </div>
  );
};

export default Settings;
