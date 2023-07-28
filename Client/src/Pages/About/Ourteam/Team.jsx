import React,{useState} from 'react'
import './Team.css'
import PopupChoose from './PopupChoose'
const Team = () => {
  const [popup, setPopup] = useState(false);
  const [popupcontain, setpopupcontain] = useState({ title: "", content: "" });

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
      <p>Welcome to our real estate marketing company, where excellence meets innovation and dreams turn into reality. As the Managing Director of our esteemed organization, I am thrilled to introduce you to a world of boundless possibilities in the realm of real estate.
With a profound passion for development and a vision that extends far beyond the horizon, I have spearheaded the creation of awe-inspiring townships that redefine modern living. Our portfolio boasts a plethora of successful townships that stand as testaments to our commitment to delivering exceptional living experiences to our customers.</p>
      <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({
                  title: "Managing Director",
                  content:"Welcome to our real estate marketing company, where excellence meets innovation and dreams turn into reality. As the Managing Director of our esteemed organization, I am thrilled to introduce you to a world of boundless possibilities in the realm of real estate.With a profound passion for development and a vision that extends far beyond the horizon, I have spearheaded the creation of awe-inspiring townships that redefine modern living. Our portfolio boasts a plethora of successful townships that stand as testaments to our commitment to delivering exceptional living experiences to our customers. Having garnered extensive expertise in the real estate industry, we understand that each project is not just about bricks and mortar but about crafting communities where families can thrive and create cherished memories. Our core values of integrity, transparency, and customer-centricity have earned us the trust of countless individuals and families seeking their dream homes. At our company, we foster a culture of innovation, always striving to push boundaries and embrace cutting-edge technologies to enhance our offerings. Our dynamic team of professionals shares the collective goal of transforming the way people perceive and experience real estate. Beyond building townships, we are driven by a larger purpose – to contribute positively to society. Our commitment to sustainable practices and social responsibility initiatives ensures that every step we take leaves a positive impact on the environment and the communities we serve.  We believe that real estate is not just a business; it's about building a better future, one project at a time. With a track record of successful townships and a team of dedicated experts, we look forward to shaping the landscape of real estate with ingenuity and unwavering dedication. Welcome to our world of real estate marvels, where dreams find a place to call home. Together, let's redefine the way people live and experience life – with sophistication, comfort, and joy.",
                });
              }}
            >
              {" "}
              Learn More
            </button> </div>
    </div>
    <div className="team_member2">
      <div className="team-text2"> 
      <img className="team_img" src="https://i.imgur.com/2Necikc.png" alt="Team_image"/>
      <h3 className="team-heading">Sheetal Shukla</h3>
      <h2 className="role">Director</h2></div>
      <div className="paragraph2">
      <p>we have successfully brought a fresh perspective to the real estate landscape, pushing the boundaries of creativity and innovation. Our townships are not just brick-and-mortar structures; they are meticulously crafted communities that prioritize sustainable living, modern amenities, and a harmonious blend of nature and urbanity.</p>
      <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({
                  title: "Director",
                  content:"we have successfully brought a fresh perspective to the real estate landscape, pushing the boundaries of creativity and innovation. Our townships are not just brick-and-mortar structures; they are meticulously crafted communities that prioritize sustainable living, modern amenities, and a harmonious blend of nature and urbanity.Unlike conventional real estate marketing companies, we believe in embracing technology to its fullest potential. we ensure our customers can envision their dream homes before the first foundation stone is laid. Our customer-centric approach allows us to understand the unique needs of each client, tailoring solutions that exceed expectations and transform dreams into reality.",
                });
              }}
            >
              {" "}
              Learn More
            </button></div>
      </div>
    <div className="team_member1">
    <div className="team-text1">
        <img className="team_img" src="https://i.imgur.com/2Necikc.png" alt="Team_image"/>
      <h3 className="team-heading">Garimesh Goyal </h3>
      <h2 className="role">Support Lead</h2></div>
      <div className="paragraph1">
      <p>Welcome to our Real Estate Marketing Company!

At our Real Estate Marketing Company, we are passionate about revolutionizing the way properties are bought and sold. As the Support Lead, I take immense pride in leading a team of dedicated professionals who are committed to providing exceptional support and customer service to our clients and partners.</p>
      <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({
                  title: " Support Lead",
                  content:"What sets us apart is our unwavering commitment to excellence. We understand that the real estate market is dynamic and competitive, which is why we constantly evolve our services to stay ahead of the curve. Our team of experts stays abreast of the latest industry trends and emerging technologies to ensure that our clients always receive the best marketing support available. At the core of our company values is transparency, integrity, and customer-centricity. We believe in building strong, long-lasting relationships with our clients, based on trust and mutual success. When you choose our Real Estate Marketing Company, you are not just partnering with a service provider – you are joining a community of like-minded professionals who are driven to achieve outstanding results.As the Support Lead, my primary goal is to ensure that every interaction you have with our company is seamless and enjoyable. Our support team is here to answer your questions, address your concerns, and guide you through our services with utmost care and professionalism.",
                });
              }}
            >
              {" "}
              Learn More
            </button> </div>
    </div>
    <div className="team_member2">
      <div className="team-text2">
        <img className="team_img" src="./Images/priya.jpeg" alt="Team_image"/>
      <h3 className="team-heading">Priya Raghuvanshi </h3>
      <h2 className="role">Sell Lead</h2></div>
      <div className="paragraph2">
      <p>I am Priya Raghuwanshi, a results-driven and accomplished Sales Leader with a proven track record in the dynamic realm of real estate marketing. With a deep passion for the industry and an unwavering commitment to excellence, I have consistently delivered exceptional results and surpassed targets throughout my career.</p>
      <button className="learnmore"
              onClick={() => {
                setPopup(true);
                setpopupcontain({
                  title: " Sell Lead",
                  content:"As a seasoned professional with 10+ years of experience in real estate marketing, I have honed my skills in devising strategic sales plans that elevate brands and drive revenue growth. My innate ability to understand market trends and consumer behavior allows me to create tailored solutions that resonate with clients and generate long-term success for their businesses.In my role as a Selling Head at Realspace Group Company, I take pride in leading and inspiring a high-performing sales team. By fostering a collaborative and motivating environment, I encourage my team members to reach their full potential and excel in their roles. Through effective coaching and mentorship, I ensure that every team member is equipped with the knowledge and tools necessary to thrive in a competitive market.   Building strong relationships is at the core of my approach to sales. I believe in actively listening to clients' needs and challenges, enabling me to provide solutions that align perfectly with their goals. By putting the client first and nurturing lasting partnerships, I have cultivated a robust network of satisfied customers who repeatedly trust me with their real estate marketing needs.",
                });
              }}
            >
              {" "}
              Learn More
            </button></div>
    </div>
  </div>
</div>





{popup ? (
        <PopupChoose setPopup={setPopup} popupcontain={popupcontain} />
      ) : null}
    
    </div>
  )
}

export default Team