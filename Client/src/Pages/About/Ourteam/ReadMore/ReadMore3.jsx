import React, { useState } from "react";


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="textrd">
	{isReadMore ? text.slice(0, 302) : text}
	<span onClick={toggleReadMore} className="read-or-hide">
		{isReadMore ? "...read more" : " show less"}
	</span>
	</p>
);
};

const Content = () => {
return (
	<div className="paragraph1">
	<p>
		<ReadMore>
		Welcome to our Real Estate Marketing Company!
At our Real Estate Marketing Company, we are passionate about revolutionizing the way properties are bought and sold. As the Support Lead, I take immense pride in leading a team of dedicated professionals who are committed to providing exceptional support and customer service to our clients and partners.
Unlike conventional real estate marketing companies, we believe in embracing technology to its fullest potential. we ensure our customers can envision their dream homes before the first foundation stone is laid. Our customer-centric approach allows us to understand the unique needs of each client, tailoring solutions that exceed expectations and transform dreams into reality.  
		</ReadMore>
	</p>
	</div>
);
};

export default Content;
