"use client";
import React, { useEffect, useState } from 'react';
import './Fireworks.css';

const Fireworks = () => {
  const [fireworks, setFireworks] = useState([]);

  // Hàm để sinh pháo hoa ngẫu nhiên ở vị trí ngẫu nhiên trên màn hình
  const generateFirework = () => {
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    setFireworks((prevFireworks) => [
      ...prevFireworks,
      { x, y, id: Math.random().toString(36).substr(2, 9) },
    ]);
  };

  useEffect(() => {
    // Tạo hiệu ứng pháo hoa tự động mỗi 800ms
    const interval = setInterval(generateFirework, 800);

    // Cleanup interval khi component bị unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fireworks-container">
      {fireworks.map((firework) => (
        <div
          key={firework.id}
          className="firework"
          style={{ top: firework.y, left: firework.x }}
          onAnimationEnd={() =>
            setFireworks((prevFireworks) =>
              prevFireworks.filter((fw) => fw.id !== firework.id)
            )
          }
        >
          {createFireworkLogic()}
          </div>
      ))}
    </div>
  );
};
const createFireworkLogic = () => {
  const sparks = Array.from({ length: 9 }); // Giả sử mỗi pháo hoa có 20 tia sáng
  return sparks.map((_, index) => (
    <div
      key={index}
      className="spark"
      style={{
        animationDelay: `${Math.random() * 0.5}s`,
        transform: `rotate(${(index / 9) * 360}deg) translateY(50px)`,
      }}
    >
      🌸
    </div>
  ));
};



export default Fireworks;
