// src/Sidebar.js
import React,{useState} from 'react';
import './sidebar.css';
import { useNavigate } from "react-router-dom";
import Modal from '../shared/inputTabs/modal/Modal';




function Sidebar({ s , c}) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(s);
 
   

  const handleListSelect = (item) => {
    setSelected(item)

    // switch (item) {
    //   case item === "D":
    //     navigate('/dashboard');
    //     break;
    //   case item === "A":
    //     navigate('/Analytics');
    //     break;
    //   default:
    //     navigate('/dashboard');
    // }

    if (item === "D") {
      navigate("/dashboard")
    }
    else if (item === "A") {
      navigate("/Analytics")
    }
    else if (item === "Q") {
      c(true)
    }
    
  }
  return (

    <div className="sidebar">
     <header>
        <h1>QUIZZIE</h1>
      </header>
      <nav>
        <ul>
          <li
            className = {selected === "D" ? "active" : ""}
            onClick = {() => handleListSelect("D")}
          >
            Dashboard
          </li>
          <li
            className= {selected === "A" ? "active" : ""}
            onClick={() => handleListSelect("A")}
          >
            Analytics
          </li>
          <li
            className= {selected === "Q" ? "active" : ""}
            onClick={() => handleListSelect("Q")}
          >
            Create Quiz
          </li>
        </ul>
          </nav>
          <footer>
        <button
          className="logout"
        onClick={()=>navigate("/login")}>LOGOUT</button>
      </footer>
    </div>
    
  );
}

export default Sidebar;
