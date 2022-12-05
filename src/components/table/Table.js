import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import classNames from 'classnames/bind';
import BodyDatas from "./BodyDatas";

const Table = ({bodyDatas, onRemove}) => {

    

    //const bodyDatasElem = <BodyDatas bodyDatas={bodyDatas}/>;
    //console.log(bodyDatasElem);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th data="name">name</th>
                        <th data="type1">type1</th>
                        <th data="type2">type2</th>
                        <th data="category1">category1</th>
                        <th data="category2">category2</th>
                        <th data="value1">value1</th>
                        <th data="value2">value2</th>
                        <th data="schedule">schedule</th>
                        <th data="option1">option1</th>
                        <th data="option2">option2</th>
                        <th data="option3">option3</th>
                        <th data="option4">option4</th>
                        <th data="option5">option5</th>
                        <th data="start_time">start_time</th>
                        <th data="end_time">end_time</th>
                        <th data="created_by">created_by</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <BodyDatas bodyDatas={bodyDatas} onRemove={onRemove}/>
                </tbody>
            </table>
        </>
    );
}

export default Table;