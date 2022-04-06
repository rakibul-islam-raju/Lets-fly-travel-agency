const destinations = [
	{
		_id: "01",
		title: "Bali",
		description: "lorem ipsum Dolor natuit.",
		img: "https://images.pexels.com/photos/2474690/pexels-photo-2474690.jpeg?cs=srgb&dl=pexels-timur-kozmenko-2474690.jpg&fm=jpg",
		from: 250,
	},
	{
		_id: "02",
		title: "Maldives",
		description: "lorem ipsum Dolor natuit.",
		img: "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?cs=srgb&dl=pexels-asad-photo-maldives-1287460.jpg&fm=jpg",
		from: 250,
	},
	{
		_id: "03",
		title: "Dubai",
		description: "lorem ipsum Dolor natuit.",
		img: "https://images.pexels.com/photos/2044434/pexels-photo-2044434.jpeg?cs=srgb&dl=pexels-aleksandar-pasaric-2044434.jpg&fm=jpg",
		from: 250,
	},
];

export default function Destinations() {
	return (
		<section className="wrapper mt-16">
			<h4 className="section-title">Popular Destinations</h4>

			<div className="grid grid-cols-3 gap-4">
				{destinations.map((des) => (
					<div key={des._id} className="">
						<img
							className="w-full h-56"
							src={des.img}
							alt={des.title}
						/>
						<h4 className="text-2xl mt-2 font-semibold">
							{des.title}
						</h4>
						<p className="text-lg">{des.description}</p>
						<h6 className="font-bold text-right">
							From: ${des.from}
						</h6>
					</div>
				))}
			</div>
		</section>
	);
}
