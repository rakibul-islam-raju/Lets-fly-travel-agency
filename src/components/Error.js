export default function Error({ text }) {
	return (
		<div
			className={`w-full bg-red-100 text-red-500 p-2 rounded my-6 font-semibold`}
		>
			{text}
		</div>
	);
}
