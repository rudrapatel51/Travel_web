import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="fade-right">
      <section className="bg-white">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Travel With Us</h2>
            <p className="mb-4">We are Travel agency that provide you and your family a amazing tour plane that make your journey easy and amasing with your ones. Small enough to be simple and quick.</p>
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Contact Us</h2>
            <p className="mb-4"><a className='text-bold' href="tel:+91 9428610404">
           91+ 9428610404
            </a>
            </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
            <img className="w-full rounded-lg" src="./about_image.jpg" alt="office content 1"/>
            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="./about_image2.jpg" alt="office content 2"/>
        </div>
    </div>
</section>
    </div>
  )
}

export default About
