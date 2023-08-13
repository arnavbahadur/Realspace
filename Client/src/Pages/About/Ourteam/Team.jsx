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
  <h1 className="team-heading">Our Team</h1>
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
      
      <img className="team_img" src="data:image/jpeg;base64,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" alt="Team_image"/>
      <h3 className="team-heading">Sheetal Shukla</h3>
      <h2 className="role">Director</h2></div>
      <div className="paragraph2">
     <ReadMore2/>
     </div>
      </div>
    <div className="team_member1">
    <div className="team-text1">
        <img className="team_img" src="https://scontent.fidr3-1.fna.fbcdn.net/v/t1.6435-9/146155945_4311672518857278_5033496761763083038_n.jpg?stp=c0.93.1310.1310a_dst-jpg_s851x315&_nc_cat=111&ccb=1-7&_nc_sid=c21ed2&_nc_ohc=pDbDmRLurqsAX_JE4py&_nc_ht=scontent.fidr3-1.fna&oh=00_AfCStsxvBoliSsw2FRh3zgA8bF6cVl9tJhaR1kuTtmHrfg&oe=64FC16BE" alt="Team_image"/>
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