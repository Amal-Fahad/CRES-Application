import { useState } from "react";
import { nanoid } from "nanoid";

import { useSelector, useDispatch } from "react-redux";
import { ADD_DATA, DELETE_DATA } from "../Redux/DetailsSlice";


const DataList = ({ LogOut }) => {
  const { data } = useSelector((state) => state.UserDetails);
  const dispatch = useDispatch();

  const [value,setValue] = useState("")
  const [dataSource,setDataSource] = useState(data);
  const [tableFilter,setTableFilter] = useState([])

  const filterData = (e)=>{
    if(e.target.value !=""){
      setValue(e.target.value);
     const filterTable = dataSource.filter(o=>Object.keys(o).some(k=>
      String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
      ));
      setTableFilter([...filterTable])
     }else{
      setValue(e.target.value);
      setDataSource([...dataSource])
     }
  }

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
      <div>
        <input type="text" className="form-control" placeholder="Search" area-aria-label="username" area-aria-describedby="basic-addon1" value={value} onChange={filterData}/>
      </div>
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
          {
            value.length >0? tableFilter.map((item,index)=>{
              return (
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
              )
            }):
            dataSource.map((item,index)=>{
              return(
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
              )
            })
          }
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
