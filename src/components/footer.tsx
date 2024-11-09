import React from "react";
import { FaPiggyBank, FaUsers, FaShoppingBag, FaHome } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        color: "black",
        padding: "20px 40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "1200px",
          flexWrap: "wrap",
          gap: "20px",
          padding: "20px 0",
        }}
      >
 
        <div style={{ flex: "1", minWidth: "250px", padding: "10px" }}>
          <h1 style={{ borderBottom: "2px solid blue", paddingBottom: "10px", color:"#0F298B",  fontSize:"25px",fontWeight:"bold"}}>
            ABOUT US
          </h1>
          <p style={{ lineHeight: "1.6" }}>
            Estate Safe Marketing is one of the leading real estate companies in
            Pakistan that provides its exceptional services in Construction also
            in commercial & Residential plots.
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "250px", padding: "10px" }}>
          <h3 style={{ borderBottom: "2px solid blue", paddingBottom: "10px", color:"#0F298B",  fontSize:"25px",fontWeight:"bold" }}>
            OUR SERVICES
          </h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <FaPiggyBank style={{ marginRight: "8px", color: "red" }} /> INVESTMENT PLANNING
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <FaUsers style={{ marginRight: "8px", color: "blue" }} /> CONSULTATION
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <FaShoppingBag style={{ marginRight: "8px", color: "green" }} /> PURCHASING
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <FaHome style={{ marginRight: "8px", color: "purple" }} /> SELLING
            </li>
          </ul>
        </div>

        <div style={{ flex: "1", minWidth: "250px", padding: "10px" }}>
          <h3 style={{ borderBottom: "2px solid blue", paddingBottom: "10px", color:"#0F298B", fontSize:"25px",fontWeight:"bold" }}>
            QUICK LINKS
          </h3>
          <ul style={{ listStyle: "none", padding: "0" }}>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ marginRight: "8px" }}>➤</span> HOME
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ marginRight: "8px" }}>➤</span> ABOUT US
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ marginRight: "8px" }}>➤</span> CAREER
            </li>
            <li style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <span style={{ marginRight: "8px" }}>➤</span> BLOG
            </li>
          </ul>
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            div[style*="flex-direction: column"] {
              padding: 20px;
            }
          }
          @media (max-width: 480px) {
            h1, h3 {
              font-size: 1.2rem;
            }
            p {
              font-size: 0.9rem;
            }
            ul li {
              font-size: 0.9rem;
            }
          }
        `}
      </style>
    </div>
  );
}
