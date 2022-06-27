import React, { useEffect, useState } from "react";
import AddNotes_Icon from "@material-ui/icons/AddCircleOutline";
import Popup from "./Popup.jsx";

const AddNewCard = ({ setNotes }) => {
  const [addpopup, setAddPopup] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {addpopup && (
        <Popup type="add" setEditPopup={setAddPopup} /* true paasss */ singleNote={null} setNotes={setNotes} />
      )}

      <div className="addcards" onClick={() => setAddPopup(true)}>
        <AddNotes_Icon />
      </div>
    </div>
  );
};

export default AddNewCard;
