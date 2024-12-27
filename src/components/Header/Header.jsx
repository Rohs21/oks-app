import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Welcome to Books-App
                "Discover a world of stories, knowledge, and inspiration. Search for your favorite books, explore new genres, and find everything you need to fuel your reading journey. Dive in and let the adventure begin!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header