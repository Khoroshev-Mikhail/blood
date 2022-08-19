import { useEffect} from 'react'
import { Grid} from 'semantic-ui-react'
import Main from './Components/Main';
import { Container } from 'semantic-ui-react'
import { useAppDispatch } from './app/hooks';
import { subjectsThunk } from './app/store';
import MainMenu from './Components/MainMenu';

function App() {
  //Глобальные методы
  const dispatch = useAppDispatch()


  useEffect(()=>{
    //Подгружаем список субъектов
    dispatch(subjectsThunk())
  })
  return (
    <Container>
      <Grid>
        <MainMenu />

          <Main />
      </Grid>
    </Container>
    
  );
}

export default App;
