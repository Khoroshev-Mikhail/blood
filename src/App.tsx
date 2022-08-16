import React, { Component, useEffect, useState } from 'react'
import { Dropdown, Grid, Menu, Segment } from 'semantic-ui-react'
import Main from './Components/Main';
import { Container } from 'semantic-ui-react'
import { useAppDispatch } from './app/hooks';
import { subjectsThunk } from './app/store';

function App() {
  const dispatch = useAppDispatch()
  const [activeItem, setActiveItem] = useState<string>('bio')
  function handleItemClick(e:any, { name }: any){
    setActiveItem(name)
  }
  useEffect(()=>{
    //Подгружаем список субъектов
    dispatch(subjectsThunk())
  })
  return (
    <Container>
      <Grid>
        <Grid.Column width={1}>
          <Menu text vertical>
            <Menu.Item
              name='Меню1'
              active={activeItem === 'bio'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Меню2'
              active={activeItem === 'pics'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Меню3'
              active={activeItem === 'companies'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Меню4'
              active={activeItem === 'links'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={15}>
          <Main />
        </Grid.Column>
      </Grid>
    </Container>
    
  );
}

export default App;
