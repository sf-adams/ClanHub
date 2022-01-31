import React from "react";
import Button from "@mui/material/Button";

const FeedItemDeletePopUp = ({ confirmDeletion }) => {
  return (
    <div className="confirm-delete-modal">
      <h3 className="confirm-delete-modal-title">Confirm deletion</h3>
      <p className="confirm-delete-modal-text confirm-delete-modal-button-wrapper">
        Are you sure that you want to delete this item
      </p>
      <div className="confirm-delete-modal-button-wrapper">
        <button
          className="confirm-delete-modal-button"
          onClick={confirmDeletion}
        >
          Yes
        </button>
        <button
          className="confirm-delete-modal-button"
          onClick={confirmDeletion}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default FeedItemDeletePopUp;
