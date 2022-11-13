import { useState } from 'react';
import Menu from '../components/Menu';
import Table from '../components/table/Table';
import '../vendor/css/table.css';

const TablePage = () => {
    return(
        <div>
            <Menu/>
            <div className="main-body">
                <Table/>
            </div>
        </div>
    )
}

export default TablePage;