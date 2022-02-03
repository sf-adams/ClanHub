import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "../auth/AuthContext";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

function HomeContainer() {
  const { user } = useAuthState();

  return (
    <div className="home-container">
      <section className="top-container">
        <header className="showcase">
          <div className="showcase-overlay-color"></div>
          <div className="showcase-overlay-text">
            <h1>Welcome to ClanHub</h1>
            <p>
              A community built by the community, ClanHub is a space for
              students and staff alike to share their ideas. Access your feed to
              see the latest posts.
            </p>

            <Link to="/feed">
              <button className="main-button">Feed</button>
            </Link>
          </div>
        </header>
      </section>

      <section className="topics">
        <div className="each-topic">
          <h3 className="topic-title">Blog</h3>
          <p>See the latest long form content from the CodeClan community.</p>
          <Link to="/blog">
            <button className="main-button">Blog</button>
          </Link>
        </div>
        <div className="each-topic">
          <h3 className="topic-title">Jobs</h3>
          <p>
            See the currently available jobs, filtered by Software, Data or
            both.
          </p>
          <Link to="/jobs">
            <button className="main-button">Jobs</button>
          </Link>
        </div>
        <div className="each-topic">
          <h3 className="topic-title">Events</h3>
          <p>
            Find out about what's going on at CodeClan and any comms from the
            Student Services Team.
          </p>
          <Link to="/news">
            <button className="main-button">News</button>
          </Link>
        </div>
        <div className="each-topic">
          <h3 className="topic-title">Resources</h3>
          <p>See some of the best resources recommended by the community.</p>
          <Link to="/events">
            <button className="main-button">Events</button>
          </Link>
        </div>
      </section>

      <section className="covid-info">
        <img src="https://source.unsplash.com/4rjV4VFpQnI" alt="" />
        <div className="covid-info-text-wrapper">
          <h2>Covid Requirements</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias
            reiciendis deleniti possimus nemo non repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis, culpa est doloribus, repellendus neque a, aliquam accusantium commodi non nostrum odit saepe exercitationem natus molestiae. Ea, quia illum? Nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam distinctio debitis perspiciatis ea dolor in, cum, suscipit vel fuga praesentium, fugit temporibus! Est dolor esse nostrum facere eum provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae alias
            reiciendis deleniti possimus nemo non repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem omnis, culpa est doloribus, repellendus neque a, aliquam accusantium commodi non nostrum odit saepe exercitationem natus molestiae. Ea, quia illum? Nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati numquam distinctio debitis perspiciatis ea dolor in, cum, suscipit vel fuga praesentium, fugit temporibus! Est dolor esse nostrum facere eum provident.
          </p>
          <p className="secondary-button">
            <a href="#">Learn More</a>
          </p>
        </div>
      </section>

      <section className="blog-posts">
        <div className="blog-post-container">
          <div className="blog-post-overlay"></div>
          <img
            src="https://source.unsplash.com/mk7D-4UCfmg/400x400"
            alt="Avatar"
            className="blog-post-image"
          />
          <div className="blog-post-text">
            <p className="title-text">Typing</p>
          </div>
        </div>

        <div className="blog-post-container">
          <div className="blog-post-overlay"></div>
          <img
            src="https://source.unsplash.com/m_HRfLhgABo/400x400"
            alt="Avatar"
            className="blog-post-image"
          />
          <div className="blog-post-text">
            <p className="title-text">Set Up</p>
          </div>
        </div>

        <div className="blog-post-container">
          <div className="blog-post-overlay"></div>
          <img
            src="https://source.unsplash.com/QckxruozjRg/400x400"
            alt="Avatar"
            className="blog-post-image"
          />
          <div className="blog-post-text">
            <p className="title-text">Working Together</p>
          </div>
        </div>

        <div className="blog-post-container">
          <div className="blog-post-overlay"></div>
          <img
            src="https://source.unsplash.com/2q_frVRXWfQ/400x400"
            alt="Avatar"
            className="blog-post-image"
          />
          <div className="blog-post-text">
            <p className="title-text">Taking Notes</p>
          </div>
        </div>

        <div className="blog-post-container">
          <div className="blog-post-overlay"></div>
          <img
            src="https://source.unsplash.com/5Q07sS54D0Q/400x400"
            alt="Avatar"
            className="blog-post-image"
          />
          <div className="blog-post-text">
            <p className="title-text">Whiteboarding</p>
          </div>
        </div>
      </section>

      <footer className="home-footer">
        <p className="footer-text">CodeClan &copy; 2022</p>
        <div className="icon-container">
          <div className="facebook">
            <a
              href="https://www.facebook.com/codeclanscotland//"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="social-icon" size="1.5em" />
            </a>
          </div>
          <div className="linkedin">
            <a
              href="https://www.linkedin.com/school/codeclan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" size="1.5em" />
            </a>
          </div>
          <div className="twitter">
            <a
              href="https://twitter.com/CodeClanScot/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="social-icon" size="1.5em" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomeContainer;
