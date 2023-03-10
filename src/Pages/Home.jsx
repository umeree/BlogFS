import React from 'react'
import { Link } from 'react-router-dom';


function Home() {
    const posts = [
        {
            id: 1,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 2,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img: "https://images.pexels.com/photos/8284724/pexels-photo-8284724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 3,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img: "https://images.pexels.com/photos/8284735/pexels-photo-8284735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
            id: 4,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img: "https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=600",
        },
        {
            id: 5,
            title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            img: "https://images.pexels.com/photos/8284735/pexels-photo-8284735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    ];
    return (
        <div className="home">
            <div className="posts">
                {posts.map(post => (
                    <div className='post' key={post.id}>
                        <div className='img'>
                            <img src={post.img} alt ="" />
                        </div>
                        <div className='content'>
                            <Link className='link' to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read more</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home
