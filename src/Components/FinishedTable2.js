import React from "react";
import MaterialTable from "material-table";
import { FinishedProductData } from "./MatTableData";

const FinishedTable2 = () => {
  return (
    <MaterialTable
      title="Free Action Preview"
      columns={[
        { title: "Name", field: "name" },
        {
          title: " countryOfSale",
          field: " countryOfSale",
          render: (rowData) =>
            rowData.countryOfSale
              .map((country, index) => country.name)
              .join(", "),
        },
        {
          title: "brand",
          field: " brand",
          render: (rowData) => rowData.brand && rowData.brand.name,
        },
        {
          title: " dateCreated",
          field: " dateCreated",
          render: (rowData) =>
            new Date(rowData.dateCreated).toLocaleDateString("en-GB", {
              year: "numeric",
              month: "long",
              day: "2-digit",
              weekday: "long",
            }),
        },
      ]}
      data={FinishedProductData.data.records}
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
export default FinishedTable2;
