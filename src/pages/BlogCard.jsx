import React ,{ useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogCard = ({ image, date, title, description, author }) => {
 
  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <Link
    to={`/blogs/${title}`}
    onClick={() => {
      window.scroll(0,0);
    }}
    state={{image, date, title, description, author }}>
      <div data-aos="fade-left" >
    <article className="flex flex-col dark:bg-gray-50">
        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
      <div className="flex flex-col flex-1 p-6">
        <a rel="noopener noreferrer" href="#" aria-label={title} className="text-xs tracking-wider uppercase hover:underline dark:text-violet-600">
          {author}
        </a>
        <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{title}</h3>
        <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
          <span>{date}</span>
          <span>{description}</span>
        </div>
      </div>
    </article>
    </div>
    </Link>
  );
};

export default BlogCard;
