import React, { useState } from "react";
import NewProfileForm from "../components/newProfile/NewProfileForm"
import UserService from '../services/UserService';

const NewProfile = ({user, users, createUser }) => {
  return (
    <div className="new-user-information-container">
      <NewProfileForm user={user} createUser={createUser} />
    </div>
  );
};

export default NewProfile;
