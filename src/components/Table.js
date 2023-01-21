import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from 'react-redux';
import { getTasks } from './TasksSlice';

const columns = [
  { field: "id", headerName: "Task Id", width: 200 },
  { field: "project_name", headerName: "Project Name", width: 200 },
  { field: "task_name", headerName: "Task Name", width: 200 },
  { field: "status", headerName: "Status", width: 200 },
];

export default function Table(props) {
  const tasks = useSelector(getTasks);


  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={tasks}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(ids) => {
          const selectedIDs = new Set(ids);
          const selectedRows = tasks.filter((row) => selectedIDs.has(row.id));

          props?.setSelectedRows(selectedRows);
        }}
      />
    </div>
  );
}
