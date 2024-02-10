import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function UpdateContact(data) {
  const [name, setName] = useState(data.name);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.tel);
  const [img, setImg] = useState(data.img);
  const [id, setId] = useState(data.id);
  // console.log(name);
  // console.log(email);
  // console.log(phone);
  // console.log(img);

  function submitForm() {
    //     console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(img);
    axios
      .post("http://localhost:3001/add_contacts", { name, email, phone, img })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <form className="AddContact" onSubmit={submitForm}>
      <input
        type="text"
        value={data.name}
        
        onChange={(e) => setName(e.target.value)}
        required
        contentEditable="true"
      />
      <input
        type="email"
        value={data.email}
        required
      />
      <input
        type="number"
        value={data.tel}
        
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <input
        type="text"
        value={data.img}
        onChange={(e) => setImg(e.target.value)}
        required
      />
      <button>submit</button>
    </form>
  );
}
export default UpdateContact;
