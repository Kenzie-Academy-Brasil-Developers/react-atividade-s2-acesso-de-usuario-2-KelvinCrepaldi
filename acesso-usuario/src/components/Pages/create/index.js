import { useState } from "react";
import "./style.css";

const Create = ({ members, setListMembers }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const HandleClick = () => {
    const line = {
      id: `${members.length + 1}`,
      name: name,
      type: type,
    };
    setListMembers([...members, line]);
    console.log(line);
  };

  return (
    <div className="container-add">
      <label>Name: </label>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <label>Type: </label>
      <input value={type} onChange={(e) => setType(e.target.value)}></input>
      <button onClick={HandleClick}>Add</button>
    </div>
  );
};
export default Create;
