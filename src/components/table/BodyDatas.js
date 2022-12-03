import React from 'react';

const BodyData = ({bodyData}) => {
    return (
        <tr>
            <td>{bodyData.name}</td>
            <td>{bodyData.type1}</td>
            <td>{bodyData.type2}</td>
            <td>{bodyData.category1}</td>
            <td>{bodyData.category2}</td>
            <td>{bodyData.value1}</td>
            <td>{bodyData.value2}</td>
            <td>{bodyData.schedule}</td>
            <td>{bodyData.option1}</td>
            <td>{bodyData.option2}</td>
            <td>{bodyData.option3}</td>
            <td>{bodyData.option4}</td>
            <td>{bodyData.option5}</td>
            <td>{bodyData.start_time}</td>
            <td>{bodyData.end_time}</td>
            <td>{bodyData.created_by}</td>
        </tr>
    );
}

const BodyDatas = ({ bodyDatas }) => {
    return (
        <>
            {bodyDatas.map(bodyData =>
                <BodyData
                bodyData={bodyData}
                key={bodyData.uuid}
                />
            )}
        </>
    );
}

export default BodyDatas;