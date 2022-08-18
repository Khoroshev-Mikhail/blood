//Colum из senchaGrid выдаёт ошибку в формате tsx
import { SenchaGrid, Column } from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/grui.css";
import { Grid, Segment } from "semantic-ui-react";
import { useAppSelector } from "../app/hooks";
import { Button } from 'semantic-ui-react'
import { useEffect, useState } from "react";
import AddNewCompany from "./AddNewCompany";
import UpdateNewCompany from "./UpdateNewCompany";

export default function MainTable(){
    //https://sencha-grid-storybook-test.csi-infra.com/?path=/story/features-data-list-add-lists--add-lists
    const companies = useAppSelector(state => state.companies)
    const [localCompanies, setLocalCompanies] = useState(companies)
    const [visible1, setVisible1] = useState(false)
    const [visible2, setVisible2] = useState(false)
    const [idUpdatingCompany, setIdUpdatingCompany] = useState()
    useEffect(()=>{
      setLocalCompanies(companies)
    }, [companies])
  
    function addRow(){
      setLocalCompanies(state => [...state, test])
    }
    return (
        <Grid.Column width={13}>
            <Segment>
                <Button onClick={() => setVisible1(!visible1)}>Добавить</Button>
                {idUpdatingCompany && <Button onClick={() => setVisible2(!visible2)}>Изменить</Button>}
            </Segment>

            {visible1 && <AddNewCompany />}
            {visible2 && <UpdateNewCompany id={idUpdatingCompany} />}
            
            <SenchaGrid store={companies} style={{height: '1700px', background: 'none'}} 
              onSelect={function (_ref) {
                var records = _ref.records, selected = _ref.selected;
                setIdUpdatingCompany(records[0].id)
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