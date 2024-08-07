import React from 'react';
import PlaceCard from './PlaceCard';

const products = [
  {
    id: 1,
    title: 'Manali',
    description: "Manali is a high-altitude Himalayan resort town in Indias northern Himachal Pradesh state",
    imageUrl: '/manali.avif',
    link: '#',
    price: 5000,
  },
  {
    id: 2,
    title: 'Kashmir',
    description: 'Kashmir is the northernmost geographical region of the Indian subcontinent.',
    imageUrl: '/kashmir.jpeg',
    link: '#',
    price: 4000,
  },
  {
    id: 3,
    title: 'Darjeeling',
    description: "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills.",
    imageUrl: '/darjelling.jpeg',
    link: '#',
    price: 3000,
  },
  {
    id: 4,
    title: 'Delhi',
    description: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north",
    imageUrl: '/delhi.jpg',
    link: '#',
    price: 2000,

  },
  {
    id: 5,
    title: 'Kerala',
    description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.",
    imageUrl: '/kerala.jpeg',
    link: '#',
    price: 1000,
  },
];

const Places = ({handleOrderPopup}) => (
  <div className="container mx-auto">
    <h1 className="text-4xl font-bold text-left my-8 border-l-8 border-primary/50 py-2 pl-2">Best Places To Visits</h1>
    <div className="flex flex-wrap -mx-4">
      {products.map((item,index) => (
        <PlaceCard key={index} {...item}/>
      ))}
    </div>
  </div>
);

export default Places;
