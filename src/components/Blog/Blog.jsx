import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author, author_Img, time, posted_date, hashtags } = blog;
    return (
        <div className='space-y-5 mb-20'>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-16 mb-8 h-16 rounded-full' src={author_Img} alt="" />
                    <div className='mx-3'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-2xl'>{time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='ml-2 text-2xl'><CiBookmark></CiBookmark></button>
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button
            onClick={ () => handleMarkAsRead(time)}
             className='text-purple-700 font-bold underline'
             >Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;