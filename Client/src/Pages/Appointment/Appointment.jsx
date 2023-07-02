import React from 'react'
import './Appointment.css'


const Appointment =()=> {
   
  return (
   <div className="Appointment">
    <div className="detail-appointment">
            <div className="inputBox w50">
              <input type="text" name required />
              <span>First Name</span>
            </div>
            <div className="inputBox w50">
              <input type="text" required />
              <span>Last Name</span>
            </div>
           
            <div className="inputBox w50">
              <input type="text" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w50">
              <input type="email" required />
              <span>Requirement</span>
            </div>
           
            <div className="inputBox w100">
              <input type="submit" defaultValue="Send" />
            </div>
          </div>
      
    
          <div className="widget">
  <div className="calender">
    <div className="calender__month">
      <i className="material-icons calender__month--icon calender__month--icon--left">
        keyboard_arrow_left
      </i>
      <h2 className="calender__month--text" />
      <i className="material-icons calender__month--icon calender__month--icon--right">
        keyboard_arrow_right
      </i>
    </div>
    <div className="calender__days">
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">S</p>
      </div>
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">M</p>
      </div>
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">T</p>
      </div>
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">W</p>
      </div>
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">T</p>
      </div>
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">F</p>
      </div>
      <div className="calender__cell calender__cell--dOfW">
        <p className="calender__text--dOfW">S</p>
      </div>
    </div>
  </div>
  <div className="schedule">
    <div className="schedule__title">
      <h2 className="schedule__title--text">Schedule</h2>
      <p className="schedule__title--date" />
    </div>
    <div className="schedule__taskWrapper">
      {/*       <div class = "task">
  <input class = "task__time" type = "text">
  <input class = "task__name" type = "text">
</div> */}
      <div className="schedule__formWrapper">
        <div className="schedule__form">
          <div className="schedule__">
            <h4>Time</h4>
            <input className="task__time" type="text" />
          </div>
          <input className="task__name" type="text" />
          <button className="task__add" type="button">
            Add
          </button>
        </div>
      </div>
      <div className="schedule__add" onclick="addTask(this)">
        <i className="material-icons schedule__add--icon">add</i>
      </div>
    </div>
    <div></div>
  </div>
</div>

    </div> 
  )
}

export default Appointment
