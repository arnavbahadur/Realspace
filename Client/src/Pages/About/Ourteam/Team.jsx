import React,{useState} from 'react'
import './Team.css'
import ReadMore1 from './ReadMore/ReadMore1';
import ReadMore2 from './ReadMore/ReadMore2';
import ReadMore3 from './ReadMore/ReadMore3';
import ReadMore4 from './ReadMore/ReadMore4';
const Team = () => {
  return (
    <div>
    
        <div className="wrapper">
  <h1 className="Overview-heading">Our Team</h1>
  <div className="team">
  <div className="team_member1">
      <div className="team-text1">
        <img className="team_img" src="./Images/Aashish-Kaul.jpeg" alt="Team_image"/>
      <h3 className="team-heading">Aashish Kaul </h3>
      <h2 className="role">Managing Director</h2></div>
      <div className="paragraph1">
      <ReadMore1/>
      
            </div>
    </div>
    <div className="team_member2">
      <div className="team-text2"> 
      <img className="team_img" src="https://i.imgur.com/2Necikc.png" alt="Team_image"/>
      <h3 className="team-heading">Sheetal Shukla</h3>
      <h2 className="role">Director</h2></div>
      <div className="paragraph2">
     <ReadMore2/>
     </div>
      </div>
    <div className="team_member1">
    <div className="team-text1">
        <img className="team_img" src="https://i.imgur.com/2Necikc.png" alt="Team_image"/>
      <h3 className="team-heading">Garimesh Goyal </h3>
      <h2 className="role">Support Lead</h2></div>
      <div className="paragraph1">
      <ReadMore3/>
       </div>
    </div>
    <div className="team_member2">
      <div className="team-text2">
        <img className="team_img" src="./Images/priya.jpeg" alt="Team_image"/>
      <h3 className="team-heading">Priya Raghuvanshi </h3>
      <h2 className="role">Sell Lead</h2></div>
      <div className="paragraph2">
      <ReadMore4/>
     </div>
    </div>
  </div>
</div>






    </div>
  )
}

export default Team