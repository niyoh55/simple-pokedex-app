import React from "react";
import { useLocation, useParams } from "react-router-dom";

const User = () => {
  const params = useParams();
  console.log(params.user_id);

  const location = useLocation();

  console.log(location);

  return (
    <div>
      {/* <h1 className="text-9xl">{params.user_id}</h1> */}
      <h1 className="text-9xl">
        {location.state?.name ? location.state.name : "WALA YUNG NAME LODS"}
      </h1>
      <h1 className="text-9xl">
        {location.state?.age ? location.state.name : "WALA YUNG AGE LODS"}
      </h1>
    </div>
  );
};

export default User;
