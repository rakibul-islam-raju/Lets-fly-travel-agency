import { useState, useEffect } from "react";
import Loading from "../Loading";
import axios from "axios";

export default function UserListTable() {
	const [users, setUsers] = useState([]);
	const [error, setError] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${process.env.REACT_APP_BASE_URL}/users`)
			.then((res) => setUsers(res.data))
			.catch((e) => setError(e))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="flex flex-col mt-8">
			{loading && <Loading />}

			<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
						<table class="min-w-full divide-y divide-gray-200">
							<thead class="bg-gray-50">
								<tr>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Email
									</th>
									<th
										scope="col"
										class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
									>
										Status
									</th>
									<th scope="col" class="relative px-6 py-3">
										<span class="sr-only">Action</span>
									</th>
								</tr>
							</thead>

							<tbody class="bg-white divide-y divide-gray-200">
								{users.map((user) => (
									<tr key={user?._id}>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div class="text-sm font-medium text-gray-900">
													{user?.displayName}
												</div>
											</div>
										</td>

										<td class="px-6 py-4 whitespace-nowrap">
											<div class="flex items-center">
												<div class="text-sm font-medium text-gray-900">
													{user?.email}
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<span
												class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
													user?.status
														? "bg-green-100 text-green-800"
														: "bg-yellow-100 text-yellow-800"
												}`}
											>
												{user?.status
													? "Approved"
													: "Pending"}
											</span>
										</td>
										<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
											<button
												type="button"
												class="text-red-600 bg-red-100 rounded-xl px-2 font-semibold"
											>
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
