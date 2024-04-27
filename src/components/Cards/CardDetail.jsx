import React from 'react';
import { useParams } from 'react-router-dom';
import { showingsData } from './ShowingsData'; 

const CardDetail = () => {
  const { name } = useParams();
  console.log('URL parameter name:', name);

  console.log('showingsData:', showingsData);

  const project = showingsData.find(p => p.name === name);
console.log('Found project:', project);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <img className = 'card-image center-image' src={project.image} alt={project.name} />
      <h5  className='card-description'>{project.description}</h5>
      {project.github && (
        <a className='card-description' href={project.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
      )}
      
    </div>
  );
};

export default CardDetail;
