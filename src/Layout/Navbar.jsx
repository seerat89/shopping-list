import React, { useState } from 'react';
import { Icon, Menu, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [activeItem, setActiveItem] = useState('');
  return (
    <>
      <Header
        color="violet"
        as="h2"
        icon
        textAlign="center"
        style={{ paddingTop: 30, paddingBottom: 30 }}
      >
        <Icon name="shopping basket" circular />
        <Header.Content>S -List</Header.Content>
      </Header>
      <Menu pointing>
        <Menu.Item
          as={Link}
          name="home"
          to="/"
          active={activeItem === 'home'}
          onClick={() => setActiveItem('home')}
        />
        <Menu.Item
          as={Link}
          to="/newlist"
          name="new"
          active={activeItem === 'new'}
          onClick={() => setActiveItem('new')}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Icon name="user outline" />
            Seerat
          </Menu.Item>
          <Menu.Item>
            <Icon name="sign-out" />
            Logout
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </>
  );
}

export default Navbar;
