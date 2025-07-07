import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = 100; // Số lượng sao
      const newStars = [];

      for (let i = 0; i < numberOfStars; i++) {
        const animationName = Math.random() < 0.3 ? "twinkle" : "pulse-subtle";
        const animationDuration =
          animationName === "twinkle"
            ? Math.random() * 2 + 1
            : Math.random() * 3 + 2;
        newStars.push({
          id: i,
          size: Math.random() * 4, // Kích thước từ 1-5px
          x: Math.random() * 100,
          y: Math.random() * 100,
          animationName,
          animationDuration,
        });
      }

      setStars(newStars);
    };

    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            animation: `${star.animationName} ${star.animationDuration}s infinite`,
          }}
        />
      ))}
    </div>
  );
};
