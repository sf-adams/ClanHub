import React, {useState} from "react";

const NewProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleFirstNameChange = (ev) => {
    setFirstName(ev.target.value);
  };
  const handleLastNameChange = (ev) => {
    setLastName(ev.target.value);
  };
  const handleEmailChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handlePasswordChange = (ev) => {
    setPassword(ev.target.value);
  };
  const handleBioChange = (ev) => {
    setBio(ev.target.value);
  };
  const handleLinkedinChange = (ev) => {
    setLinkedin(ev.target.value);
  };
  const handleGithubChange = (ev) => {
    setGithub(ev.target.value);
  };
  return (
    <div>
      <p>
        You have not entered your user information, please do so before entering
        the site
      </p>
      <form action="POST" className="new-user-information-form">
        <div className="new-user-information-form-item">
          <label htmlFor="firstName"></label>
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
          <label htmlFor="lastName"></label>
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
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            required
            placeholder="email.codeclan.com"
            onChange={handleEmailChange}
          />
        </div>
        <div className="new-user-information-form-item">
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            required
            onChange={handlePasswordChange}
          />
        </div>
        <div className="new-user-information-form-item">
          <label htmlFor="bio"></label>
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
          <label htmlFor="linkedin"></label>
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
          <label htmlFor="github"></label>
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
      </form>
    </div>
  );
};

export default NewProfile;
