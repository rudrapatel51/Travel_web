import React from 'react';
import PlaceCard from './PlaceCard';

const products = [
  {
    id: 1,
    title: 'Manali',
    description: "Manali is a high-altitude Himalayan resort town in Indias northern Himachal Pradesh state",
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQukDCQiCh-KPSxOQXCb7hr7uEAh1pjkLhudEz6xvpauzTZUUwCEqB82jTdcu-QT2dsDiomfhjGR00RCVxFPknydjfX403PAZeAgmnIzA',
    link: '#',
    price: 5000,
  },
  {
    id: 2,
    title: 'Kashmir',
    description: 'Kashmir is the northernmost geographical region of the Indian subcontinent.',
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQukDCQiCh-KPSxOQXCb7hr7uEAh1pjkLhudEz6xvpauzTZUUwCEqB82jTdcu-QT2dsDiomfhjGR00RCVxFPknydjfX403PAZeAgmnIzA',
    link: '#',
    price: 4000,
  },
  {
    id: 3,
    title: 'Darjeeling',
    description: "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills.",
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQukDCQiCh-KPSxOQXCb7hr7uEAh1pjkLhudEz6xvpauzTZUUwCEqB82jTdcu-QT2dsDiomfhjGR00RCVxFPknydjfX403PAZeAgmnIzA',
    link: '#',
    price: 3000,
  },
  {
    id: 4,
    title: 'Delhi',
    description: "Delhi, India’s capital territory, is a massive metropolitan area in the country’s north",
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQukDCQiCh-KPSxOQXCb7hr7uEAh1pjkLhudEz6xvpauzTZUUwCEqB82jTdcu-QT2dsDiomfhjGR00RCVxFPknydjfX403PAZeAgmnIzA',
    link: '#',
    price: 2000,

  },
  {
    id: 5,
    title: 'Kerala',
    description: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline.",
    imageUrl: 'https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcQukDCQiCh-KPSxOQXCb7hr7uEAh1pjkLhudEz6xvpauzTZUUwCEqB82jTdcu-QT2dsDiomfhjGR00RCVxFPknydjfX403PAZeAgmnIzA',
    link: '#',
    price: 1000,
  },
];

const Places = () => (
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
