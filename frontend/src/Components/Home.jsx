import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
// import { LinkContainer } from 'react-router-bootstrap';
import "../Styles/home.css";
import CARD from "./Card_Note.jsx";
import AddNewCard from "./AddNewCard.jsx";

const Home = () => {
  /* const notes = [
          {
              name: "Niharika",
              dateAdded: "20th April",
              description: "do homework",
              color: "pink"
          }
      ] */

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    console.log("useEffect running");

    axios
      .get("http://localhost:4040/api/notes/") // fetching all Data from the database-backend
      .then((res) => {
        console.log("data", res.data);
        setNotes(res.data);
      });
  }, []);

  console.log(notes);

  return (
    // <Container>
    <div className="container_self">
      <div>
        <h1 id="heading">Flash Notes</h1>
        <Row>
          {/* eachNote ---->   Each note OBJECT */}
          {notes.length > 0 &&
            notes.map((eachNote) => (
              <Col sm={12} md={4} lg={4} xl={3}>
                <CARD key={eachNote._id} note={eachNote} setNotes={setNotes} />
              </Col>
            ))}

          <AddNewCard setNotes={setNotes} />
        </Row>
      </div>
    </div>
    // </Container>
  );
};

export default Home;
