import { useState, useReducer, useCallback } from 'react';
import Menu from '../components/Menu';
import Table from '../components/table/Table';
import TableTab from '../components/table/TableTab';
import '../vendor/css/table.css';
import uuid from 'react-uuid';
import { addBodyData, removeBodyData, selectBodyDatas } from '../app/slices/bodyDataSlice';
import { useSelector, useDispatch } from 'react-redux';
const TablePage = () => {

    const [name, setName] = useState();
    const bodyDatas = useSelector(selectBodyDatas).bodyDatas;
    const dispatch = useDispatch();

    const onCreate = () => {
        dispatch(
            addBodyData({
                name: name, 
                uuid: uuid(), 
                type1: 'type1', 
                type2: 'type2', 
                category1: 'category1', 
                category2: 'category2', 
                value1: 'value1', 
                value2: 'value2', 
                schedule: 'schedule', 
                option1: 'option1', 
                option2: 'option2', 
                option3: 'option3', 
                option4: 'option4', 
                option5: 'option5', 
                start_time: '2022-12-01 00:00:00', 
                end_time: '2022-12-31 23:59:59',
                created_by: '조현승'
            })
        );
    }
    
    const onRemove = (uuid) => {
        dispatch(
            removeBodyData(uuid)
        );
    }
    
    const handleChange = (e) => {
        if(e.target.name === "names") {
            setName(e.target.value);
            console.log(name);
        }
    }

    return(
        <>
            <Menu/>
            <div className="main-body">
                <div className="tp-wrap">
                    <div className="tp-menu-wrap">
                        <TableTab/>
                    </div>
                    <div className="tp-table-wrap">
                        <Table bodyDatas={bodyDatas} onRemove={onRemove}/>
                    </div>
                </div>
                <input name="names" onChange={handleChange}/>
                <button onClick={onCreate}>추가</button>
            </div>
        </>
    )
}

export default TablePage;