import { useState } from 'react';
import { Segment } from "semantic-ui-react";
import { Form, Input } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { setNewCompanyThunk } from '../app/store';

export default function UpdateNewCompany(props){
    //Глобальные методы
    const dispatch = useAppDispatch()

    //Глобальный стейт
    const currentCompany = useAppSelector(state => state.companies.find(el => el.id == props.id))

    //Локальный стейт
    const [newCompany, setNewCompany] = useState(currentCompany)

    //Методы для рендеринга
    function onChangeInputs(_, {name, value}){
        setNewCompany(state => ({...state, [name] : value}))
    }
    function dispatchNewCompany(){
        dispatch(setNewCompanyThunk(newCompany))
    }

    //currentCompany Может вернуться undefined и тогда ошибка. Хотя данная компонента не рендерится в условиях когда возвращается undefined
    if(! currentCompany){
        return(
            <Segment>
                <h1>Choose a company</h1>
            </Segment>
        )
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
                    value={currentCompany.adr_fact}
                    label='Адрес фактический'
                    placeholder='г.Москва, ул.Родниковая 30к1'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="inn"
                    control={Input}
                    value={currentCompany.inn}
                    label='ИНН Компании'
                    placeholder='381299944331'
                    onChange={onChangeInputs}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    name="plazma_max"
                    control={Input}
                    value={currentCompany.plazma_max}
                    type='number'
                    label='Плазма (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="plazma_cena"
                    control={Input}
                    value={currentCompany.plazma_cena}
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
                    value={currentCompany.erm_max}
                    type='number'
                    label='Эритроцитная масса (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="erm_cena"
                    control={Input}
                    value={currentCompany.erm_cena}
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
                    value={currentCompany.immg_max}
                    type='number'
                    label='Имунноглобулин (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="immg_cena"
                    control={Input}
                    value={currentCompany.immg_cena}
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
                    value={currentCompany.alb_max}
                    type='number'
                    label='Альбумин масса (Макс.объём тыс.литров)'
                    placeholder='1000'
                    onChange={onChangeInputs}
                />
                <Form.Field
                    name="alb_cena"
                    control={Input}
                    value={currentCompany.alb_cena}
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