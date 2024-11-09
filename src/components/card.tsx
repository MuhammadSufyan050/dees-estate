import Link from 'next/link';
import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Card = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "70vh",
      position: "relative",
      padding: "20px",
      width: "100%"
    }}>
      <div style={{
        fontSize: "14px",
        width: "90%",
        maxWidth: "800px",
        minHeight: "100px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        borderRadius: "8px",
        flexDirection: "column",
        padding: "10px 0"
      }}>
        <div style={{
          display: "flex",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "700px",
          flexWrap: "wrap",
          gap: "20px",
          color: "#0F298B"
        }}>
          <div style={{ flex: "1 1 100px", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <span style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#0F298B",
                marginRight: "5px"
              }}>
                Location
              </span>
              <FaAngleDown size={16} />
            </div>
            <select defaultValue="" style={{
              marginTop: "5px",
              fontSize: "14px",
              fontWeight: "normal",
              background: "none",
              border: "none",
              color: "#000000",
              padding: "4px",
              width: "100px",
              appearance: "none",
              outline: "none",
            }}>
              <option>Karachi</option>
              <option>Lahore</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
            </select>
          </div>

          <div style={{ flex: "1 1 100px", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <span style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#0F298B",
                marginRight: "5px"
              }}>
                Property Type
              </span>
              <FaAngleDown size={16} />
            </div>
            <select defaultValue="" style={{
              marginTop: "5px",
              fontSize: "14px",
              fontWeight: "normal",
              background: "none",
              border: "none",
              color: "#000000",
              padding: "4px",
              width: "100px",
              appearance: "none",
              outline: "none"
            }}>
              <option>Apartment</option>
              <option>House</option>
              <option>Office</option>
            </select>
          </div>

          <div style={{ flex: "1 1 100px", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
              <span style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#0F298B",
                marginRight: "5px"
              }}>
                Max Price
              </span>
              <FaAngleDown size={16} />
            </div>
            <select defaultValue="" style={{
              marginTop: "5px",
              fontSize: "14px",
              fontWeight: "normal",
              background: "none",
              border: "none",
              color: "#000000",
              padding: "4px",
              width: "100px",
              appearance: "none",
              outline: "none"
            }}>
              <option>50,000</option>
              <option>100,000</option>
              <option>200,000</option>
              <option>500,000</option>
            </select>
          </div>
        </div>

        <button style={{
          width: "94px",
          height: "35px",
          backgroundColor: "#2549D3",
          padding: "6px",
          borderRadius: "8px",
          border: "none",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "15px",
          justifyContent: "center"
        }}>
          <Link href="/" style={{ textDecoration: "none", color: "white", display: "flex", alignItems: "center", fontSize: "15px" }}>
            <CiSearch size={20} /> Search
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Card;
