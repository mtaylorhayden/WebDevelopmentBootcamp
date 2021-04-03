import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return(
    <div>
      <h2>{props.name}</h2>
      <img
        src={props.img}
        alt="avatar_img"
      />
      <p>{props.telephone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Beyonce" img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg" telephone="+123 456 789" email="b@beyonce.com"/>
    <Card name="Jay-Z" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFTGQzae5Puv4OKpck3kQ0dN8qEFePVzkNEQ&usqp=CAU" telephone="+432 521 498" email="j@jayz.com"/>
  </div>,
  document.getElementById("root")
);
