import React, { Component, useState } from 'react'
import { Dropdown, Grid, Menu, Segment } from 'semantic-ui-react'
import Main from './Components/Main';
import { Container } from 'semantic-ui-react'

function App() {
  const [activeItem, setActiveItem] = useState<string>('bio')
  function handleItemClick(e:any, { name }: any){
    setActiveItem(name)
  }
  return (
    <Container>
      <Grid>
        <Grid.Column width={4}>
          <Menu pointing secondary vertical>
            <Menu.Item
              name='bio'
              active={activeItem === 'bio'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='pics'
              active={activeItem === 'pics'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='companies'
              active={activeItem === 'companies'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='links'
              active={activeItem === 'links'}
              onClick={handleItemClick}
            />
            <Dropdown item text='Display Options'>
              <Dropdown.Menu>
                <Dropdown.Header>Text Size</Dropdown.Header>
                <Dropdown.Item>Small</Dropdown.Item>
                <Dropdown.Item>Medium</Dropdown.Item>
                <Dropdown.Item>Large</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            This is an stretched grid column. This segment will always match the
            tab height
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
    
  );
}

export default App;
