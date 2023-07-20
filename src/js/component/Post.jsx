import React, {useState,useEffect} from "react";

const Post = () => {
    
    const [posts, setPosts] = useState
    const host = "https://jsonplaceholder.typicode.com/"

    const fetchPosts = async() => {
        const url = host + "/posts"
        const request = {
            method: "GET"
        }
        const response = await fetch(url,request)
        
        if (response.ok) {
            const data = await response.json();
            setPosts(data);
        }
        else {"error"}
    }
    useEffect(() =>{
        fetchPosts();
    },[])


    return (
        <div>
            {posts? posts.map((posts) => <li> {posts.user.Id} - {posts.id} - {posts.title} - {posts.body} </li>) : "Leyendo datos"}
        </div>
    )
}













export default Post;