import React, { useEffect, useState } from 'react';

const TableOnOff = () => {

    useEffect(() => {
        
    });

    const tabs = ["name","uuid","type1","type2","category1","category2","value1","value2","schedule",
    "option1","option2","option3","option4","option5","start_time","end_time","created_by"];
    const listTabs = tabs.map((tablehead) =>
        <div key={tablehead} className='too-wrap'>
            <input type='checkbox'/>
            <label>{tablehead}</label>
        </div>
    );


    return (
        <div className="too-container">
            {listTabs}
        </div>
    );
}

export default TableOnOff;