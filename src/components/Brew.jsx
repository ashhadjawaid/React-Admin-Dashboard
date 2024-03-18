import React, { useState, useEffect } from 'react';
import { BsFillArchiveFill, BsPeopleFill } from 'react-icons/bs';
import { CiCircleMore } from 'react-icons/ci';
import { FaWater } from 'react-icons/fa';
import { TbManualGearbox } from 'react-icons/tb';
import { GiLevelFourAdvanced } from "react-icons/gi";
import './brew.css';

// Toggle button component
const ToggleButton = ({ label, initialState, onToggle }) => {
    const [toggle, setToggle] = useState(initialState);

    const handleToggle = () => {
        setToggle(!toggle);
        // Call the provided toggle function with the updated state
        onToggle(!toggle);
    };

   

    return (
        <div className="toggle-button">
            <label className="toggle-label">{label}</label>
            <button className={`toggle-button ${toggle ? 'active' : ''}`} onClick={handleToggle}>
                {toggle ? 'ON' : 'OFF'}
            </button>
        </div>
    );
};
const Brew = () => {
    // Sample values for demonstration
    const [selectedOption, setSelectedOption] = useState(null);
    const [startValue, setStartValue] = useState(10);
    const [endValue, setEndValue] = useState(20);
    const [slopeValue, setSlopeValue] = useState(5);
    const [pressureValue, setPressureValue] = useState(30);
    const [soakValue, setSoakValue] = useState(25);
    const [toggleProfile, setToggleProfile] = useState(false);
    const [toggleType, setToggleType] = useState(false);
    const [soaktoggle, setSoakToggle] = useState(false);
    const [mode, setMode] = useState('Auto');
    const [targetFlow, setTargetFlow] = useState(50); // Sample target flow value
    const [timer, setTimer] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [circleFill, setCircleFill] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
    const [toggleState, setToggleState] = useState(false);


    const handleOptionClick = (option) => {
        setSelectedOption(option);
        // Reset toggle state when selecting a new option
        setToggleProfile(false);
        setToggleType(false);
    };

    const handleToggleTimer = () => {
        if (timerRunning) {
            clearInterval(intervalId);
            setTimerRunning(false);
            setIntervalId(null); // Clear the interval ID
        } else {
            const id = setInterval(() => {
                setTimer((prevTimer) => (prevTimer < 60 ? prevTimer + 1 : 0)); // Ensure timer doesn't exceed 60 seconds
            }, 1000);
            setIntervalId(id); // Store the interval ID
            setTimerRunning(true);
        }
    };

    const handleSave = () => {
        // Logic to save settings
        alert("Settings saved!");
      };





    useEffect(() => {
        let interval;
        if (selectedOption === 'MORE') {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
            }, 1000); // Update the timer every second (1000 milliseconds)
        } else {
            setTimer(0); // Reset timer when option changes
        }

        return () => clearInterval(interval); // Cleanup interval when component unmounts or selectedOption changes
    }, [selectedOption]);

    const handleInputChange = (event, setter) => {
        const { value } = event.target;
        setter(value);
    };

    const toggleMode = () => {
        setMode(mode === 'Auto' ? 'Manual' : 'Auto');
    };

    const renderContent = () => {
        switch (selectedOption) {
            case 'P1':
                return (
                    <>
                        <div className='main-p1'>
                            <div className='div1-p1'>
                                <div className="button-div">
                                    <ToggleButton initialState={soaktoggle} onToggle={setToggleProfile} />
                                    <ToggleButton label="FLW" initialState={toggleType} onToggle={setToggleType} />
                                </div>
                                <div className="button-container">
                                    <button>Time: {startValue}</button>
                                    <button>Maintain Pressure: {endValue}</button>
                                    <button>Maintain Flow: {slopeValue}</button>
                                </div>
                                <div className="button-div">
                                    <button>Preview</button>
                                </div>
                            </div>

                            <div className='div2-p1'>
                                <div className="button-div">
                                    <ToggleButton label="Pressure above" initialState={soaktoggle} onToggle={setToggleProfile} />
                                </div>
                                <div className="button-container">
                                    <button>Time: {startValue}</button>
                                    <button>Maintain Flow: {slopeValue}</button>
                                </div>
                                <div className="button-div">
                                    <button onClick={handleSave}>Save</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            case 'SOAK':
                return (
                    <>
                        <div className="button-div">
                            <ToggleButton label="Soak" initialState={soaktoggle} onToggle={setToggleProfile} />
                        </div>
                        <div className="third-main">
                            <div className="sub-div1">
                                <div className="button-container">
                                    <button>Time: {startValue}</button>
                                    <button>Maintain Pressure: {endValue}</button>
                                    <button>Maintain Flow: {slopeValue}</button>
                                </div>
                            </div>
                            <div className="sub-div2">
                                <div className="button-container">
                                    <button>Weight Above: {pressureValue}</button>
                                    <button>Pressure Above: {soakValue}</button>
                                    <button>Pressure Below: {soakValue}</button>
                                </div>
                            </div>
                            <div className="sub-div3">
                                <div className="button-container">
                                    <button>Ramp/Slope</button>
                                    <button>Easein</button>
                                    <button>Easeout</button>
                                    <button>E-in-out</button>
                                    <button>Linear</button>
                                    <button>Instant</button>
                                </div>
                            </div>
                        </div>
                        <div className="button-div">
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </>
                )
            case 'PROFILE':
                return (
                    <>
                        <div className="button-div">
                            <ToggleButton label="Profile" initialState={toggleProfile} onToggle={setToggleProfile} />
                            <ToggleButton label="Type" initialState={toggleType} onToggle={setToggleType} />
                        </div>
                        <div className="third-main">
                            <div className="sub-div1">
                                <div className="button-container">
                                    <button>Start: {startValue}</button>
                                    <button>End: {endValue}</button>
                                    <button>Slope: {slopeValue}</button>
                                </div>
                            </div>
                            <div className="sub-div2">
                                <div className="button-container">
                                    <button>Pressure: {pressureValue}</button>
                                    <button>Soak: {soakValue}</button>
                                </div>
                            </div>
                            <div className="sub-div3">
                                <div className="button-container">
                                    <button>Slope</button>
                                    <button>Easein</button>
                                    <button>Easeout</button>
                                    <button>E-in-out</button>
                                    <button>Linear</button>
                                    <button>Instant</button>
                                </div>
                            </div>
                        </div>
                        <div className="button-div">
                            <button>Preview</button>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </>
                );
            case 'MANUAL':
                return (
                    <>
                        <div className="toggle-container">
                            <button className={`toggle-button ${mode === 'Auto' ? 'active' : ''}`} onClick={toggleMode}>
                                Auto
                            </button>
                            <button className={`toggle-button ${mode === 'Manual' ? 'active' : ''}`} onClick={toggleMode}>
                                Manual
                            </button>
                        </div>
                        <div className="centered-content">
                            <div>
                                Target Flow: {targetFlow} ml/s
                            </div>
                        </div>
                        <div className="more-options">
                            <div className="options">
                                <div className="option-row">
                                    <div>Temperature: 40°C</div>
                                    <div>Flow: 50 ml/s</div>
                                </div>
                                <div className="option-row">
                                    <div>Pressure: 30 PSI</div>
                                    <div>Weight: 60 kg</div>
                                </div>
                            </div>
                            <div className="timer-controls">
                                <button className="start-stop-button" onClick={handleToggleTimer}>
                                    {timerRunning ? "Stop" : "Start"}
                                </button>
                                <div className="timer-circle">
                                    <div className={`timer-fill ${!timerRunning ? 'stop' : ''}`} style={{ transform: `rotate(${(timer / 60) * 360}deg)` }}></div>
                                    <span>{timer} s</span>
                                </div>
                            </div>
                        </div>
                        <div className='range-div'>
                            <input type="range" min="0" max="100" step="1" />
                        </div>
                    </>
                )
            case 'MORE':
                return (
                    <>
                        <div className="more-options-brew">
                            <div className="options-brew">
                                <div className="option-row-brew">
                                    <ToggleButton label="Home on Finish" initialState={toggleState} onToggle={setToggleState} />
                                </div>
                                <div className="option-row-brew">
                                    <ToggleButton label="Brew Delta" initialState={toggleState} onToggle={setToggleState} />
                                </div>
                                <div className="option-row-brew">
                                    <ToggleButton label="Basket Fill" initialState={toggleState} onToggle={setToggleState} />
                                </div>
                            </div>
                        </div>
                        <div className="save-button-brew">
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </>
                );
            case 'ADVANCED':
                return (
                    <>
                        <div className="button-div">
                            <ToggleButton label="Profile" initialState={toggleProfile} onToggle={setToggleProfile} />
                            <ToggleButton label="Type" initialState={toggleType} onToggle={setToggleType} />
                        </div>
                        <div className="third-main">
                            <div className="sub-div1">
                                <div className="button-container">
                                    <button>Start: {startValue}</button>
                                    <button>End: {endValue}</button>
                                    <button>Hold: {startValue}</button>
                                    <button>Slope: {slopeValue}</button>
                                </div>
                            </div>
                            <div className="sub-div2">
                                <div className="button-container">
                                    <button>Flow Limit: {pressureValue}</button>
                                    <button>Hold Limit ml/s: {soakValue}</button>
                                </div>
                            </div>
                            <div className="sub-div3">
                                <div className="button-container">
                                    <button>Slope</button>
                                    <button>Easein</button>
                                    <button>Easeout</button>
                                    <button>E-in-out</button>
                                    <button>Linear</button>
                                    <button>Instant</button>
                                </div>
                            </div>
                        </div>
                        <div className="button-div">
                            <button>Preview</button>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </>
                )
            default:
                return <div>Select an option to display data.</div>;
        }
    };

    return (
        <main className="main-container-brew">
            <div className="main-title-brew">
                <h3>BREW</h3>
            </div>
            <div className="main-cards-brew">
                <div className="card-brew" onClick={() => handleOptionClick('P1')}>
                    <div className="card-inner-brew">
                        <h3>P1</h3>
                        <BsFillArchiveFill className="card_icon" />
                    </div>
                </div>
                <div className="card-brew" onClick={() => handleOptionClick('SOAK')}>
                    <div className="card-inner-brew">
                        <h3>SOAK</h3>
                        <FaWater className="card_icon" />
                    </div>
                </div>
                <div className="card-brew" onClick={() => handleOptionClick('PROFILE')}>
                    <div className="card-inner-brew">
                        <h3>PROFILE</h3>
                        <BsPeopleFill className="card_icon" />
                    </div>
                </div>
                <div className="card-brew" onClick={() => handleOptionClick('MANUAL')}>
                    <div className="card-inner-brew">
                        <h3>MANUAL</h3>
                        <TbManualGearbox className="card_icon" />
                    </div>
                </div>
                <div className="card-brew" onClick={() => handleOptionClick('MORE')}>
                    <div className="card-inner-brew">
                        <h3>MORE</h3>
                        <CiCircleMore className="card_icon" />
                    </div>
                </div>
                <div className="card-brew" onClick={() => handleOptionClick('ADVANCED')}>
                    <div className="card-inner-brew">
                        <h3>ADVANCED</h3>
                        <GiLevelFourAdvanced className="card_icon" />
                    </div>
                </div>
            </div>
            {/* Render content based on selected option */}
            {renderContent()}
        </main>
    );
};

export default Brew;
