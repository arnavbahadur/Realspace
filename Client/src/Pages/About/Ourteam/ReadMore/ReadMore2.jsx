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
		we have successfully brought a fresh perspective to the real estate landscape, pushing the boundaries of creativity and innovation. Our townships are not just brick-and-mortar structures; they are meticulously crafted communities that prioritize sustainable living, modern amenities, and a harmonious blend of nature and urbanity.
		</ReadMore>
	</p>
	</div>
);
};

export default Content;
