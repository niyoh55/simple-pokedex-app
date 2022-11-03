import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const Try = () => {
  const apiCall = () => {
    return fetch(
      "https://fir-proj-wews-default-rtdb.asia-southeast1.firebasedatabase.app/niyoh.json"
    )
      .then((result) => result.json())
      .then((data) => {
        return data;
      });
  };

  useEffect(() => {
    apiCall().then((kwek) => console.log(kwek));
  });
  return (
    <div className="w-screen h-screen bg-white ">
      <p className="text-2xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
        PWET PWET PWET PWET PWET PWET
      </p>
    </div>
  );
};

export default Try;
