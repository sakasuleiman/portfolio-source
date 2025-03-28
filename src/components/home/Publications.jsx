import React from 'react';

const Publications = ({ data }) => {
  return (
    <section id="publications" className="container">
      <h2 className="display-4 mb-4">{data.heading}</h2>
      <ul>
        {data.papers.map((paper, index) => (
          <li key={index}>
            <a href={paper.link} target="_blank" rel="noopener noreferrer">
              {paper.title} - {paper.journal} ({paper.year})
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Publications;
