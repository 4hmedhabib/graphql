import { useQuery, useMutation, gql } from '@apollo/client';
import { Fragment } from 'react';

const QUERY_ALL_USERS = gql`
	query GetAllUsers {
		users {
			id
			name
			username
			age
			nationality
			friends {
				id
				name
				username
			}
			favoriteMovies {
				id
				name
				yearOfPublication
				isInTheaters
			}
		}
	}
`;

const QUERY_ALL_MOVIES = gql`
	query GetAllMovies {
		movies {
			id
			name
			yearOfPublication
			isInTheaters
		}
	}
`;

const Data = () => {
	const { data, loading, error } = useQuery(QUERY_ALL_USERS);
	const { data: moviesData } = useQuery(QUERY_ALL_MOVIES);

	if (loading) {
		return <h1>Loading...</h1>;
	}

	if (error) {
		console.log(error);
	}

	if (data) {
		console.log(data);
	}
	return (
		<div className="container flex justify-around">
			<div className=" w-2/5">
				<h1 className="font-bold shadow px-2 py-3 rounded-xl">Users :</h1>
				{data &&
					data.users.map((user) => {
						return (
							<div className="shadow border-2 border-gray-50 py-2 px-3 my-3  rounded-lg">
								<h1 className="font-bold text-xl rounded shadow-inner px-3 bg-blue-500 text-white">
									{user.name}
								</h1>
								<p className=" my-2">
									<span className="font-bold">Username: </span> {user.username}
								</p>
								<p className=" my-2">
									<span className="font-bold">Age: </span> {user.age}
								</p>

								<p className=" my-2">
									<span className="font-bold">Nationality: </span> {user.nationality}
								</p>
							</div>
						);
					})}
			</div>
			<div className="w-2/5">
				<h1 className="font-bold shadow px-2 py-3 rounded-xl">Movies :</h1>

				{moviesData &&
					moviesData.movies.map((movie) => {
						return (
							<div className="shadow border-2 border-gray-50 py-2 px-3 my-3  rounded-lg">
								<h1 className="font-bold text-xl rounded shadow-inner px-3 bg-blue-500 text-white">
									{movie.name}
								</h1>
								<p className=" my-2">
									<span className="font-bold">Year: </span> {movie.yearOfPublication}
								</p>
								<p className=" my-2">
									<span className="font-bold">Is InTheaters: </span>{' '}
									{movie.isInTheaters ? ' true' : 'false'}
								</p>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Data;
