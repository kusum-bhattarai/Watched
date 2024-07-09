import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Home = () => {
  return (
    <Container>
      <Card className="mt-5 bg-dark text-white">
        <h1>Welcome to your Movie Library</h1>
        <p>Keep track of all the movies and series you've watched and loved.</p>
      </Card>
    </Container>
  );
};

export default Home;
