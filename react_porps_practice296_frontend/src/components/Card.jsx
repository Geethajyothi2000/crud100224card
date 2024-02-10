import React from "react";
import DeleteContact from "./delete"
import { useState } from "react";
import UpdateContact from "./updateContacts";

function Card(propsCard){
  const [show, setShow] = useState(false);

  function Delete(){
    DeleteContact(propsCard.id)
  }
 
    return(
    <div className="card">
    <div className="top">
      <h2 className="name">{propsCard.name}</h2>
      <img 
        className="circle-img"
        src= {propsCard.img}
        alt="avatar_img"
      />
    </div>
    <div className="bottom">
      <p className="info">{propsCard.tel}</p>
      <p className="info">{propsCard.email}</p>
    </div>
    <Box status={show} data={propsCard}/>
    
 <button onClick={Delete}>delete</button>
 
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"} component
      </button>
  </div>
  );
}

function Box(props) {
  console.log(props.data)
  return (
    <div
      style={{ visibility: props.status ? "visible" : "hidden" }}
      className="box"
    >
    {UpdateContact(props.data)}
    </div>
  );
}

export default Card;