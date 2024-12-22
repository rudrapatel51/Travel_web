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
  {
    id: 6,
    title: 'Goa',
    description: "Goa is a state in western India with coastlines stretching along the Arabian Sea.",
    imageUrl: '/goa.jpg',
    link: '#',
    price: 6000,
  },
  {
    id: 7,
    title: 'Jaipur',
    description: "Jaipur is the capital of India’s Rajasthan state, known as the 'Pink City'.",
    imageUrl: '/jaipur.jpeg',
    link: '#',
    price: 3500,
  },
  {
    id: 8,
    title: 'Rishikesh',
    description: "Rishikesh is a city in India’s northern state of Uttarakhand, in the Himalayan foothills.",
    imageUrl: '/rishikesh.jpeg',
    link: '#',
    price: 2500,
  },
  {
    id: 9,
    title: 'Agra',
    description: "Agra is a city on the banks of the Yamuna river in Uttar Pradesh, India, home to the Taj Mahal.",
    imageUrl: '/agra.jpeg',
    link: '#',
    price: 4500,
  },
  {
    id: 10,
    title: 'Shimla',
    description: "Shimla is the capital of the northern Indian state of Himachal Pradesh, in the Himalayan foothills.",
    imageUrl: '/shimla.jpeg',
    link: '#',
    price: 3200,
  },
  {
    id: 11,
    title: 'Pondicherry',
    description: "Pondicherry is a French colonial settlement in India, located on the southeastern coast.",
    imageUrl: '/pondicherry.jpeg',
    link: '#',
    price: 2800,
  },
  {
    id: 12,
    title: 'Mysore',
    description: "Mysore is a city in India's southwestern Karnataka state, known for its heritage structures.",
    imageUrl: '/mysore.jpeg',
    link: '#',
    price: 2300,
  },
  {
    id: 13,
    title: 'Ooty',
    description: "Ooty is a resort town in the Western Ghats mountains, in Tamil Nadu state, southern India.",
    imageUrl: '/ooty.jpeg',
    link: '#',
    price: 2700,
  },
  {
    id: 14,
    title: 'Varanasi',
    description: "Varanasi is a city in northern India, considered to be the spiritual capital of the country.",
    imageUrl: '/varanasi.jpeg',
    link: '#',
    price: 3000,
  },
  {
    id: 15,
    title: 'Leh',
    description: "Leh is a town in the Leh district of the Ladakh region of northern India.",
    imageUrl: '/leh.jpeg',
    link: '#',
    price: 7000,
  }
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
