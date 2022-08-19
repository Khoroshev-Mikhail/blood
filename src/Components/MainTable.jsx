//Colum из senchaGrid выдаёт ошибку в формате tsx поэтому пишу в jsx
import "@sencha/sencha-grid/dist/themes/grui.css";
import { SenchaGrid, Column } from "@sencha/sencha-grid";
import { Grid, Segment } from "semantic-ui-react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Button } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import AddNewCompany from "./AddNewCompany";
import UpdateNewCompany from "./UpdateNewCompany";
import { deleteCompanyThunk } from "../app/store";

//https://sencha-grid-storybook-test.csi-infra.com/?path=/story/features-data-list-add-lists--add-lists
export default function MainTable(){
    //Глобальные методы
    const dispatch = useAppDispatch()

    //Глобальный стейт
    const companies = useAppSelector(state => state.companies)
    const r1022 = useAppSelector(state => state.currentR1022)

    //Локальный стейт
    const [visible1, setVisible1] = useState(false) //Использую отдельную переменную для каждой компоненты т.к. их всего две
    const [visible2, setVisible2] = useState(false) //Использую отдельную переменную для каждой компоненты т.к. их всего две
    const [idSelected, setIdSelected] = useState()
    const [localCompanies, setLocalCompanies] = useState(companies)

    //Эффекты
    useEffect(()=>{
      setLocalCompanies(companies)
    }, [companies])
    
    useEffect(()=>{
      setVisible2(false)
      setIdSelected(undefined)
    },[r1022])

    //Методы для рендеринга
    function addRow(){
      setLocalCompanies(state => [...state, test])
    }
    return (
        <Grid.Column width={13}>
            <Segment>
                <Button onClick={() => {setVisible1(!visible1); setVisible2(false)}} className={visible1 ? 'ui active button' : ''}>Добавить</Button>
                {idSelected && <Button onClick={() => {setVisible2(!visible2); setVisible1(false)}} className={visible2  ? 'ui active button' : ''}>Изменить</Button>}
                {idSelected && <Button onClick={() => {dispatch(deleteCompanyThunk(idSelected))}} className="ui negative button">Удалить</Button>}
            </Segment>

            {visible1 && <AddNewCompany />}
            {visible2 && idSelected && <UpdateNewCompany id={idSelected} />}
            
            <SenchaGrid store={companies} style={{height: '1700px', background: 'none'}} 
              onSelect={function (_ref) {
                var records = _ref.records, selected = _ref.selected;
                setIdSelected(records[0].id)
              }} >
              <Column componentType="Column" field="" text="Организация испольнитель" >
                <Column field="naim_org" text="Наименование" width={120}/>
                <Column field="adr_fact" text="Местонахождение" width={140} />
                <Column field="inn" text="ИНН" width={60} />
              </Column>
              <Column componentType="Column" field="" text="Плазма свежезамороженная">
                <Column field="plazma_max" text="Макс.объём (тыс.литров)" width={100} />
                <Column field="plazma_cena" text="Цена продажи (тыс руб. за 1 тыс.литров)" width={100} />
              </Column>
              <Column componentType="Column" field="" text="Эритроцитная масса">
                <Column field="erm_max" text="Макс.объём (тыс.литров)" width={100} />
                <Column field="erm_cena" text="Цена продажи (тыс руб. за 1 тыс.литров)" width={100} />
              </Column>
              <Column componentType="Column" field="" text="Имунноглобулин человека">
                <Column field="immg_max" text="Макс.объём (тыс.литров)" width={100} />
                <Column field="immg_cena" text="Цена продажи (тыс руб. за 1 тыс.литров)" width={100} />
              </Column>
              <Column componentType="Column" field="" text="Альбумин 10%">
                <Column field="alb_max" text="Макс.объём (тыс.литров)" width={100} />
                <Column field="alb_cena" text="Цена продажи (тыс руб. за 1 тыс.литров)" width={100} />
              </Column>
            </SenchaGrid>
          </Grid.Column>
    );
}