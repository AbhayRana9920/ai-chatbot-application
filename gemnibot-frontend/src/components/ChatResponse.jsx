import React from 'react';

const ChatResponse = ({ response }) => {
    if (!response) {
        return null;
    }
    
    const {candidates} = response;

    return (
        <div className="container my-4">
            <h3>Response</h3>
        {candidates.map((candidate, index) => (
            <div className="card mb-3" key={index}>
            <div className="card-body">
              <p className="card-text">{candidate.content.parts[0].text}</p>
               {candidate?.citationMetadata?.citationSources && candidate.citationMetadata.citationSources.length > 0 && (
                <>
              <h6>Citations:</h6>
              <ul>
                {candidate.citationMetadata.citationSources
    .filter(source => source.uri)
    .map((source, idx) => (
      <li key={idx}>
        <a href={source.uri} target="_blank" rel="noopener noreferrer">
          {source.uri}
        </a>
      </li>
  ))}
              </ul>
              </>
            )}
            </div>
          </div>
        ))}
        </div>
    )
}

export default ChatResponse;