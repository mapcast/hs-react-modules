import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/table/Table';
import TableOnOff from '../components/table/TableOnOff';
import '../vendor/css/table.css';

const TablePage = () => {
    return(
        <>
            <Menu/>
            <div className="main-body">
                <div className="tp-wrap">
                    <div className="tp-menu-wrap">
                        <TableOnOff/>
                    </div>
                    <div className="tp-table-wrap">
                        <Table/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TablePage;