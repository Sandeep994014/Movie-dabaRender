import React from 'react';
import { useLocation } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const MovieDetails = () => {
  const location = useLocation();

  // Helper function to parse query parameters
  const getQueryParams = (search) => {
    const params = new URLSearchParams(search);
    return {
      poster: params.get('poster'),
      title: params.get('title'),
      year: params.get('year'),
      imdbID: params.get('imdbID'),
    };
  };

  const { title, year, imdbID, poster } = getQueryParams(location.search);

  return (
    <div className="p-5">
      <div>
        <a href='/'><button className='btn btn-primary'>Go Back</button> </a>
      </div>
      <div className="text-center pt-3" >
        <Card.Img src={poster} alt={title}  style={{ width: '300px', margin: '0 auto' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Year: {year}</Card.Text>
          <Card.Text>IMDB ID: {imdbID}</Card.Text>
        </Card.Body>
      </div>
    </div>
  );
};

export default MovieDetails;
