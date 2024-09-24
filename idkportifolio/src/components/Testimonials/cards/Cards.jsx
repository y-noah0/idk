import React, { useEffect, useRef, useState } from "react";
import styles from "./Cards.module.css"; // Import the CSS file with module support

export function Cards({ items, direction = "left", speed = "fast", pauseOnHover = true, className }) {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Clone the items for smooth scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${styles.scroller} ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`${styles.flexContainer} ${start && styles.animateScroll} ${pauseOnHover && styles.hoverPause}`}
      >
        {items.map((item) => (
          <li key={item.name} className={styles.scrollerItem}>
            <blockquote className={styles.blockquote}>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{item.name}</span>
                <span className={styles.authorTitle}>{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
}
