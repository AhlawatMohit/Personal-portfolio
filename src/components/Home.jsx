import React from "react";
import Hero from '../assets/hero.jpeg';

const Home = () => {
    return (
      <>
      <div >
        <div className="text-center p-7 bg-black text-white md:px-20 lg:px-40">

        <h2 className="text-5xl py-2 font-medium mt-12">Hi, I'm Mohit Ahlawat</h2>

        <p className="text-md py-2 leading-8 text-slate-300">I am a Full Stack Developer, I love to work on web application using technologies like ReactJs, NodeJs, MongoDB, JavaScript.</p>
          
          <div className="relative mx-auto lg:w-64 lg:h-64 sm:w-4 sm:h-4 md:w-80 md:h-80 mt-5 rounded-t-lg">
            <img src={Hero} alt="Profile" className="rounded-xl" />
          </div>
          </div>
          </div>
          </>
    );
}

export default Home;