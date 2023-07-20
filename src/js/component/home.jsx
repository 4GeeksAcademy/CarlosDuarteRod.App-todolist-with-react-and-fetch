import React, {useState,useEffect} from "react";

//include images into your bundle


//create your first component
const Home = () => {

	const [users,setusers]= useState();
	const host = "https://jsonplaceholder.typicode.com/"

	const fetchUsers = async () => {
		const url = host + "todos"
		const request = {
			method: "GET"
		}
		const response = await fetch(url, request)
		if (response.ok) {
			const data = await response.json();
			setusers(data);
		}
		else {"Error"}
	}

	useEffect(()=> {
		fetchUsers();
	}, [])

	return (
		<div className="text-center">
			<ul>
				{users? users.map((item)=> <li>{item.userId} - {item.id} - {item.title} {item.completed? <i className="fa-solid fa-check text-success"></i> : <i className="fa-solid fa-xmark text-danger"></i>} </li>) 
				: "Leyendo datos"}
			</ul>
		</div>
	);
};

export default Home;