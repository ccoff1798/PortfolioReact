import React from 'react';
import { Link } from 'react-router-dom';
import { showingsData } from './ShowingsData'; 

const Cards = () => {


  return (
    <div className='card-list-container'>
      {showingsData.map((project, index) => ( 
        <div className = 'card'key={index}>
          <h1>{project.name}</h1>
          <Link to={`/works/${encodeURIComponent(project.name)}`} target='_blank'> 
            <img className = 'card-image'src={project.image} alt={project.name}  />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Cards;
