export default function Message({ color, text }) {
	return (
		<div
			className={`w-full bg-${color}-100 text-${color}-500 p-2 rounded my-6 font-semibold`}
		>
			{text}
		</div>
	);
}
