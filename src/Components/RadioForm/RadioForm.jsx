import React from 'react';

const RadioForm = () => {
    
  
  return (
    <form id='lang' className="d-flex flex-column align-items-start">
        <p className="radio-head">Language:</p>
        <p className="radio-line"></p>
        <div className="radio">
            <input type="radio" id="English" name="Language" value="English" />
            <label className="p-2 radio-label" htmlFor="English">English</label>
        </div>
        <div className="radio">
            <input type="radio" id="French" name="Language" value="French" />
            <label className="p-2 radio-label" htmlFor="French">French</label>
        </div>
    </form>  
    )
}

export default RadioForm