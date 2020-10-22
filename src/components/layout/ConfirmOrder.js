import React from 'react'
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export default function ConfirmOrder() {
    function handleSubmit() {
      confirmAlert({
        title: "Confirm to submit",
        message: "Are you sure you want to confirm the order.",
        buttons: [
          {
            label: "Yes",
            onClick: () => {
              alert("order confirmed");
            }
          },
          {
            label: "No",
            onClick: () => alert("sorry to see you go")
          }
        ]
      });
    }
   
    return (
      <div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          {" "}
          Confirm Order{" "}
        </button>
      </div>
    );
  }
