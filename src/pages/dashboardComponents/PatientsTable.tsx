import { DataGrid } from "@mui/x-data-grid";
import { Card } from "@mui/material";

const columns = [
  { field: "name", headerName: "Patient Name", flex: 1 },
  { field: "email", headerName: "Email", flex: 1 },
  { field: "status", headerName: "Status", flex: 1 },
];

const rows = [
  { id: 1, name: "Isagi Yoichi", email: "isagi@example.com", status: "Verified" },
];

export default function PatientsTable() {
  return (
    <Card sx={{ height: 400 }}>
      <DataGrid rows={rows} columns={columns} />
    </Card>
  );
}
