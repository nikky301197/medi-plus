import React, { useState } from 'react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="mb-0">
          <button className="btn btn-link faq-question" onClick={toggleAccordion} aria-expanded={isOpen}>
            {question}
          </button>
        </h5>
      </div>
      <div className={`collapse ${isOpen ? 'show' : ''}`} aria-labelledby="headingOne" data-parent="#accordion">
        <div className="card-body faq-answer">
          {answer}
        </div>
      </div>
    </div>
  );
}

export default FAQItem;
