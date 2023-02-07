import React from "react";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import BootStrap from '../assets/bootstrap.png';
import ReactJs from '../assets/react.png';
import Node from '../assets/node.png';
import GitHub from '../assets/github.png';
import Mongodb from '../assets/mongodb.png';
import TailWind from '../assets/tailwind.png';

const skills = () =>{
    return (
        <div className="text-center p-12 bg-black text-white md:px-20">
        <h1 className="text-3xl md:pt-40 sm:py-10">Skills</h1>
        <p className="text-md py-2 leading-8 text-slate-300">These are the technologies I've worked with</p>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 text-center py-8 px-10 sm:px-0">
            <div className="shadow-lg rounded-2xl shadow-orange-300 mx-8 my-8">
                <img src={HTML} alt="html" className="w-24 mx-auto py-10" />
                <h3>HTML</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-slate-50 mx-8 my-8">
                <img src={CSS} alt="css"  className="w-24 mx-auto py-10" />
                <h3>CSS</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-lime-400 mx-8 my-8">
                <img src={JavaScript} alt="javascript"  className="w-24 mx-auto py-10" />
                <h3>JavaScript</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-fuchsia-200 mx-8 my-8">
                <img src={ReactJs} alt="reactjs"  className="w-24 mx-auto py-10" />
                <h3>ReactJs</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-yellow-700 mx-8 my-8">
                <img src={Node} alt="nodejs"  className="w-24 mx-auto py-10" />
                <h3 className="pt-10">NodeJs</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-teal-300 mx-8 my-8">
                <img src={GitHub} alt="github"  className="w-24 mx-auto py-10" />
                <h3>GitHub</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-cyan-400 mx-8 my-8">
                <img src={Mongodb} alt="mongodb"  className="w-24 mx-auto py-10" />
                <h3 className="pt-16">MongoDB</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-red-400 mx-8 my-8">
                <img src={TailWind} alt="tailwind"  className="w-24 mx-auto py-10" />
                <h3>TailWind CSS</h3>
            </div>
            <div className="shadow-lg rounded-2xl shadow-sky-500 mx-8 my-8">
                <img src={BootStrap} alt="bootstrap"  className="w-24 mx-auto py-10" />
                <h3>BootStrap</h3>
            </div>
        </div>
        </div>
    );
}

export default skills;