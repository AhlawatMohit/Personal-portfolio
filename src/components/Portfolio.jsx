import React from "react";
import Card from '../assets/Work/card.png';
import Slide from '../assets/Work/slide.png';
import LinearGradient from '../assets/Work/linearGradient.png';
import Loader from '../assets/Work/loader.png';
import BHome from '../assets/Work/Bhome.png';
import Compose from '../assets/Work/compose.png';
import KHome from '../assets/Work/Khome.png';
import Home from '../assets/Work/home.png';

const Portfolio = () => {
    return (
        <>
            <div className="text-center bg-black text-white md:px-20 lg:px-40">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-3 leading-8  px-5 text-slate-300">When i started my Web Development course from Udemy i built some CodePen by using HTML, CSS, JavaScript there is more if you want to see click on CodePen icon on left. and also build some applications like Blog-app, Keepers-app(NotePad or Sticky Note) and Now i am working on Ecommerce-app Backend is completed now i am working on Frontend.</p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-0 text-center py-8 px-10 sm:px-0">
            <div className="basis-1/4 mx-8 lg:mb-10 sm:mb-10 md:mb-10">
                <img src={Card} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 hover:text-sky-300 sm:pr-10"><a href="https://codepen.io/MAhlawat/pen/jOZLNNq" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={Slide} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 sm:pr-10 hover:text-sky-300"><a href="https://codepen.io/MAhlawat/pen/LYdRYON" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={Loader} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2  hover:text-sky-300 sm:pr-10"><a href="https://codepen.io/MAhlawat/pen/YzeLBKz" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={LinearGradient} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 hover:text-sky-300 sm:pr-10"><a href="https://codepen.io/MAhlawat/pen/abqwEEy" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={BHome} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 hover:text-sky-300 sm:pr-10"><a href="https://github.com/AhlawatMohit/Blog-app/tree/main" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={Compose} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 hover:text-sky-300 sm:pr-10"><a href="https://github.com/AhlawatMohit/Blog-app/tree/main" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={KHome} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 hover:text-sky-300 sm:pr-10"><a href="https://github.com/AhlawatMohit/Keeper-app" >CODE / DEMO</a></h3>
            </div>
            <div className="basis-1/4 mx-8 lg:mb-20 sm:mb-10 md:mb-10">
                <img src={Home} alt="work" className="rounded-2xl md:mx-8 object-cover" layout="responsive" />
                <h3 className="text-amber-50 pt-6 pl-8 py-2 hover:text-sky-300 sm:pr-10"><a href="https://github.com/AhlawatMohit/Keeper-app" >CODE / DEMO</a></h3>
            </div>
            </div>
            </div>
        </>
    );
}

export default Portfolio;