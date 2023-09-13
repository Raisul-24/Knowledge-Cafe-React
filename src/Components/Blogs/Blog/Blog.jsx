import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog,handleToBookMarks,handleMarkAsRead}) => {
        const {title,cover,author,posted_date,author_img,reading_time,hashtags} = blog;
        // console.log(blog);
        return (
                <div className='mb-20'>
                        <img src={cover} alt={`Cover picture of the title${title}`} />
                        <div className="flex justify-between items-center mt-3 space-y-3">
                                <div className='flex'>
                                        <img className='w-14' src={author_img} alt="" />
                                        <div className='ml-6'>
                                                <h3 className='tex-2xl'>{author}</h3>
                                                <p>{posted_date}</p>
                                        </div>
                                </div>
                                <div>
                                        <span>{reading_time} read</span>
                                        <button onClick={() => handleToBookMarks(blog)}
                                        className='ml-3 text-red-400'> 
                                        <FaBookmark></FaBookmark>
                                        </button>
                                </div>
                        </div>
                        <h2 className='text-4xl'>{title}</h2>
                        <p>
                                {
                                hashtags.map((hash,idx) =><span key={idx}><a href="" > #{ hash }</a></span>)
                                }
                        </p>
                        <button
                         onClick={() =>handleMarkAsRead(reading_time)}
                         className='text-purple-600 font-bold underline'>Mark As Read</button>
                </div>
        );
};

Blog.propTypes = {
        blog: PropTypes.object.isRequired,
        handleToBookMarks : PropTypes.func,
        handleMarkAsRead : PropTypes.func
}

export default Blog;