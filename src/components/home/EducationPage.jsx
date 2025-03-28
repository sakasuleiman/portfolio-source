import React from 'react';

const EducationPage = ({ data }) => {
  if (!data.show) return null;

  return (
    <div id="education" className="jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h2 className="display-4 pb-5 text-center">{data.heading}</h2>
        <div className="row">
          {data.degrees.map((degree, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div className="card shadow-sm border-0 rounded">
                <div className="card-body">
                  <h3 className="card-title" style={{ color: "#009688" }}>{degree.institution}</h3>
                  <p className="card-subtitle mb-2 text-muted">{degree.location}</p>
                  
                  <p className="font-weight-bold" style={{ fontSize: "1.1rem" }}>{degree.degree}</p>
                  
                  <div className="d-flex justify-content-between align-items-center">
                    {degree.cgpa && (
                      <p className="mb-1"><strong>CGPA:</strong> {degree.cgpa}</p>
                    )}
                    {degree.year && (
                      <p className="mb-1"><strong>Year:</strong> {degree.year}</p>
                    )}
                  </div>
                  
                  {degree.courseworks && degree.courseworks.length > 0 && (
                    <div className="mt-3">
                      <p className="mb-2"><strong>Relevant Courseworks:</strong></p>
                      <ul className="list-unstyled">
                        {degree.courseworks.map((course, i) => (
                          <li key={i} className="mb-1">
                            • {course}
                          </li>
                        ))}
                      </ul>
                    </div>
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

export default EducationPage;