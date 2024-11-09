import Image from "next/image";
import React from "react";

const Content = () => {
  return (
    <div
      style={{
        backgroundColor: "#FAFAFA",
        padding: "30px 0",
      }}
    >
      <div>
        <h1
          style={{
            color: "#0F298B",
            fontSize: "2.5em",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "8px",
          }}
        >
          How it works.
        </h1>
        <p
          style={{
            color: "#000000",
            fontSize: "1.25em",
            fontWeight: "lighter",
            textAlign: "center",
            marginTop: "0",
          }}
        >
          This is how our products work
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "30px",
          marginTop: "30px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        {[
          {
            src: "/address.png",
            width: 35,
            height: 55,
            title: "Find Home",
            text:
              "Our properties are located at prime areas where there won't be a problem with transportation.",
          },
          {
            src: "/smart.jpg",
            width: 95,
            height: 73,
            title: "Make Payments",
            text:
              "Our estates come with good network, potable water, 24-hour light, and round-the-clock security.",
          },
          {
            src: "/data.png",
            width: 73,
            height: 68,
            title: "Make it Official",
            text:
              "We have been in business for over 32 years. For clients outside the country, you can trust us to deliver well.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              width: "100%",
              maxWidth: "225px",
              padding: "20px",
              backgroundColor: "#FFFFFF",
              textAlign: "center",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              transition: "transform 0.3s ease",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div style={{ marginTop: "20px" }}>
              <Image src={item.src} alt={item.title} width={item.width} height={item.height} />
            </div>
            <h3
              style={{
                fontSize: "1.25em",
                fontWeight: "bold",
                color: "#000000",
                marginTop: "15px",
              }}
            >
              {item.title}
            </h3>
            <p
              style={{
                fontSize: "0.9em",
                color: "#555555",
                marginTop: "8px",
                lineHeight: "1.4",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
