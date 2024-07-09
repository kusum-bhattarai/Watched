import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddMovie = () => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    // Logic to fetch details from the API and add the movie/series
    console.log('Adding movie:', title);
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="formMovieTitle">
          <Form.Label>Movie/Series Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleAdd} className="mt-3">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
