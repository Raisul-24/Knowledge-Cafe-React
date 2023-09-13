import PropTypes from 'prop-types';
import Bookmark from './Bookmark';
const Bookmarks = ({bookmarks,readingTime}) => {
        return (
                <div className="md:w-1/3 bg-gray-300 ml-4 pt-3 rounded-xl mt-10">
                        <div> 
                                <h2 className='text-2xl text-center'>Reading Time : {readingTime}</h2>
                        </div>
                        <h2 className="text-3xl text-center">BookMarked Blogs: {bookmarks.length}</h2>
                        {
                                bookmarks.map(bookmark =>
                                        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                        }
                </div>
        );
};

Bookmarks.propTypes = {
     bookmarks : PropTypes.array,
     readingTime : PropTypes.number
}
export default Bookmarks;