
import React from 'react';

const BodyData = ({bodyData, onRemove, fields}) => {
    return (
        <tr>
            {fields.map(field =>
                <td key={field}>{bodyData[field]}</td>
            )}
            <td><button onClick={() => onRemove(bodyData.uuid)}>삭제</button></td>
        </tr>
    );
}

const BodyDatas = ({ bodyDatas, onRemove, fields }) => {
    return (
        <>
            {bodyDatas.map(bodyData =>
                <BodyData
                bodyData={bodyData}
                key={bodyData.uuid}
                onRemove={onRemove}
                fields={fields}
                />
            )}
        </>
    );
}

export default BodyDatas;