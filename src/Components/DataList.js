import { useState } from "react";
import { nanoid } from "nanoid";

import { useSelector, useDispatch } from "react-redux";
import { ADD_DATA, DELETE_DATA } from "../Redux/DetailsSlice";

const DataList = ({ LogOut }) => {
  const { data } = useSelector((state) => state.UserDetails);
  const dispatch = useDispatch();

  const [inputData, setInputData] = useState({
    name: "",
    age: "",
    place: "",
    email: "",
    address: "",
  });

  const handleAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...inputData };
    newFormData[fieldName] = fieldValue;
    setInputData(newFormData);
  };

  const handleAddFormSubmit = (e) => {
    e.preventDefault();
    const newData = {
      id: nanoid(),
      name: inputData.name,
      age: inputData.age,
      place: inputData.place,
      email: inputData.email,
      address: inputData.address,
    };
    dispatch(ADD_DATA(newData));
  };

  const handleDeleteClick = (_id) => {
    const newData = [...data];
    const index = data.findIndex((item) => item.id === _id);
    newData.splice(index, 1);
    dispatch(DELETE_DATA(newData));
  };

  return (
    <div className="datalist">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Place</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.place}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <button
                className="deletebtn"
                onClick={() => handleDeleteClick(item.id)}
              >
                delete
              </button>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Add a Details</h2>
      <form onSubmit={handleAddFormSubmit} className="formSubmit">
        <input
          className="addField"
          placeholder="Enter your name"
          type="text"
          autoComplete="on"
          name="name"
          onChange={handleAddFormChange}
          required="required"
        />

        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your age"
          type="number"
          name="age"
          onChange={handleAddFormChange}
          required="required"
        />

        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your place"
          type="text"
          name="place"
          onChange={handleAddFormChange}
          required="required"
        />
        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your email"
          type="text"
          name="email"
          onChange={handleAddFormChange}
          required="required"
        />
        <br />
        <br />
        <input
          className="addField"
          placeholder="Enter your address"
          type="text"
          name="address"
          onChange={handleAddFormChange}
          required="required"
        />
        <br />
        <br />
        <button className="addbtn">Add</button>
      </form>
      <button className="logOut" onClick={LogOut}>
        LogOut
      </button>
    </div>
  );
};

export default DataList;
