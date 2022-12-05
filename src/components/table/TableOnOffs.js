

const TableOnOff = ({ tableData }) => {
    return (
        <div key={tableData} className='too-wrap'>
            <input type='checkbox' name="table-on-off" value={tableData} defaultChecked/>
            <label>{tableData}</label>
        </div>
    );
}

const TableOnOffs = ({ tableDatas }) => {
    return (
        <>
            {tableDatas.map(tableData =>
                <TableOnOff
                tableData={tableData}
                key={tableData}
                />
            )}
        </>
    );
}

export default TableOnOffs;

