'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "20px",
      position: "relative",
      top: "8vh",
      gap: "20px"
    }}>
      <div style={{
        textAlign: "left",
        marginBottom: "0",
        width: "50%"
      }}>
        <h1 style={{
          color: "#0F298B",
          fontSize: "3vw",
          fontWeight: "bold",
          lineHeight: "1.2",
          margin: "0 0 10px 0"
        }}>
          Helping you find the <br /> property of your <br /> dreams.
        </h1>
        <p style={{
          color: "#000000",
          fontSize: "1.5vw",
          fontWeight: "300",
          margin: "0"
        }}>
          Creating quality urban lifestyles, building <br /> stronger communities
        </p>
        <div style={{
          display: "flex",
          alignItems: "center",
          marginTop: "20px",
          justifyContent: "flex-start"
        }}>
          <button style={{
            width: "130px",
            height: "45px",
            backgroundColor: "#2549D3",
            padding: "10px 15px",
            borderRadius: "8px",
            border: "none",
            marginRight: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer"
          }}>
            <Link href="/" style={{
              textDecoration: "none",
              color: "white",
              fontSize: "calc(0.9rem + 0.3vw)"
            }}>Learn More</Link>
          </button>
          <FaPlayCircle style={{
            fontSize: "calc(2rem + 1vw)",
            color: "#0F298B",
            cursor: "pointer"
          }} />
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: "center",
        width: "50%"
      }}>
        <Image src="/main.png" alt="Main Image" width={500} height={400} style={{
          maxWidth: "90%",
          height: "auto",
          borderRadius: "8px"
        }} />
      </div>
    </div>
  )
}

export default Hero;
