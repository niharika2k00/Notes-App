
import React, { useState } from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import axios from 'axios';



const Popup = ({ type, setEditPopup, singleNote, setNotes, setSingleNote }) => {

    // For Updating the Data
    const [data, setData] = useState(type === 'edit' ? singleNote : {
        name: '',
        description: '',
    });


    const EditNote = async (_id) => {
        const editedData = {
            name: data.name,
            description: data.description,
            _id: data._id
        }
        const res = await axios.put(`http://localhost:4040/api/notes/${_id}`, editedData, {
            headers: {
                contentType: 'application/json'
            }
        });
        console.log(res.data);

        axios.get('http://localhost:4040/api/notes/')   // fetching from the backend
            .then(res => {
                console.log('data', res.data)
                setNotes(res.data)
                setEditPopup(false);
            })

    }


    const AddNote = async () => {
        const editedData = {
            name: data.name,
            description: data.description,
        }
        const res = await axios.post(`http://localhost:4040/api/notes/create`, editedData, {
            headers: {
                contentType: 'application/json'
            }
        });
        console.log(res.data);

        axios.get('http://localhost:4040/api/notes/')   // fetching from the backend
            .then(res => {
                console.log('data', res.data)
                setNotes(res.data)
                setEditPopup(false);
            })
    }





    return (
        <div>
            <div className="pop-up">
                <div className="input-box">
                    <CancelIcon onClick={() => setEditPopup(false)} className="cross-btn" />
                    <h5>Enter the details:</h5>

                    <input type="text"
                        value={data.name}
                        placeholder="Name"
                        onChange={(e) => setData(prevstate => ({
                            ...prevstate,
                            name: e.target.value
                        }))}
                    />

                    <input type="text"
                        value={data.description}
                        placeholder="Note"
                        onChange={(e) => setData(prevstate => ({
                            ...prevstate,
                            description: e.target.value
                        }))}
                    />
                    {type === 'edit' ? <button onClick={() => EditNote(singleNote._id)}>
                        Update Note
                    </button> : <button onClick={() => AddNote()}>
                        Add Note
                    </button>}



                </div>
            </div>
        </div>

    )
}

export default Popup;
