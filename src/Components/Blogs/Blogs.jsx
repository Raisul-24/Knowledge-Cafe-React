import { useEffect, useState } from "react";
import Blog from "./Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleToBookMarks,handleMarkAsRead}) => {
        const [blogs,setBlogs] =useState([]);

        useEffect(() =>{
                fetch('blog.json')
                .then(res => res.json())
                .then(data => setBlogs(data))
        },[])
        return (
                <div className="md:w-2/3">
                        <h1 className="text-4xl">Blog:{blogs.length}</h1>
                        {
                                blogs.map(blog => <Blog key={blog.id}  
                                        handleToBookMarks={handleToBookMarks}
                                        handleMarkAsRead ={handleMarkAsRead}
                                        blog={blog}></Blog>)
                        }
                
                </div>
        );
};


Blogs.propTypes ={
        handleToBookMarks : PropTypes.func,
        handleMarkAsRead : PropTypes.func
}

export default Blogs;