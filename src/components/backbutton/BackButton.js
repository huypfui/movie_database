import React from "react";
import { useNavigate } from "react-router-dom";

// image import
import backbtn from "../../img/arrow_left.svg";

const BackButton = () => {
	const navigate = useNavigate();

	return (
		<input
			type="image"
			src={backbtn}
			alt="return"
			className="backBtn"
			onClick={() => navigate(-1)}
		/>
	);
};

export default BackButton;
