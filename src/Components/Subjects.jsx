import "@sencha/sencha-grid/dist/themes/grui.css";
import { useEffect, useId, useState } from "react";
import { Grid, Table } from "semantic-ui-react";
import { Input } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { companiesThunk, setCurrrentR1022, setCurrrentSubject } from "../app/store";

export default function SubjectsSearch(props){
    const dispatch = useAppDispatch()
    const id = useId()
    const subjects = useAppSelector(state => state.subjects)
    const [localSubjects, setLocalSubjects] = useState(subjects)
    const [search, setSearch] = useState('')
    
    //В Документации sencha-grid не открывается информация по фильтрации "data" 
    //- поэтому реализую через дублирования глобального стейта в локальный с последующей фильтрацией и рендерерингом оного
    useEffect(()=>{
        setLocalSubjects(subjects.filter(el => {
            if(!el.p01){ 
                return false
            }
            return el.p01.includes(search)
        }))
    },[search, subjects])

    return (
        <Grid.Column width={3}>
            <Input size='small' icon='search' placeholder='Search...' style={{width: '100%'}} onChange={(e)=>{setSearch(e.target.value)}}/>
            <Table celled>
            <Table.Body>
                {localSubjects.map((el, i) => {
                //Добавить полосу прокрутки
                return (
                    <Table.Row key={id + i}>
                    <Table.Cell>
                        <span 
                            style={{width: '100%', cursor: 'pointer'} /* Надо переписать */}    
                            onClick={ () => {  dispatch(companiesThunk(el.p00)) } }>{el.p01}</span>
                    </Table.Cell>
                </Table.Row>
                )
                })}
            </Table.Body>
            </Table>
       </Grid.Column>
    )

}