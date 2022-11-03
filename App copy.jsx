import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import DisplayTextNaMalaki from "./Components/DisplayTextNaMalaki";
import TextInput from "./Components/TextInput";

const App = () => {
  const [data, setData] = useState([]);
  const [nameInput, setNameInput] = useState("");
  const [ageInput, setAgeInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [isEdit, setEdit] = useState(false);
  const [currItem, setCurrItem] = useState("");

  const navigate = useNavigate();

  const navToBlah = () => {
    navigate("/about");
  };

  //GET PUT POST DELETE
  const postData = async () => {
    //axios.post(url,{})

    const res = await axios.post(
      "https://fir-proj-wews-default-rtdb.asia-southeast1.firebasedatabase.app/niyoh.json",
      {
        name: nameInput,
        age: ageInput,
        address: addressInput,
      }
    );

    setNameInput("");
    setAgeInput("");
    setAddressInput("");
  };

  const updateData = async () => {
    const res = await axios.put(
      `https://fir-proj-wews-default-rtdb.asia-southeast1.firebasedatabase.app/niyoh/${currItem}.json`,
      {
        name: nameInput,
        age: ageInput,
        address: addressInput,
      }
    );

    setNameInput("");
    setAgeInput("");
    setAddressInput("");
    setEdit(false);
    setCurrItem("");
  };

  const deleteData = async () => {
    const res = await axios.delete(
      "https://fir-proj-wews-default-rtdb.asia-southeast1.firebasedatabase.app/niyoh/-NBSXVhTJMrdch4kKPQv.json"
    );
  };

  const getData = async () => {
    const res = await axios.get(
      "https://fir-proj-wews-default-rtdb.asia-southeast1.firebasedatabase.app/niyoh.json"
    );
    const dataHolder = [];

    for (const x in res.data) {
      dataHolder.push({ ...res.data[x], id: x });
    }

    setData(dataHolder);
  };

  useEffect(() => {
    getData();
  }, []);

  const nameInputHandler = (e) => {
    console.log(e);
  };

  const functionNaIpapasaKo = (ipapasaDito) => {
    console.log(ipapasaDito);
  };

  const visitMoTo = (info) => {
    navigate(`/users/${info.id}`, {
      state: info,
    });
  };

  const updateItemHandler = (data) => {
    if (data.id == currItem) {
      setEdit(false);
      setNameInput("");
      setAgeInput("");
      setAddressInput("");
      setCurrItem("");
    } else {
      setEdit(true);
      setNameInput(data.name);
      setAddressInput(data.address);
      setAgeInput(data.age);
      setCurrItem(data.id);
    }
  };

  return (
    <div className="h-screen w-full bg-pink-200 px-10 py-10 flex flex-col gap-y-5 justify-start items-start">
      <div className="grid grid-cols-4 gap-x-10">
        {data.map((info) => (
          <div className="bg-red-400 px-4 py-10 text-lg">
            <h1>{info.name}</h1>
            <h2>{info.age}</h2>
            <h3>{info.address}</h3>

            <button
              className="px-5 bg-blue-400 py-10"
              onClick={() => visitMoTo(info)}
            >
              VISIT
            </button>
            <button
              className="px-5 bg-purple-400 py-10"
              onClick={() => updateItemHandler(info)}
            >
              EDIT
            </button>
          </div>
        ))}
      </div>

      {/* title, placeholder, onChange, value */}

      <p>Name</p>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setNameInput(e.target.value)}
        value={nameInput}
      />

      <p>Age</p>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setAgeInput(e.target.value)}
        value={ageInput}
      />

      <p>Address</p>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        onChange={(e) => setAddressInput(e.target.value)}
        value={addressInput}
      />

      <button className="btn btn-xl" onClick={isEdit ? updateData : postData}>
        {isEdit ? "Submit Edit" : "Submit"}
      </button>

      <button onClick={navToBlah}>WEWS</button>
    </div>
  );
};

export default App;
