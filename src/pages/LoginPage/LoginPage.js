import React,{useState} from 'react'
import Login from '../../components/Login/Login'


 export default function LoginPage() {
   const elevatedBoxStyle = {
     padding: "10px 400px 10px 400px",
     borderRadius: "10px",
     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
     border: "1px solid #ccc", // Border color
     maxWidth: "1000px", // Set the maximum width to 1000px
     margin: "auto", // Center the box horizontally
     display: "flex",
     flexDirection: "column",
     alignItems: "center",
     justifyContent: "center",
     height: "60vh", // Adjust the height as needed
     position: "absolute", // Position the box absolutely
     top: "50%", // Align the top of the box to the middle of the viewport
     left: "50%", // Align the left side of the box to the middle of the viewport
     transform: "translate(-50%, -50%)", // Center the box both horizontally and vertically
   };

  return (

    <div style={elevatedBoxStyle}>
     
      <Login />

    </div>
  );
}
