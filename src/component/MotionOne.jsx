import React from "react";



import * as motion from "motion/react-client";
import { useEffect, useState } from "react";

const MotionOne = () => {
  const initialOrder = ["#ff0088", "#dd00ee", "#9911ff", "#0d63f8"];
  const [order, setOrder] = useState(initialOrder);

  useEffect(() => {
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1000);
    return () => clearTimeout(timeout);
  }, [order]);

  const spring = {
    type: "spring",
    damping: 20,
    stiffness: 300,
}

const container = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    gap: 10,
    width: 160,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
}

const item = {
    width: 50,
    height: 50,
    borderRadius: "5px",
}
  function shuffle([...array]) {
    return array.sort(() => Math.random() - 0.5);
  }
  return (
    <div>
      <ul style={container}>
        {order.map((backgroundColor) => (
          <motion.li
            key={backgroundColor}
            layout
            transition={spring}
            style={{ ...item, backgroundColor }}
          />
        ))}
      </ul>
    </div>
  );
};

export default MotionOne;
