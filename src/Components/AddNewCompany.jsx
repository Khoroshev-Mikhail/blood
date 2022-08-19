import { useEffect, useState } from 'react';
import { Grid, Segment } from "semantic-ui-react";
import { Form, Input, TextArea,  Select } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setNewCompanyThunk, subjectsThunk } from '../app/store';

export default function AddNewCompany(){
    const dispatch = useAppDispatch()
    const r1022 = useAppSelector(state => state.currentR1022) //При загрузке компаний по текущему r1022 сетается в миддлевэйре
    const [newCompany, setNewCompany] = useState({
        npp: 99,
        r1022: r1022,
        naim_org: "", 
        adr_fact: "",
        inn: 0,
        plazma_max: 0,
        plazma_cena: 0,
        erm_max: 0,
        erm_cena: 0,
        immg_max: 0,
        immg_cena: 0,
        alb_max: 0,
        alb_cena: 0,
    })
    function onChangeInputs(e, {name, value}){
        setNewCompany(state => ({...state, [name] : value}))
    }
    function dispatchNewCompany(){
        dispatch(setNewCompanyThunk(newCompany))
    }
    return(
        <Segment>
        <Form onSubmit={dispatchNewCompany}>
            <Form.Group widths='equal'>
                <Form.Field
                    name="naim_org"
                    control={Input}
                    label='Наименование компании'
                    placeholder='ООО Фьюче'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="adr_fact"
                    control={Input}
                    label='Адрес фактический'
                    placeholder='г.Москва, ул.Родниковая 30к1'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="inn"
                    control={Input}
                    label='ИНН Компании'
                    placeholder='381299944331'
                    onChange={onChangeInputs}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    name="plazma_max"
                    control={Input}
                    type='number'
                    label='Плазма (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="plazma_cena"
                    control={Input}
                    type='number'
                    label='Плазама цена продажи (тыс руб. за 1 тыс.литров)'
                    placeholder='60000'
                    onChange={onChangeInputs}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    name="erm_max"
                    control={Input}
                    type='number'
                    label='Эритроцитная масса (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="erm_cena"
                    control={Input}
                    type='number'
                    label='Эритроцитная масса цена продажи (тыс руб. за 1 тыс.литров)'
                    placeholder='60000'
                    onChange={onChangeInputs}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    name="immg_max"
                    control={Input}
                    type='number'
                    label='Имунноглобулин (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="immg_cena"
                    control={Input}
                    type='number'
                    label='Имунноглобулин цена продажи (тыс руб. за 1 тыс.литров)'
                    placeholder='60000'
                    onChange={onChangeInputs}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    name="alb_max"
                    control={Input}
                    type='number'
                    label='Альбумин масса (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="alb_cena"
                    control={Input}
                    type='number'
                    label='Альбумин масса цена продажи (тыс руб. за 1 тыс.литров)'
                    placeholder='60000'
                    onChange={onChangeInputs}
                />
            </Form.Group>
            <Form.Button content='Сохранить' />
        </Form>
        </Segment>
    )
}