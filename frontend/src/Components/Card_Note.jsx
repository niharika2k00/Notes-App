import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "react-bootstrap";
import Edit_Icon from "@material-ui/icons/Create";
import Delete_Icon from "@material-ui/icons/Delete";
import "../Styles/card.css";
import Popup from "./Popup.jsx";
import axios from "axios";

const Card_Note = (props) => {
  const { note, setNotes } = props;
  const { name, description, dateAdded, color } = note;

  const [editpopup, setEditPopup] = useState(false); // STATE Popup
  // const [singleNote, setSingleNote] = useState(note);   // STATE where Single Note Obj is passed

  console.log(name);

  const deleteHandler = async (id) => {
    console.log("deleted");
    const res = await axios.delete(`http://localhost:4040/api/notes/${id}`);
    console.log(res.data);

    // fetching from the backend
    axios.get("http://localhost:4040/api/notes/").then((res) => {
      console.log("data", res.data);
      setNotes(res.data);
    });
  };

  const date = new Date();
  const addingDate = `${date.getDate()} ${date.toLocaleString("default", { month: "short" })}, ${date.getFullYear()}`;

  return (
    <div>
      {/* <section className="Button">
                <a className="Button-btn" href="/home"> Back </a>
            </section> */}

      {editpopup && (
        <Popup type="edit" setEditPopup={setEditPopup} /* true paasss */ singleNote={note} setNotes={setNotes} />
      )}

      <Card style={{ width: "100%", borderRadius: "2rem" }} className="my-4 p-2 rounded" id="card_css">
        <Card.Body style={{ padding: "10px" }}>
          <Card.Title className="card-title" style={{ padding: "4px", textAlign: "center", alignItems: "center" }}>
            {" "}
            {name}{" "}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Date Added : {addingDate} </Card.Subtitle>
          <Card.Text className="desc">{description}</Card.Text>

          {/* Used flex */}
          <div class="d-flex justify-content-around " id="self_btn">
            <div style={{ backgroundColor: "#2ec4b6" }} onClick={() => setEditPopup(true)}>
              <Edit_Icon />
            </div>
            <div style={{ backgroundColor: "#e63946" }} onClick={() => deleteHandler(note._id)}>
              <Delete_Icon />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Card_Note;
