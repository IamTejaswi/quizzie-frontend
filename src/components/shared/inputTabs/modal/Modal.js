// import React from "react";
// import './modal.css'
 
// // const Modal = ({ isOpen, onClose, children }) => {
// //     if (!isOpen) return null;
 
// //     return (
// //         <div
// //             onClick={onClose}
// //             className= "modal-background"
// //         >
// //             <div
// //                 className = "modal"
// //             >
// //                 {children}
// //             </div>
// //         </div>
// //     );
// // };
 
// // export default Modal;




// const Modal = ({ setIsOpen , children}) => {
//   return (
//     <>
//       <div className= "darkBG" onClick={() => setIsOpen(false)} />
//       <div className= "centered">
//         {children}
//       </div>
//     </>
//   );
// };

// export default Modal;

import React from "react";
import "./modal.css";
// import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen , children}) => {
  return (
    <>
      <div className = "darkBG" onClick={() => setIsOpen(false)} />
      <div className = "centered">
        <div className = "modal">
            {children}
        </div>
      </div>
    </>
  );
};

export default Modal;