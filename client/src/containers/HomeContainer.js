import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from '../auth/AuthContext';
import { Link } from "react-router-dom";

function HomeContainer() {
  const { user } = useAuthState()

  return (
      <div className="home-container">

        <section className="top-container">
          <header className="showcase">
            <h1>Welcome to ClanHub</h1>
            <p>A community built by the community, ClanHub is a space for students and staff alike to share their ideas. Access your feed to see the latest posts.</p>
            <Link to="/home" >
              <button className='main-button'>Feed</button>
            </Link>

          </header>
        </section>

        <section className="boxes">
          <div className="box">
            <h3 className="box-title">Blog</h3>
            <p>See the latest long form content from the CodeClan community.</p>
            <a href="" className="main-button">Blog</a>
          </div>
          <div className="box">
            <h3 className="box-title">Jobs</h3>
            <p>See the currently available jobs, filtered by Software, Data or both.</p>
            <a href="" className="main-button">Jobs</a>
          </div>
          <div className="box">
            <h3 className="box-title">News</h3>
            <p>Find out about what's going on at CodeClan and any comms from the Student Services Team.</p>
            <a href="" className="main-button">News</a>
          </div>
          <div className="box">
            <h3 className="box-title">Events</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
            <a href="" className="main-button">Events</a>
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