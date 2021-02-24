import React from "react";

function ContactDetails(props) {
  return (
    <div>
      <img src={props.picture} width= "100px"/> {props.name} {props.popularity}
      <button
        onClick={() => { props.onDelete(props.id);}}>
        Delete
      </button>
    </div>
  );
}

export default ContactDetails
