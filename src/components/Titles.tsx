import React, { useEffect, useRef, useState } from "react";
type TitleProps = {
  children: React.ReactNode;
  threshold: number;
  duration: string;
};

const Titles = ({ children, threshold, duration }: TitleProps) => {
  const ref = useRef(null);
  const [intersecting, setIntersecting] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const intersectionObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIntersecting(true);
          } else {
            setIntersecting(false);
          }
        },
        {
          threshold,
          rootMargin: "0px",
        }
      );

      intersectionObserver.observe(ref.current);

      return () => {
        if (ref.current) {
          intersectionObserver.unobserve(ref.current);
        }
      };
    }
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: duration,
        transform: "translate(0px, 0px)",
      }}
      className={`transition ${intersecting ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default Titles;
