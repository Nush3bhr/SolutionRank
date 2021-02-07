import React from "react";
import MaterialTable from "material-table";
import "./MatTableData";
import { MatData } from "./MatTableData";

const MatTable = () => {
  return (
    <MaterialTable
      columns={[
        { title: "Name", field: "name" },
        { title: "Item Code", field: "itemCode" },
        {
          title: "Country Of Origin",
          field: "countryOfOrigin",
          render: (rowData) =>
            rowData.countryOfOrigin
              .map((country) => {
                return country.name;
              })
              .join(", "),
        },
        {
          title: "FoodType",
          field: "foodType.name",
        },
        {
          title: "Created Date",
          field: "dateCreated",
          render: (rowData) =>
            new Date(rowData.dateCreated).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
              weekday: "long",
            }),
        },
      ]}
      data={MatData.data.records}
      actions={[
        {
          icon: "add",
          tooltip: "Add User",
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row"),
        },
      ]}
      options={{
        selection: true,
      }}
    />
  );
};
export default MatTable;
