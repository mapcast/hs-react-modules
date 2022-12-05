import React, { useEffect, useState } from 'react';
import $ from 'jquery';
import TableOnOffs from "./TableOnOffs";

const tabs = ["name","type1","type2","category1","category2","value1","value2","schedule",
"option1","option2","option3","option4","option5","start_time","end_time","created_by"];

const TableTab = () => {

    useEffect(() => {
        $("input[name=table-on-off]").on("change", function() {
            if($(this).is(":checked")) {
                let tableData = $(this).val();
                $(`[data=${tableData}]`).show();
            } else {
                let tableData = $(this).val();
                $(`[data=${tableData}]`).hide();
            }
        });
    }, []);

    return (
        <div className="too-container">
            <TableOnOffs tableDatas={tabs}/>
        </div>
    );
}

export default TableTab;