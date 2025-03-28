import React from 'react';

const Research = ({ data }) => {
  if (!data.show) return null;

  return (
    <div id="research" className="jumbotron jumbotron-fluid m-0">
      <div className="container">
        <h2 className="display-4 pb-3 text-center">{data.heading}</h2>
        
        {/* Introduction Section */}
        {data.introduction && (
          <div className="row mb-3">
            <div className="col-md-12">
              <p className="lead">{data.introduction}</p>
            </div>
          </div>
        )}
        
        {/* Google Scholar Reference */}
        <div className="row mb-5">
          <div className="col-md-12">
            <p>
              For a complete and up-to-date list of my publications, please visit my {' '}
              <a 
                href={data.googleScholarLink} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#4285F4', fontWeight: 'bold', textDecoration: 'underline' }}
              >
                Google Scholar
              </a>
              {' '}profile.
            </p>
          </div>
        </div>
        
        {/* Publications Section */}
        <h3 className="display-5 pb-4">PUBLICATIONS</h3>
        <div className="row">
          {data.publications.map((publication, index) => (
            <div key={index} className="col-md-12 mb-4">
              <div className="d-flex">
                {publication.conference && (
                  <div className="mr-4" style={{ minWidth: '120px' }}>
                    <strong className="text-info">{publication.conference}</strong>
                  </div>
                )}
                <div>
                  <p className="mb-1" dangerouslySetInnerHTML={{ __html: publication.citation }}></p>
                  <div className="mt-2">
                    {publication.paperLink && (
                      <a href={publication.paperLink} className="btn btn-sm btn-outline-primary mr-2" target="_blank" rel="noopener noreferrer">
                        Paper Link
                      </a>
                    )}
                  </div>
                </div>
              </div>
              {index < data.publications.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;