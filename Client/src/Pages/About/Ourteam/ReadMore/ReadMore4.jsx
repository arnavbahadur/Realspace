import React, { useState } from "react";


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="textrd">
	{isReadMore ? text.slice(0, 150) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="paragraph2">
	<p>
		<ReadMore>
        I am Priya Raghuwanshi, a results-driven and accomplished Sales Leader with a proven track record in the dynamic realm of real estate marketing. With a deep passion for the industry and an unwavering commitment to excellence, I have consistently delivered exceptional results and surpassed targets throughout my career.
		As a seasoned professional with 10+ years of experience in real estate marketing, I have honed my skills in devising strategic sales plans that elevate brands and drive revenue growth. My innate ability to understand market trends and consumer behavior allows me to create tailored solutions that resonate with clients and generate long-term success for their businesses.In my role as a Selling Head at Realspace Group Company, I take pride in leading and inspiring a high-performing sales team. By fostering a collaborative and motivating environment, I encourage my team members to reach their full potential and excel in their roles. Through effective coaching and mentorship, I ensure that every team member is equipped with the knowledge and tools necessary to thrive in a competitive market.   Building strong relationships is at the core of my approach to sales. I believe in actively listening to clients' needs and challenges, enabling me to provide solutions that align perfectly with their goals. By putting the client first and nurturing lasting partnerships, I have cultivated a robust network of satisfied customers who repeatedly trust me with their real estate marketing needs.
		</ReadMore>
	</p>
	</div>
);
};

export default Content;
