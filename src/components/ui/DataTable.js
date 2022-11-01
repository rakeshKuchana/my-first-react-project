import { DataGrid } from "@mui/x-data-grid";


const columns = [
  {
    field: "address",
    headerName: "Address",
    width: 250
  },
  {
    field: "city",
    headerName: "City",
    width: 150
  },
  {
    field: "state",
    headerName: "State",
    width: 60
  },
  {
    field: "zip",
    headerName: "Zip",
  },
];

const rows = [
  {
    id: "a1",
    address: "Vijaya Sai Residency",
    city: "Hyderabad",
    state: "TG",
    zip: "12345",
  },
  {
    id: "a2",
    address: "Vijaya Sai Residency",
    city: "Hyderabad",
    state: "TG",
    zip: "12345",
  },
  {
    id: "a3",
    address: "Vijaya Sai Residency",
    city: "Hyderabad",
    state: "TG",
    zip: "12345",
  },
];

const DataTable = (props) => {
  console.log('inside data table ' + props.rows);
  return (
    <div style={{height: '400px', width: '100%'}}>
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      ></DataGrid>
    </div>
  );
};

export default DataTable;
