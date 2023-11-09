import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './loader';

const Error = ({ message }) => {

  useEffect(() => {
    setTimeout(() => {
      if (message === "You are not logged in") {
        localStorage.removeItem('token');
        window.location.href = "/login";
      } else if (message === "You have reached your daily limit") {
        localStorage.removeItem('token');
        window.location.href = "/";
      } else {
        window.location.href = "/";
      }
    }, 4000);
  }, []);


  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-center items-center bg-slate-900">
        <div className="max-w- mx-auto p-6 bg-purple-950 rounded-lg shadow-lg scale-150">
          <h1 className="text-3xl text-center font-bold mb-4 text-red-600">{message}</h1>
          {message === "You are not logged in" || message === "You have reached your daily limit" ? (<>
          </>) : (
            <p className="text-red-600 text-center">Hmm, you were not supposed to reach this page...</p>
          )}
          {message === "You have reached your daily limit" ? (<>
            <p className="text-red-600 text-center">You reached your daily limit, please come back tomorrow.</p>
          </>
          ) : (
            <></>
          )}
          <p className="text-red-600 text-center mt-5">We'll redirect you in 4s, hold on...</p>
        </div>
      </div>
    </>
  );
};

export default Error;
