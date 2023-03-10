import React from 'react'

function Menu() {

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
        <div className='menu'>
            <h1>
                Other posts you may like
            </h1>
            {posts.map(post => (
                <div className='post' key={post.id}>
                    <img src={post.img} alt ="" />
                    <h2>{post.title}</h2>
                    <button>Read more</button>
                </div>
            ))}
        </div>
    )
}

export default Menu
