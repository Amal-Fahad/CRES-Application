import React from "react";
import { useState } from "react";
import { useRef } from "react";

import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import "react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css";

import { useSelector, useDispatch } from "react-redux";
import { ADD_DATA } from "../Redux/DetailsSlice";

const DataList = ({ LogOut }) => {
  const { userData } = useSelector((state) => state.UserDetails);

  const dispatch = useDispatch();

  const columns = [
    {
      dataField: "name",
      text: "Name",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "age",
      text: "Age",
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: "place",
      text: "Place",
    },
    {
      dataField: "email",
      text: "Email",
    },
    {
      dataField: "address",
      text: "Address",
    },
  ];

  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    place: "",
    email: "",
    address: "",
  });

  const nameRef = useRef()
  const ageRef = useRef()
  const placeRef = useRef()
  const emailRef = useRef()
  const addressRef = useRef()

  const changeHandle = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const clickHandler = () => {
    if (
      inputData.name == "" ||
      inputData.age == "" ||
      inputData.place == "" ||
      inputData.email == "" ||
      inputData.address == ""
    ) {
      alert("please fill all datas");
    } else {
      dispatch(ADD_DATA(inputData))
    }
  };

  return (
    <div className="datalist">
      <BootstrapTable
        bootstrap4
        keyField="index"
        columns={columns}
        data={userData}
        filter={filterFactory()}
      />

      <div className="inputField">
        <input
          className="addField"
          placeholder="Enter your name"
          type="text"
          autoComplete="on"
          name="name"
          value={inputData.name}
          onChange={changeHandle}
          ref={nameRef}
          required
        />
        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your age"
          type="number"
          name="age"
          value={inputData.age}
          onChange={changeHandle}
          ref={ageRef}
          required
        />
        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your place"
          type="text"
          name="place"
          value={inputData.place}
          onChange={changeHandle}
          ref={placeRef}
          required
        />
        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your email"
          type="text"
          name="email"
          value={inputData.email}
          onChange={changeHandle}
          ref={emailRef}
          required
        />
        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your address"
          type="text"
          name="address"
          value={inputData.address}
          onChange={changeHandle}
          ref={addressRef}
          required
        />
        <br />
        <br />
        <button onClick={clickHandler} className="addbtn">
          add
        </button>
      </div>

      <button className="logOut" onClick={LogOut}>
        LogOut
      </button>
    </div>
  );
};

export default DataList;
