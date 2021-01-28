import React, { useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

const Table = () => {
  const [columns, setColumns] = useState([
    { title: "Name", field: "name" },
    {
      title: "Surname",
      field: "surname",
      initialEditValue: "initial edit value",
    },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
    {
      title: "Birth Place",
      field: "birthCity",
    },
  ]);

  const [data, setData] = useState([
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
    { name: "Zerya Betül", surname: "Baran", birthYear: 2017, birthCity: 34 },
    {
      name: "Anushka",
      surname: "Bhargava",
      birthYear: 1345,
      birthCity: "Rewari",
    },
  ]);
  const deleteRows = (event, selectedRows) => {
    console.log("b ", selectedRows);
    data.map((e, i) => {
      selectedRows.map((element, index) => {
        console.log(element.tableData.id);
      });
    });
  };

  return (
    <MaterialTable
      title="Table"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("data:", data, "new data:", newData);
              setData([...data, newData]);
              resolve();
            }, 1000);
          }),

        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("newdata:", newData, "olddata:", oldData);
              const dataUpdate = [...data];
              console.log("dattaupo:", dataUpdate, "olddata:", oldData);
              const index = oldData.tableData.id;
              console.log("dataIndex:", dataUpdate[index]);
              dataUpdate[index] = newData;
              console.log("newdata:", newData);
              // setData(dataUpdate);
              resolve();
            }, 1000);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              console.log("oldData:", oldData);
              const dataDelete = [...data]; //dataDelete
              console.log("datadelete:", dataDelete);
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1); //remove '1' item from 'index' till '1item' of dataDelete array
              setData([...dataDelete]);

              resolve();
            }, 1000);
          }),
      }}
      options={{
        sorting: true,
        selection: true,
      }}
      actions={[
        {
          icon: () => <EditIcon />,
          tooltip: "Edit",
        },
        {
          icon: () => <DeleteIcon />,
          tooltip: "Delete",
          onClick: deleteRows,
        },
        {
          icon: () => <DoneIcon />,
          tooltip: "Done",
        },
        {
          icon: () => <CloseIcon />,
          tooltip: "Cancel",
        },
      ]}
    />
  );
};
export default Table;
