import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
      <div className='md:w-1/3 mt-8'>
        <div>
          <h3 className='text-4xl ml-4 bg-blue-400 p-3 rounded-xl'>Spent time on read : {readingTime}</h3>
        </div>
      <div className="bg-gray-300 ml-4 rounded-xl">
      <h2 className="text-3xl mt-2 p-2">Bookmarked Blogs: {bookmarks.length}</h2>
      {
        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
      }  
    </div>
    </div>
    );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
}

export default Bookmarks;