
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#FAFAFA",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            color: "#0F298B",
            fontSize: "2.5rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Our Featured Properties
        </h1>
        <p
          style={{
            color: "#000000",
            fontSize: "1.2rem",
            fontWeight: "lighter",
            textAlign: "center",
            marginTop: "-10px",
          }}
        >
          One of our biggest products to be featured and that has sold out the most.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "20px",
          paddingRight: "10px",
        }}
      >
        <button
          style={{
            width: "100px",
            height: "40px",
            backgroundColor: "#2549D3",
            padding: "8px",
            borderRadius: "15px",
            border: "none",
          }}
        >
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            View more
          </Link>
        </button>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px',
          padding: '20px',
        }}
      >
        {["Rectangle 4.png", "Rectangle 3.png", "Rectangle 2.png"].map((image, index) => (
          <div
            key={index}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              width: '100%',
              maxWidth: '250px',
              padding: '10px',
              textAlign: 'center',
            }}
          >
            <Image
              src={`/${image}`}
              alt={`Property ${index + 1}`}
              width={230}
              height={150}
              style={{ borderRadius: '12px' }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "10px",
              }}
            >
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Property {index + 1}</h3>
              <p style={{ fontSize: '0.9rem', color: 'gray' }}>Duplex</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "5px",
              }}
            >
              <p style={{ color: 'gray', fontSize: '0.9rem' }}>Lekki, phase 2</p>
              <p style={{ color: '#007bff', fontWeight: 'bold', fontSize: '1rem' }}>$2,000</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "50px", textAlign: "center" }}>
        <h1
          style={{
            color: "#0F298B",
            fontSize: "2.5rem",
            fontWeight: "bold",
          }}
        >
          Testimonials
        </h1>
        <p
          style={{
            color: "#000000",
            fontSize: "1.2rem",
            fontWeight: "lighter",
            marginTop: "-10px",
          }}
        >
          This is what our clients are saying
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                maxWidth: '200px',
                padding: '16px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                backgroundColor: '#fff',
                textAlign: 'center',
              }}
            >
              <h2 style={{ fontSize: '1rem', fontWeight: 'bold', margin: 0 }}>Alex Godwin</h2>
              <p style={{ fontSize: '0.9rem', color: '#666', margin: '4px 0 8px' }}>South Africa</p>
              <p style={{ fontSize: '0.8rem', color: '#333', lineHeight: '1.5' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
