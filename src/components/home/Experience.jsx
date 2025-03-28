import React from 'react';

const Experience = ({ data }) => {
  if (!data.show) return null;
  
  return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h2 className="display-4 pb-3 text-center">{data.heading}</h2>
        
        <div className="row">
          {data.positions.map((position, index) => (
            <div key={index} className="col-md-12 mb-4">
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h3 className="card-title" style={{ color: "#009688" }}>{position.company}</h3>
                      <p className="card-subtitle text-muted mb-2">{position.location}</p>
                    </div>
                    <div className="text-md-right">
                      <p className="font-weight-bold">{position.duration}</p>
                    </div>
                  </div>
                  
                  <p className="font-weight-bold" style={{ fontSize: "1.1rem" }}>{position.title}</p>
                  
                  {position.responsibilities && position.responsibilities.length > 0 && (
                    <ul className="mt-3">
                      {position.responsibilities.map((responsibility, i) => (
                        <li key={i} className="mb-2">
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;