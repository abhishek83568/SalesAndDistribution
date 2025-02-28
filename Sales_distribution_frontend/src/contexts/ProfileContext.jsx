// src/context/ProfileContext.js
import { createContext, useState } from "react";

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({
    userName: "Abhishek Kumar Ray",
    email: "abhishek.ray@galvinus.in",
    number: "123-456-7890",
    profilePicture: null,
  });

  const updateProfile = (updatedProfile) => {
    setProfile(updatedProfile);
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileProvider;
