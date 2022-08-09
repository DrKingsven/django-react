import React, {} from "react";

import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import EntryForm from "../components/EntryForm/EntryForm";
import Profile from "../components/Profile/Profile";

const ProfilePage = () => {
  return (
      <section>
      <Profile/>
      </section>
 );
};

export default ProfilePage;
