import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 400,
      delay: 200,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      
    <div data-aos="zoom-y-out">
      <img src="./banner.jpg" alt="Banner Image" class="w-full h-[300px] object-cover md:w-full md:object-fit" />
    </div>
    </div>
  )
}

export default Banner
