import React from 'react';

const BlogCard = ({ image, date, title, description, author }) => {
  return (
    <article className="flex flex-col dark:bg-gray-50">
      <a rel="noopener noreferrer" href="#" aria-label={title}>
        <img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
      </a>
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
  );
};

export default BlogCard;
