import React, { useState } from "react";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import BungalowOutlinedIcon from "@mui/icons-material/BungalowOutlined";
import VrpanoOutlinedIcon from "@mui/icons-material/VrpanoOutlined";
import OutdoorGrillOutlinedIcon from "@mui/icons-material/OutdoorGrillOutlined";
import SurfingOutlinedIcon from "@mui/icons-material/SurfingOutlined";
import CastleOutlinedIcon from "@mui/icons-material/CastleOutlined";
// import Cards from "../Card/Card";
// import { home1 } from "../../assets";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`fixed h-full w-20 bg-slate-100 flex flex-col transition-all duration-300 ${
        isHovered ? "w-60" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="my-4 h-8 flex items-center cursor-pointer hover:bg-slate-200">
        <div className="w-8 h-8 ml-2 bg-slate-100 rounded-full items-center">
          <HouseOutlinedIcon />
        </div>
        {isHovered && <span className="text-black ml-2">All Homes</span>}
      </div>
      <div className="my-4 h-8 flex items-center cursor-pointer hover:bg-slate-200">
        <div className="w-8 h-8 ml-2 bg-slate-100 rounded-full">
          <VrpanoOutlinedIcon />
        </div>
        {isHovered && <span className="text-black ml-2">Amazing Views</span>}
      </div>
      <div className="my-4 h-8 flex items-center cursor-pointer hover:bg-slate-200">
        <div className="w-8 h-8 ml-2 bg-slate-100 rounded-full">
          <BungalowOutlinedIcon />
        </div>
        {isHovered && <span className="text-black ml-2">Tiny Homes</span>}
      </div>
      <div className="my-4 h-8 flex items-center cursor-pointer hover:bg-slate-200">
        <div className="w-8 h-8 ml-2 bg-slate-100 rounded-full">
          <OutdoorGrillOutlinedIcon />
        </div>
        {isHovered && <span className="text-black ml-2">Chef's Kitchen</span>}
      </div>
      <div className="my-4 h-8 flex items-center cursor-pointer hover:bg-slate-200">
        <div className="w-8 h-8 ml-2 bg-slate-100 rounded-full">
          <SurfingOutlinedIcon />
        </div>
        {isHovered && <span className="text-black ml-2">Surfing</span>}
      </div>
      <div className="my-4 h-8 flex items-center cursor-pointer hover:bg-slate-200">
        <div className="w-8 h-8 ml-2 bg-slate-100 rounded-full">
          <CastleOutlinedIcon />
        </div>
        {isHovered && <span className="text-black ml-2">Mansions</span>}
      </div>
      {/* extraa divs */}
    </div>
  );
};

export default Sidebar;

//With CSS only
// import React, { useState } from "react";
// import "./Sidebar.css"; // Import the CSS file for styling
// import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

// const Sidebar = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className={`sidebar ${isHovered ? "hovered" : ""}`}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className="logo">
//         <HouseOutlinedIcon />
//         <span className="sideText">
//           {isHovered && (
//             <span>
//               {" "}
//               <b>Text1</b>
//             </span>
//           )}
//         </span>
//       </div>
//       <div className="logo">
//         <HouseOutlinedIcon />
//         <span className="sideText">
//           {isHovered && (
//             <span>
//               {" "}
//               <b>Text2</b>
//             </span>
//           )}
//         </span>
//       </div>
//       <div className="logo">
//         <HouseOutlinedIcon />
//         <span className="sideText">
//           {isHovered && (
//             <span>
//               {" "}
//               <b>Text3</b>
//             </span>
//           )}
//         </span>
//       </div>
//       <div className="logo">
//         <HouseOutlinedIcon />
//         <span className="sideText">
//           {isHovered && (
//             <span>
//               {" "}
//               <b>Text4</b>
//             </span>
//           )}
//         </span>
//       </div>
//       <div className="logo">
//         <HouseOutlinedIcon />
//         <span className="sideText">
//           {isHovered && (
//             <span>
//               {" "}
//               <b>Text5</b>
//             </span>
//           )}
//         </span>
//       </div>

//       {/* <div className="logo">Logo 2</div>
//       <div className="logo">Logo 3</div>
//       <div className="logo">Logo 4</div>
//       <div className="logo">Logo 5</div>
//       <div className="logo">Logo 6</div> */}
//       {/* Add more logos as needed */}
//     </div>
//   );
// };

// export default Sidebar;

//Try Code
// import React, { useState } from "react";
// import "./Sidebar.css"; // Import the CSS file for styling
// import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
// // import { ReactComponent as MyIcon } from "../../assets/airbnb-svgrepo-com.svg";

// const Sidebar = () => {
//   // const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="body">
//       <div className="sidebar">
//         <ul>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               {/* <MyIcon className="homeIcon" /> */}
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">All Homes</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Amazing Views</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Tiny Homes</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">All Homes</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Chef's Kitchen</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Surfing</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Mansions</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">All Homes</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Luxe</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Treehouses</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Camping</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">All Homes</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Beachfront</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Farms</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">Farms</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">All Homes</span>
//           </li>
//           <li>
//             <a href="#" />
//             <span className="icon">
//               <HouseOutlinedIcon />
//             </span>
//             <span className="text">All Homes</span>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
