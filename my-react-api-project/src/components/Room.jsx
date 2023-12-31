import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import UpdateRoomForm from "./UpdateRoomForm";
import House from "./House.css"; 

export default function Room(props) {
  const { room, updateRoom, deleteRoom } = props;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditButtonClick = () => {
    setShowEditForm(true);
  };

  const handleChangeRoom = (newName, newArea) => {
    const updatedRoom = { ...room, name: newName, area: newArea };
    updateRoom(updatedRoom);
    setShowEditForm(false);
  };

  return (
    <ListGroup.Item className="border rounded room-item">
      {!showEditForm && (
        <div>
          <Button
            className="btn-sm me-1 pt-0 pb-0 edit-room-button"
            title="Delete Room"
            onClick={() => deleteRoom(room._id)}
          >
            𐌢
          </Button>
          <Button
            className="btn-sm me-3 px-1 py-0 edit-room-button"
            title="Edit Room"
            onClick={handleEditButtonClick}
          >
            Edit Room
          </Button>
          <span className="room-details">
            {room.name} ({room.area} Sq Ft.)
          </span>
        </div>
      )}
      {showEditForm && (
        <UpdateRoomForm
          oldName={room.name}
          oldArea={room.area}
          changeRoom={handleChangeRoom}
        />
      )}
    </ListGroup.Item>
  );
}
