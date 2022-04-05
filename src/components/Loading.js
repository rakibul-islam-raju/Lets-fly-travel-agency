import React from "react";
import LoadingImg from "../assets/images/loading.svg";

export default function Loading() {
	return (
		<div className="flex justify-center">
			<img className="w-16" src={LoadingImg} alt="Loading..." />
		</div>
	);
}
