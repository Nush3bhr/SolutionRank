import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("AbhiRank Questions");
    const arrStrings = ["Abhi", "Aish", "Anu", "Anshi", "Randy", "Bonda"];
    const arrObjects = [
      { name: "Aish", id: 2 },
      { name: "Anu", id: 3 },
      { name: "Anshi", id: 4 },
      { name: "Randy", id: 5 },
      { name: "Bonda", id: 6 },
      { name: "Abhi", id: 1 },
    ];
    const selctedValuesToDelete = [
      { name: "Anu", id: 3 },
      { name: "Anshi", id: 4 },
      { name: "Randy", id: 5 },
      { name: "Bonda", id: 6 },
    ];

    // 1. Write a logic to filter arrStrings which have only 4 letters? (2 marks)
    //USING FOR:
    // let newArr1 = [];
    // for (let i = 0; i < arrStrings.length; i++) {
    //   if (arrStrings[i].length === 4) {
    //     newArr1.push(arrStrings[i]);
    //   }
    // }
    // console.log("newArr1:   ", newArr1);
    //USING JS FUNCTION FILTER:
    let newArr1 = arrStrings.filter((element, index) => {
      return element.length === 4;
    });
    console.log("newArr1:   ", newArr1);

    // 2. Write a logic to filter arrObjects in which names have only 4 letters and print their ids...?  (4 marks)
    // let newArr2 = [];
    // for (let i = 0; i < arrObjects.length; i++) {
    //   if (arrObjects[i].name.length === 4) {
    //     newArr2.push(arrObjects[i].id);
    //   }
    // }
    // console.log("newArr2:   ", newArr2);
    let newArr2 = arrObjects.filter((element, index) => {
      return element.name.length === 4;
    });
    console.log("newArr2:   ", newArr2);

    // 3. Write a logic to remove selectedValuesToDelete array of objects from arrObjects array?
    // After deleting, show me both deleted and remaning values...
    // let remaining = [],
    //   deleted = [];

    // for (let i = 0; i < arrObjects.length; i++) {
    //   let flag = 0;
    //   for (let j = 0; j < selctedValuesToDelete.length; j++) {
    //     // console.log(
    //     //   "arrObjects[i]:   ",
    //     //   arrObjects[i],
    //     //   "selctedValuesToDelete[j]:  ",
    //     //   selctedValuesToDelete[j]
    //     // );
    //     // console.log(
    //     //   "equate:  ",
    //     //   arrObjects[i].id === selctedValuesToDelete[j].id
    //     // );
    //     if (arrObjects[i].id === selctedValuesToDelete[j].id) {
    //       deleted.push(arrObjects[i]);
    //       flag = 1;
    //       break;
    //     }
    //   }
    //   if (flag === 0) {
    //     remaining.push(arrObjects[i]);
    //   }
    // }
    // console.log("remainig:  ", remaining, "deleted:  ", deleted);

    // let deleted = arrObjects.map((element, index) => {
    //   let selected = selctedValuesToDelete.find((ele, ind) => {
    //     // console.log("elementId:", element.id, "eleId:  ", ele.id);
    //     if (element.id === ele.id) {
    //       return true;
    //     }
    //   });
    //   console.log("selected:", selected);
    //   return selected;
    // });

    // console.log("deleted:  ", deleted);

    // ............................................................................................
    let deleted = arrObjects.filter((element, index) => {
      let selected = selctedValuesToDelete.find(
        (selectedElement, selectedIndex) => element.id === selectedElement.id
      )
        ? true
        : false;
      return selected;
    });
    console.log("deleted:  ", deleted);

    // 4. Write a logic to get the highest id in arrObjects?
    // let temp;
    // for (let i = 0; i < arrObjects.length - 1; i++) {
    //   for (let j = 1; j < arrObjects.length; j++) {
    //     if (arrObjects[i].id < arrObjects[j].id) {
    //       temp = arrObjects[i];
    //       arrObjects[i] = arrObjects[j];
    //       arrObjects[j] = temp;
    //     }
    //   }
    // } //gives max array element on top
    // console.log("checkMaxElement:  ", arrObjects);
    // console.log("highestId:  ", arrObjects[0].id);
    // ............................................................................................
    let temp;
    let highArr = arrObjects.map((element, index) => {
      console.log("indexId:", arrObjects[index].id);
      console.log("indexId +1:", arrObjects[index + 1].id);

      if (arrObjects[index].id < arrObjects[index + 1].id) {
        temp = arrObjects[index];
        arrObjects[index] = arrObjects[index + 1];
        arrObjects[index] = temp;
      }
      return arrObjects;
    });
    console.log("highArr:  ", highArr);

    // ............................................................................................
    // let temp;
    // for (let i = 0; i < arrObjects.length; i++) {
    //   for (let j = 0; j < arrObjects.length - 1; j++) {
    //     if (arrObjects[j].id < arrObjects[j + 1].id) {
    //       temp = arrObjects[j];
    //       arrObjects[j] = arrObjects[j + 1];
    //       arrObjects[j + 1] = temp;
    //     }
    //   }
    // } //   " SORT " the array in desc order
    // console.log("descArr:   ", arrObjects);
    // console.log("highestId:  ", arrObjects[0]);

    // 5. Write a logic to print names which have only 1 vowel in its name from arrObjects?
    let a = arrObjects.map((element, index) => {});

    let count, i;
    for (let i = 0; i < arrObjects.length; i++) {
      let count = 0;
      let name = arrObjects[i].name.toLowerCase();
      // console.log("name:  ", name);

      for (let j = 0; j < name.length; j++) {
        // console.log(":charat:", name.charAt(j));
        if (
          name.charAt(j) === "a" ||
          name.charAt(j) === "e" ||
          name.charAt(j) === "i" ||
          name.charAt(j) === "o" ||
          name.charAt(j) === "u"
        ) {
          count = count + 1;
        }
      }

      // console.log("count:", count);
      if (count === 1) {
        console.log("name with 1 vowel:    ", arrObjects[i].name);
      }
    }
  }, []);

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
