import React from "react";
import { Cards } from "./cards/Cards";

export function Features() {
  return (
    <div className="container">
      <Cards items={testimonials} direction="right" speed="slow" />
    </div>
  );
}

const testimonials = [
  {
    quote: "It was the best of times...",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote: "To be, or not to be...",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem...",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  
];
