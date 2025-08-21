import React from 'react';
import { Container } from 'react-bootstrap';
import AddMovie from '../components/addMovie';

const AddNew = ({ onAddSuccess }) => {
  return (
    <Container className="mt-5">
      <h2>Add a New Movie or Series</h2>
      <AddMovie onAddSuccess={onAddSuccess} />
    </Container>
  );
};

export default AddNew;