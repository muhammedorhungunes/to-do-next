import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "Task Id", width: 200 },
  { field: "project_name", headerName: "Project Name", width: 200 },
  { field: "task_name", headerName: "Task Name", width: 200 },
  { field: "status", headerName: "Status", width: 200 }
];

const rows = [
  {
    id: 1,
    project_name: "Company A",
    task_name: "Pentest",
    status: "Not Started",
  },
  {
    id: 2,
    project_name: "Company B",
    task_name: "Pentest",
    status: "In Progress",
  },
  {
    id: 3,
    project_name: "Company C",
    task_name: "Pentest",
    status: "Completed",
  },
  {
    id: 4,
    project_name: "Company D",
    task_name: "Pentest",
    status: "Completed",
  },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
