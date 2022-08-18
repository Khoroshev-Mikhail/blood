import { useEffect, useState } from 'react';
import { Grid, Segment } from "semantic-ui-react";
import { Form, Input, TextArea,  Select } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setNewCompanyThunk, subjectsThunk } from '../app/store';

export default function UpdateNewCompany(props){
    const dispatch = useAppDispatch()
    const r1022 = useAppSelector(state => state.currentR1022) //При загрузке компаний по текущему r1022 сетается в миддлевэйре
    const currentCompany = useAppSelector(state => state.companies.filter(el => el.id == props.id)[0])
    const [newCompany, setNewCompany] = useState(currentCompany)
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
                    value={currentCompany.naim_org}
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
            <Form.Button content='Добавить' />
        </Form>
        </Segment>
    )
}