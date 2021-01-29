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
    { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
  ]);

  const deleteRows = (event, selectedRowValue) => {
    console.log("event:", event);
    console.log("selectedRowValue", selectedRowValue);
    let remainingValue = [];
    let deletedValue = [];
    for (let i = 0; i < data.length; i++) {
      let flag = 0;
      for (let j = 0; j < selectedRowValue.length; j++) {
        if (i === selectedRowValue[j].tableData.id) {
          flag = 1;
          deletedValue.push(data[i]);
        }
      }
      if (flag === 0) {
        remainingValue.push(data[i]);
      }
    }
    console.log("deletedValue:", deletedValue);
    console.log("remainingValue: ", remainingValue);
    setData(remainingValue);
  };

  // const deleteRows = (event, selectedRowValue) => {
  //   console.log("event:", event);
  //   console.log("selectedRowValue", selectedRowValue);
  //   let newData = [...data];
  //   newData.map((element,index) => {
  //     selectedRowValue.map((ele,ind) =>{
  //       if(selectedRowValue[ind])
  //     })
  //   })

  // };

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
              console.log("dataupdate:", dataUpdate, "olddata:", oldData);
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
