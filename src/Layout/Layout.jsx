import React from 'react';
import { Container } from 'semantic-ui-react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Container
        style={{
          width: '50%',
          marginTop: 0,
          marginBottom: '20px',
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </Container>
    </React.Fragment>
  );
};

export default Layout;
