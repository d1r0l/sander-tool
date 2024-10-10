import React from "react";
import InputProfile from "./reusable/InputProfile";

const Hero = ({username, setUsername, fetchUserData}) => {
  return (
    <div className="text-center w-full flex items-center flex-col  py-12">
      <h1 className="head-text capitalize font-">Get profile Data</h1>
      <InputProfile username={username} fetchUserData={fetchUserData} setUsername={setUsername} />
    </div>
  );
};

export default Hero;
