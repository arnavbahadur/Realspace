import React, { useState } from "react";


const ReadMore = ({ children }) => {
const text = children;
const [isReadMore, setIsReadMore] = useState(true);
const toggleReadMore = () => {
	setIsReadMore(!isReadMore);
};
return (
	<p className="textrd">
	{isReadMore ? text.slice(0, 300) : text}
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
		Welcome to our real estate marketing company,where innovation meets imagination and possibilities know no bounds.Over the years, we have evolved into a dynamic force within the industry, driven by innovation, creativity, and an unwavering commitment to excellence.

From our very inception, we set out with a clear vision - to redefine how real estate is marketed and perceived. We understood that each property tells a unique story, and it is our mission to craft narratives that resonate deeply with our clients and their target audiences. Our team comprises not only marketing experts, but also strategists, storytellers, and visionaries, all working collaboratively to transform properties into immersive experiences that captivate and inspire.In a world saturated with information, we have embraced the challenge of standing out amidst the noise. Our strategies are not mere campaigns; they are strategically designed journeys that lead our clients to success. We leverage cutting-edge technology, data-driven insights, and a profound understanding of market trends to ensure that every property we represent receives the attention it truly deserves.
		</ReadMore>
	</p>
	</div>
);
};

export default Content;
