import { useState } from 'react'
import { Grid, Menu } from 'semantic-ui-react'

export default function MainMenu(props: any){
    //Локальный стейт
    const [activeItem, setActiveItem] = useState<string>('bio')
    function handleItemClick(_:any, { name }: any){
      console.log(name)
        setActiveItem(name)
    }
    return (
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
    )
}