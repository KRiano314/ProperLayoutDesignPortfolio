import React, { useEffect, useRef, useState } from "react";
import PlaceHolderImage from './PlaceHolderImage.avif'; // adjust path here!

export default function SlidingImageReveal() {
  const containerRef = useRef(null);
  const [slideOffset, setSlideOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visible = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);
      const maxSlide = 750; // max slide in pixels
      setSlideOffset(visible * maxSlide);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        height: "400px",
        width: "600px",
        margin: "100vh auto",
        border: "1px solid #ccc",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "#f5f5f5",
          padding: "20px",
          boxSizing: "border-box",
          zIndex: 1,
        }}
      >
        <h2>Info Box</h2>
        <p>This info box is revealed as the image slides away.</p>
      </div>

      <img
        src={PlaceHolderImage}  
        alt="Sliding"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "600px",
          objectFit: "cover",
          transform: `translateX(-${slideOffset}px)`,
          transition: "transform 0.1s linear",
          zIndex: 2,
        }}
      />
    </div>
  );
}
