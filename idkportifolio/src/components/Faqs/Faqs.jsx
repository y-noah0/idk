import React, { useState } from 'react';
import style from './Faqs.module.css'; // We'll use this for custom CSS

const FAQ = () => {
  // The FAQ data now contains both questions and answers
  const faqData = [
    {
      question: "Will AI Eliminate Web Developer Jobs In The Future?",
      answer: "While AI may automate certain tasks, web development requires creativity and human intuition, which AI cannot fully replicate. Web developers will continue to play a crucial role."
    },
    {
      question: "Will Non-CSE Or Non-Science Background Students Get Jobs Or Internships In Web Development?",
      answer: "Yes, web development is open to people from various backgrounds. A strong portfolio and skills are more important than your academic background."
    },
    {
      question: "Can I Get A Job/Internship While Studying At University?",
      answer: "Yes, many students secure internships and jobs while studying, provided they have the necessary skills and time management."
    },
    {
      question: "How Can You Guarantee A Job/Internship?",
      answer: "We provide ample opportunities, guidance, and connections with companies, but it's up to the individual to apply and succeed in interviews."
    },
    {
      question: "Can I Finish This Course Along With My Varsity Study And Exams?",
      answer: "Yes, the course is designed to be flexible, allowing you to study at your own pace, even with other commitments."
    },
    {
      question: "For Whom Is This Course?",
      answer: "This course is for anyone eager to learn web development, regardless of their background or experience level."
    },
    // Add more questions and answers as needed
  ];

  // State to track the currently expanded question
  const [expandedIndex, setExpandedIndex] = useState(null);

  // Function to toggle the selected FAQ item
  const handleToggle = (index) => {
    // If the same index is clicked, collapse it; otherwise, expand it
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={style["faqcontainer"]}>

    
    <div className={style['faq-container']}>
      <div className={style['faq-header']}>
        <h1>Frequently Asked<br /> Questions_</h1>
      </div>
      <div className={style['faq-list']}>
        {faqData.map((faq, index) => (
          <div key={index} className={style['faq-item']} onClick={() => handleToggle(index)}>
            <div className={style['faq-question']}>
              <span>{faq.question}</span>
              <span className={`${style.icon} ${expandedIndex === index ? style.rotate : ''}`}>⌄</span>
            </div>
            {expandedIndex === index && (
              <div className={style['faq-answer']}>
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default FAQ;
