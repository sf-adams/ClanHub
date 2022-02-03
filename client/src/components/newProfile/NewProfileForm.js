import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NewProfileForm = ({ user, createUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState(user.email);
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const navigate = useNavigate();

  // this use effect gets the user
  useEffect(() => {
    setEmail(user.email);
  });

  const handleFirstNameChange = (ev) => {
    setFirstName(ev.target.value);
  };
  const handleLastNameChange = (ev) => {
    setLastName(ev.target.value);
  };
  //   const handleEmailChange = (ev) => {
  //     setEmail(ev.target.value);
  //   };
  const handleBioChange = (ev) => {
    setBio(ev.target.value);
  };
  const handleLinkedinChange = (ev) => {
    setLinkedin(ev.target.value);
  };
  const handleGithubChange = (ev) => {
    setGithub(ev.target.value);
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    await createUser({
      firstName: firstName,
      lastName: lastName,
      bio: bio,
      email: email,
      linkedin: linkedin,
      github: github,
    });
    setFirstName("");
    setLastName("");
    setBio("");
    setEmail("");
    setLinkedin("");
    setGithub("");
    navigate("/home");
  };

  return (
    <div className="new-user-information-wrapper">
      <h3>New User Information</h3>
      <p>
        You have not entered your user information, please do so before entering
        the site.
      </p>
      <p className="new-user-information-para">
        Your email is 
        <span className="new-user-information-span"> {user.email}</span>
      </p>

      <form
        action="POST"
        className="new-user-information-form"
        onSubmit={handleSubmit}
      >
        <div className="new-user-information-form-item">
          <label htmlFor="firstName">First name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            required
            placeholder="Joe"
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="new-user-information-form-item">
          <label htmlFor="lastName">Last name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            required
            placeholder="Bloggs"
            onChange={handleLastNameChange}
          />
        </div>
        <div className="new-user-information-form-item">
          <label htmlFor="bio">About</label>
          <input
            type="text"
            id="bio"
            name="bio"
            value={bio}
            required
            placeholder="An aspiring digital trend-setter"
            onChange={handleBioChange}
          />
        </div>
        <div className="new-user-information-form-item">
          <label htmlFor="linkedin">Linkedin</label>
          <input
            type="text"
            id="linkedin"
            name="linkedin"
            value={linkedin}
            required
            placeholder="linkedin.com/joe.bloggs"
            onChange={handleLinkedinChange}
          />
        </div>
        <div className="new-user-information-form-item">
          <label htmlFor="github">Github</label>
          <input
            type="text"
            id="github"
            name="github"
            value={github}
            required
            placeholder="JoeBloggz"
            onChange={handleGithubChange}
          />
        </div>
        <div className="new-user-information-form-item ">
          <input type="submit" id="submit"  className="new-user-form-submit"/>
        </div>
      </form>
    </div>
  );
};

export default NewProfileForm;
