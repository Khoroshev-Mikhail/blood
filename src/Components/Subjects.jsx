import "@sencha/sencha-grid/dist/themes/grui.css";
import { useEffect, useId, useState } from "react";
import { Grid, Table } from "semantic-ui-react";
import { Input } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { companiesThunk } from "../app/store";

export default function SubjectsSearch(props){
    //Глобальные методы
    const dispatch = useAppDispatch()

    //Глобальный стейт
    const subjects = useAppSelector(state => state.subjects)
    const r1022 = useAppSelector(state => state.currentR1022)

    //Локальный стейт
    const id = useId()
    const [localSubjects, setLocalSubjects] = useState(subjects)
    const [search, setSearch] = useState('')
    const [isActive, setIsActive] = useState()
    
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
            <div style={{height: '700px', overflowY: 'scroll'}}> {/*Данный костыль добавялет полосу прокрутки*/}
            <Table celled>
                <Table.Body>
                    {localSubjects.map((el, i) => {
                        return (
                            <Table.Row
                                key={id + i} 
                                onClick={()=>{
                                    dispatch(companiesThunk(el.p00))
                                    setIsActive(el.p00)}
                                }
                                style={{background: r1022 === el.p00 ? 'Gainsboro' : 'none', cursor: 'pointer'}}
                                >
                                <Table.Cell>
                                    {el.p01}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
            </div>            
       </Grid.Column>
    )

}