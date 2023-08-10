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
		Welcome to our real estate marketing company, where excellence meets innovation and dreams turn into reality. As the Managing Director of our esteemed organization, I am thrilled to introduce you to a world of boundless possibilities in the realm of real estate.With a profound passion for development and a vision that extends far beyond the horizon, I have spearheaded the creation of awe-inspiring townships that redefine modern living. Our portfolio boasts a plethora of successful townships that stand as testaments to our commitment to delivering exceptional living experiences to our customers. Having garnered extensive expertise in the real estate industry, we understand that each project is not just about bricks and mortar but about crafting communities where families can thrive and create cherished memories. Our core values of integrity, transparency, and customer-centricity have earned us the trust of countless individuals and families seeking their dream homes. At our company, we foster a culture of innovation, always striving to push boundaries and embrace cutting-edge technologies to enhance our offerings. Our dynamic team of professionals shares the collective goal of transforming the way people perceive and experience real estate. Beyond building townships, we are driven by a larger purpose – to contribute positively to society. Our commitment to sustainable practices and social responsibility initiatives ensures that every step we take leaves a positive impact on the environment and the communities we serve.  We believe that real estate is not just a business; it's about building a better future, one project at a time. With a track record of successful townships and a team of dedicated experts, we look forward to shaping the landscape of real estate with ingenuity and unwavering dedication. Welcome to our world of real estate marvels, where dreams find a place to call home. Together, let's redefine the way people live and experience life – with sophistication, comfort, and joy.
		</ReadMore>
	</p>
	</div>
);
};

export default Content;
