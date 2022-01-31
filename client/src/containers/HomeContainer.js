import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from '../auth/AuthContext';
import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

function HomeContainer() {
  const { user } = useAuthState()

  return (
      <div className="home-container">

        <section className="top-container">
          <header className="showcase">
            <h1>Welcome to ClanHub</h1>
            <p>A community built by the community, ClanHub is a space for students and staff alike to share their ideas. Access your feed to see the latest posts.</p>
            <Link to="/feed" >
              <button className='main-button'>Feed</button>
            </Link>

          </header>
        </section>

        <section className="topics">
          <div className="each-topic">
            <h3 className="topic-title">Blog</h3>
            <p>See the latest long form content from the CodeClan community.</p>
            <Link to="/blog" >
              <button className='main-button'>Blog</button>
            </Link>
          </div>
          <div className="each-topic">
            <h3 className="topic-title">Jobs</h3>
            <p>See the currently available jobs, filtered by Software, Data or both.</p>
            <Link to="/jobs" >
              <button className='main-button'>Jobs</button>
            </Link>
          </div>
          <div className="each-topic">
            <h3 className="topic-title">News</h3>
            <p>Find out about what's going on at CodeClan and any comms from the Student Services Team.</p>
            <Link to="/news" >
              <button className='main-button'>News</button>
            </Link>
          </div>
          <div className="each-topic">
            <h3 className="topic-title">Events</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
            <Link to="/events" >
              <button className='main-button'>Events</button>
            </Link>
          </div>
        </section>

        {/* <!-- Info Section --> */}
        <section className="info">
          <img src="https://image.ibb.co/j4Qz8x/pic1.jpg" alt="" />
          <div>
            <h2>Your Business On The Web</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias reiciendis deleniti possimus nemo non repellendus?
              Quae atque vero modi quidem! Autem cupiditate fugit doloribus ad amet, asperiores provident commodi.</p>
            <a href="#" className="main-button">Learn More</a>
          </div>
        </section>

        {/* <!-- Portfolio --> */}
        <section className="portfolio">
          <img src="https://source.unsplash.com/mk7D-4UCfmg/400x400" alt="" />
          <img src="https://source.unsplash.com/m_HRfLhgABo/400x400" alt="" />
          <img src="https://source.unsplash.com/QckxruozjRg/400x400" alt="" />
          <img src="https://source.unsplash.com/2q_frVRXWfQ/400x400" alt="" />
          <img src="https://source.unsplash.com/5Q07sS54D0Q/400x400" alt="" />
        </section>

        <footer className='home-footer'>
          <p className='footer-text'>CodeClan &copy; 2022</p>
        </footer>
      </div>
  );
}

export default HomeContainer;