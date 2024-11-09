'use client'
import Image from 'next/image';
import React from 'react';
import { IoMdCheckboxOutline } from "react-icons/io";

const Why_Us = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: "#FAFAFA",
      padding: '20px',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '5vh',
          marginRight: '20px',
          flex: '1'
        }}
      >
        <Image src="/Rectangle.png" alt="Why Choose Us Image" width={366} height={265} />
      </div>

      <div
        style={{
          textAlign: 'left',
          maxWidth: '600px',
          flex: '1',
        }}
      >
        <h1 style={{ color: '#0F298B', fontSize: '3.5vw', margin: '10px 0' }}>Why you should choose us.</h1>
        <p style={{ fontSize: '1.7vw', color: '#333', lineHeight: '1.5' }}>
          Creating quality urban lifestyles, building stronger communities
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '15px',
            marginTop: '20px',
          }}
        >
          {['World class', 'Affordable', 'Trusted', 'Amenities'].map((text, index) => (
            <div 
              key={index} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                width: 'calc(50% - 10px)',
                fontSize: '1vw',
              }}
            >
              <IoMdCheckboxOutline style={{ color: '#2549D3', fontSize: '1.5vw', marginRight: '8px' }} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="display: flex;"] {
            flex-direction: column; /* Stack image and text on small screens */
          }
          h1 {
            font-size: 4vw;
          }
          p {
            font-size: 3vw;
          }
        }
      `}</style>
    </div>
  );
};

export default Why_Us;
