import React, { useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const Table = () => {
  const [column, setColumn] = useState([
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    {
      title: "Birth Year",
      field: "birth",
      render: (rowData) => rowData.birth.year,
    },
    {
      title: "Birth Place",
      field: "birthCity",
      render: (rowData) => rowData.birthCity + "nagar",
    },
  ]);
  const [data, setData] = useState([
    {
      name: "Mehmet",
      surname: "Baran",
      birth: { year: 1987 },
      birthCity: 63,
    },
    {
      name: "Zerya Betül",
      surname: "Baran",
      birth: { year: 2017 },
      birthCity: 34,
    },
  ]);

  return (
    <MaterialTable
      title="Simple Action Preview"
      columns={column}
      data={data}
      //   actions={[
      //     {
      //       icon: () => <SaveIcon />,
      //       tooltip: "Save User",
      //       //   onClick: (event, value) => alert("You saved ", value.name),
      //     },
      //     {
      //       icon: () => <EditIcon />,
      //       tooltip: "Edit",
      //     },
      //     {
      //       icon: () => <DeleteIcon />,
      //       tooltip: "Delete",
      //     },
      //     {
      //       icon: () => <DoneIcon />,
      //       tooltip: "Done",
      //     },
      //     {
      //       icon: () => <CloseIcon />,
      //       tooltip: "Cancel",
      //     },
      //   ]}
    />
  );
};
export default Table;
