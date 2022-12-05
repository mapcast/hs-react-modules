import React from 'react';

const BodyData = ({bodyData, onRemove}) => {
    return (
        <tr>
            <td data="name">{bodyData.name}</td>
            <td data="type1">{bodyData.type1}</td>
            <td data="type2">{bodyData.type2}</td>
            <td data="category1">{bodyData.category1}</td>
            <td data="category2">{bodyData.category2}</td>
            <td data="value1">{bodyData.value1}</td>
            <td data="value2">{bodyData.value2}</td>
            <td data="schedule">{bodyData.schedule}</td>
            <td data="option1">{bodyData.option1}</td>
            <td data="option2">{bodyData.option2}</td>
            <td data="option3">{bodyData.option3}</td>
            <td data="option4">{bodyData.option4}</td>
            <td data="option5">{bodyData.option5}</td>
            <td data="start_time">{bodyData.start_time}</td>
            <td data="end_time">{bodyData.end_time}</td>
            <td data="created_by">{bodyData.created_by}</td>
            <td><button onClick={() => onRemove(bodyData.uuid)}>삭제</button></td>
        </tr>
    );
}

const BodyDatas = ({ bodyDatas, onRemove }) => {
    return (
        <>
            {bodyDatas.map(bodyData =>
                <BodyData
                bodyData={bodyData}
                key={bodyData.uuid}
                onRemove={onRemove}
                />
            )}
        </>
    );
}

export default BodyDatas;