import React, { useCallback, useEffect, useMemo, useReducer } from 'react';
import { useSelector } from 'react-redux';
import { selectFields } from '../../app/slices/fieldSlice';
import classNames from 'classnames/bind';
import BodyDatas from "./BodyDatas";

const Table = ({bodyDatas, onRemove}) => {

    const fields = useSelector(selectFields).fields;

    //const bodyDatasElem = <BodyDatas bodyDatas={bodyDatas}/>;
    //console.log(bodyDatasElem);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        {fields.map(field =>
                            <th key={field}>{field}</th>
                        )}
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    <BodyDatas bodyDatas={bodyDatas} onRemove={onRemove} fields={fields}/>
                </tbody>
            </table>
        </>
    );
}

export default Table;