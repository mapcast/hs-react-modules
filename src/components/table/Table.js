import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import classNames from 'classnames/bind';
import BodyDatas from "./BodyDatas";
import uuid from 'react-uuid';

const initialState = {
    bodyDatas: [
       {
            name: 'name', uuid: 'c41947c7-ae28-464e-a46c-b98e2b3f66a9', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'e6f7b27e-42f7-478a-b894-080c6bb30025', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'a0e4c266-3305-4050-9050-3cd138dbc88d', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '4b03a42d-e29b-4cc1-9760-77dfadea0ed7', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '69e50f04-d6af-4af8-bcff-7e163368b46d', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '06ac28ef-b566-46e8-ae53-2534cbf61f1a', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '7cdc39d7-bc27-40ff-afe6-aa6cae53d1f4', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '5ed8ab65-8983-4a2f-a690-9a4ea0582acc', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'e91f4478-983a-452e-91e8-6aeae1f6eadd', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'f01b04f1-2955-4b8f-b60a-7e83c4723efc', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '41e34075-f6e2-4bf1-878a-35b43ca7c151', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'ffa31710-2f8c-4c01-b487-4fec366a11f0', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'd0e5792d-fb3a-41ad-8e84-6a51e6a59a3a', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '4730290e-d322-4813-b30b-b0b1059212fe', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'f0a369d6-eadf-4664-9d6f-41c074b170d9', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '95b8819d-ce43-4f23-80c3-6b259af51105', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'cf11a4c1-b3ee-497c-9c42-aa41b58381a0', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '6deaf0dd-b611-4c26-b932-19ba880e133f', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'ab8295b9-ed44-41e0-a31d-bf3ed3463039', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '9c4039c8-8247-4b0a-b761-385f48ab7ec9', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '90dc15e6-f0c0-4a71-b32c-e507ff99a220', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '3c2c177e-898e-4679-9dc7-de09dffda742', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '576476cc-6d38-440f-9e09-1510e129237a', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: 'd11bf1c0-8e08-43eb-8514-a12c625e383e', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
        {
            name: 'name', uuid: '65ef33b0-3b81-480d-9e21-22f6c11172d5', type1: 'type1', type2: 'type2', category1: 'category1', category2: 'category2', value1: 'value1', value2: 'value2', schedule: 'schedule', option1: 'option1', 
            option2: 'option2', option3: 'option3', option4: 'option4', option5: 'option5', start_time: '2022-12-01 00:00:00', end_time: '2022-12-31 23:59:59',created_by: '조현승'
        },
    ]
}

function reducer(state, action) {
    switch(action.type) {
        case 'ADD_BODY_DATA':
            return {
                bodyDatas: state.bodyDatas.concat(action.bodyData)
            };
        case 'REMOVE_BODY_DATA':
            return {
                bodyDatas: state.bodyDatas.filter(bodyData => bodyData.uuid !== action.uuid)
            };
        default: 
            return state;
    }
}

const Table = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    const { bodyDatas } = state;

    const onCreate = useCallback(() => {
        dispatch({
            type: 'ADD_BODY_DATA',
            bodyData: {
                name: 'name', 
                uuid: uuid(), 
                type1: 'type1', 
                type2: 'type2', 
                category1: 'category1', 
                category2: 'category2', 
                value1: 'value1', value2: 
                'value2', 
                schedule: 'schedule', 
                option1: 'option1', 
                option2: 'option2', 
                option3: 'option3', 
                option4: 'option4', 
                option5: 'option5', 
                start_time: '2022-12-01 00:00:00', 
                end_time: '2022-12-31 23:59:59',
                created_by: '조현승'
            }
        });
        
    }, []);

    const onRemove = useCallback(uuid => {
        dispatch({
            type: 'REMOVE_BODY_DATA',
            uuid
        });
    });

    

    //const bodyDatasElem = <BodyDatas bodyDatas={bodyDatas}/>;
    //console.log(bodyDatasElem);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>type1</th>
                        <th>type2</th>
                        <th>category1</th>
                        <th>category2</th>
                        <th>value1</th>
                        <th>value2</th>
                        <th>schedule</th>
                        <th>option1</th>
                        <th>option2</th>
                        <th>option3</th>
                        <th>option4</th>
                        <th>option5</th>
                        <th>start_time</th>
                        <th>end_time</th>
                        <th>created_by</th>
                    </tr>
                </thead>

                <tbody>
                    <BodyDatas bodyDatas={bodyDatas}/>
                </tbody>
            </table>
        </>
    );
}

export default Table;