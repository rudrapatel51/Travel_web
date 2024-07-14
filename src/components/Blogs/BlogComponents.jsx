import React from 'react';
import BlogCard from '../../pages/BlogCard';

const BlogComponents = () => {
  const BlogData = [
    {
      id: 1,
      image: '/blog1.jpeg',
      title: 'Hello',
      description: 'This trip was super amazing by help of travelwithus.',
      author: 'Harry',
      date: '09/12/2023',
    },
    {
      id: 2,
      image: '/blog2.jpg',
      title: 'Adventure Awaits',
      description: 'Discover the hidden gems with our exclusive tours.',
      author: 'Sally',
      date: '10/15/2023',
    },
    {
      id: 3,
      image: '/blog3.jpg',
      title: 'Travel Tips',
      description: 'Top 10 tips for a safe and enjoyable trip.',
      author: 'John',
      date: '11/20/2023',
    },
    {
      id: 4,
      image: '/blog4.jpg',
      title: 'Cultural Experiences',
      description: 'Immerse yourself in local cultures and traditions.',
      author: 'Jane',
      date: '12/05/2023',
    },
  ];

  return (
    <section className="container py-6 sm:py-12 bg-gray-100 text-gray-800">
      <div className="p-6 mx-auto space-y-8">
        <div className='text-4xl font-bold text-left my-8 border-l-8 border-primary/50 py-2 pl-2'>Our latests Blogs</div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((item) => (
            <BlogCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogComponents;
