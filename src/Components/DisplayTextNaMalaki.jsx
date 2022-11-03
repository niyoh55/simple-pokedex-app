import React from "react";

const DisplayTextNaMalaki = (props) => {
  const { title, etoYungFunctionGamitinMo, onChange, value } = props;
  return (
    <div>
      <h1 className="text-3xl">{title}</h1>

      <input
        type="text"
        placeholder="Type your name"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => onChange(e)}
        //value={value}
      />

      <button onClick={() => etoYungFunctionGamitinMo("Si Rosuello ay ...")}>
        Console Mo To
      </button>
    </div>
  );
};

export default DisplayTextNaMalaki;
