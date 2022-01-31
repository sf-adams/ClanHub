import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from '../auth/AuthContext';

function HomeContainer() {
  const { user } = useAuthState()

  return (
      <div className="home-container">

      {/* <!-- Top Container --> */}
        <section className="top-container">
          <header className="showcase">
            <h1>Welcome to ClanHub</h1>
            <p>A community built by the community, ClanHub is a space for students and staff alike to share their ideas. Access your feed to see the latest posts.</p>
            <a href="#" className="main-button">Read More</a>
          </header>
          <div className="top-box top-box-a">
            <h4>Membership</h4>
            <p className="price">$199/mo</p>
            <a href="" className="main-button">Buy Now</a>
          </div>
          <div className="top-box top-box-b">
            <h4>Pro Membership</h4>
            <p className="price">$299/mo</p>
            <a href="" className="main-button">Buy Now</a>
          </div>
        </section>

        {/* <!-- Boxes Section --> */}
        <section className="boxes">
          <div className="box">
            <i className="fas fa-chart-pie fa-4x"></i>
            <h3>Analytics</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
          </div>
          <div className="box">
            <i className="fas fa-globe fa-4x"></i>
            <h3>Marketing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
          </div>
          <div className="box">
            <i className="fas fa-cog fa-4x"></i>
            <h3>Development</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
          </div>
          <div className="box">
            <i className="fas fa-users fa-4x"></i>
            <h3>Support</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
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
          <img src="https://source.unsplash.com/random/200x200" alt="" />
          <img src="https://source.unsplash.com/random/201x200" alt="" />
          <img src="https://source.unsplash.com/random/202x200" alt="" />
          <img src="https://source.unsplash.com/random/203x200" alt="" />
          <img src="https://source.unsplash.com/random/204x200" alt="" />
          <img src="https://source.unsplash.com/random/205x200" alt="" />
          <img src="https://source.unsplash.com/random/206x200" alt="" />
          <img src="https://source.unsplash.com/random/207x200" alt="" />
          <img src="https://source.unsplash.com/random/208x200" alt="" />
        </section>


      </div>
  );
}

export default HomeContainer;