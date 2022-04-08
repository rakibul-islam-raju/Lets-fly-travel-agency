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
										Admin
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
											<button
												type="button"
												class={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
													user?.admin
														? "bg-green-100 text-green-800"
														: "bg-sky-100 text-sky-800"
												}`}
											>
												{user?.status
													? "Admin"
													: "User"}
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
