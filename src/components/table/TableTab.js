import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fieldOff, fieldOn, selectFields } from '../../app/slices/fieldSlice';
import $ from 'jquery';

const tabs = [
    "name",
    "type1",
    "type2",
    "category1",
    "category2",
    "value1",
    "value2",
    "schedule",
    "option1",
    "option2",
    "option3",
    "option4",
    "option5",
    "start_time",
    "end_time",        
    "created_by",
]

const TableOnOff = ({ tab }) => {
    const ref = useRef(null);
    const dispatch = useDispatch();

    const changeStatus = () => {
        if(ref.current.checked) {
            dispatch(fieldOn(tab));
        } else {
            dispatch(fieldOff(tab));
        }
    }

    return (
        <div key={tab} className='too-wrap'>
            <input ref={ref} type='checkbox' name={tab} value={tab} onChange={changeStatus} defaultChecked/>
            <label>{tab}</label>
        </div>
    );
}

const TableTab = () => {
    return (
        <div className="too-container">
            {tabs.map(tab =>
                <TableOnOff
                tab={tab}
                key={tab}
                />
            )}
        </div>
    );
}
 
export default TableTab;