import React from "react";
import { useInView } from "react-intersection-observer";

const ScrollSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerMany: true,  // Trigger the animation only once
    threshold: 0.1,     // Trigger when 10% of the element is visible
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${inView ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
    >
      {children}
    </div>
  );
};

export default ScrollSection;