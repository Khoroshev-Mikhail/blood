//Colum из senchaGrid выдаёт ошибку в формате tsx
import { SenchaGrid, Column } from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/grui.css";
import { Grid, Segment, Table } from "semantic-ui-react";
import { useAppSelector } from "../app/hooks";
import { Button } from 'semantic-ui-react'

export default function MainTable(){
    const companies = useAppSelector(state => state.companies)
    return (
        <Grid.Column width={13}>
            <Segment>
                <Button>Сохранить</Button>
                <Button>Добавить</Button>
                <Button>Удалить</Button>
            </Segment>
            <SenchaGrid store={companies} style={{height: '700px', background: 'none'}}>
              <Column componentType="Column" field="" text="Организация испольнитель">
                <Column field="naim_org" text="Наименование" width={120} />
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