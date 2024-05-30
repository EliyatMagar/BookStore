import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from 'axios'
import { Link } from "react-router-dom";

const CourseComponent = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async ()=>{
      try{
        const res=await axios.get('http://localhost:4001/book');
        console.log(res.data);
        setBook(res.data);
      }catch(error){
        console.log(error)

      }
    }
    getBook();
 
  },[])
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4   dark:bg-slate-900 dark:text-white">
      <div className="pt-28 text-center justify-center items-center">
        <h1 className="font-semibold text-2xl md:text-4xl">
          We are delighted to have you{" "}
          <span className="text-pink-500">Here )-</span>
        </h1>
        <p className="mt-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et debitis
          quasi aut inventore suscipit voluptatum! Exercitationem, nesciunt
          adipisci nobis repellat accusantium quos qui provident? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Non officia quia quas
          odit delectus consectetur voluptates blanditiis rem temporibus quam?
        </p>

        <Link to="/">
          <button className="mt-6 bg-pink-500 rounded px-4 py-2  text-white hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      {/* data render */}

      <div className="mt-6 grid grid-cols-1 md:grid-cols-4">
        {book.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CourseComponent;
