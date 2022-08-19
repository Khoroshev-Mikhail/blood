import { useState } from 'react'
import { Grid, Menu } from 'semantic-ui-react'

export default function MainMenu(props: any){
    //Локальный стейт
    const [activeItem, setActiveItem] = useState<string>('bio')

    //Методы для рендеринга
    function handleItemClick(_:any, { name }: any){
        setActiveItem(name)
    }
    return (
      <Grid.Column width={1}>
          <Menu text vertical>
            <Menu.Item
              name='Меню1'
              active={activeItem === 'Меню1'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Меню2'
              active={activeItem === 'Меню2'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Меню3'
              active={activeItem === 'Меню3'}
              onClick={handleItemClick}
            />
            <Menu.Item
              name='Меню4'
              active={activeItem === 'Меню4'}
              onClick={handleItemClick}
            />
          </Menu>
        </Grid.Column>
    )
}