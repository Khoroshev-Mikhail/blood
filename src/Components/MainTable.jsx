//Colum из senchaGrid выдаёт ошибку в формате tsx
import { SenchaGrid, Column } from "@sencha/sencha-grid";
import "@sencha/sencha-grid/dist/themes/grui.css";
import { useId, useState } from "react";
import { Grid, Segment, Table } from "semantic-ui-react";
import { Input } from 'semantic-ui-react'
import { useAppSelector } from "../app/hooks";
import SubjectsSearch from "./Subjects";
import { Button } from 'semantic-ui-react'

export default function MainTable(){
    const data = [
        {
          id: 0,
          npp: 1,
          r1022: '1000000000',
          naim_org: 'Москвариум',
          adr_fact: 'ВДНХ',
          inn: '666',
          plazma_max: '1020',
          plazma_cena: '50',
          erm_max: '1030',
          erm_cena: '60',
          immg_max: '1040',
          immg_cena: '70',
          alb_max: '1050',
          alb_cena: '80',
        },
        {
          id: 20,
          npp: 2,
          r1022: '100000023000',
          naim_org: 'Мос12квариум',
          adr_fact: 'ВДН2Х',
          inn: '6662',
          plazma_max: '102320',
          plazma_cena: '520',
          erm_max: '10230',
          erm_cena: '602',
          immg_max: '1040',
          immg_cena: '720',
          alb_max: '10520',
          alb_cena: '820',
        },
    ];
    return (
        <Grid.Column width={13}>
            <Segment>
                <Button>Сохранить</Button>
                <Button>Добавить</Button>
                <Button>Удалить</Button>
            </Segment>
            <SenchaGrid data={data} style={{height: '700px', background: 'none'}}>
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