import React from 'react';
import { Button, Header } from 'semantic-ui-react';

function Footer() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: 50,
        padding: 20,
        borderTop: '0.5px solid grey',
      }}
    >
      <Header as="h5">2022 - seerat.me</Header>
      <Button circular icon="github" color="violet" />
    </div>
  );
}

export default Footer;
