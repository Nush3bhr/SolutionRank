import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Check, Create } from "@material-ui/icons";
import { TextField } from "@material-ui/core";

const Demo = (props) => {
  const jsonData = {
    success: true,
    data: {
      shelfLife: {
        value: "50",
        uom: "Days",
      },
      countryOfOrigin: [
        {
          code: "IN",
          name: "India",
          countryCode: "91",
          phoneNumberLength: 10,
        },
        {
          code: "CA",
          name: "Canada",
          countryCode: "1",
          suggested: true,
          phoneNumberLength: 10,
        },
      ],
      plants: [
        {
          name: "Nature's Touch LLC",
        },
        {
          name: "Herbel Plus",
        },
      ],
      variety: [
        {
          name: "Fuji",
          description: "Fuji",
        },
        {
          name: "Food",
          description: "Some food",
        },
      ],
      parameter: [
        {
          name: "Param ",
        },
        {
          name: "FP1",
        },
        {
          name: "param2",
        },
      ],
      name: "Apple Organic Sliced Fuji  5/8",
      itemCode: "APPOSMFJ",
      foodType: {
        name: "Fruits",
        description: "Fruits",
      },
      rawMaterialGroup: {
        scope: "Custom",
        _id: "5f7de24633603b0008e50ff4",
        name: "Apple",
        description: "Apple",
      },
      unitOfMeasurement: {
        name: "Kilograms",
        symbol: "kg",
        description: "To measure weight / mass of a material ",
      },
      grade: {
        name: "Grade A",
        description: "A Grade",
      },
      description:
        "An apple is an edible fruit produced by an apple tree. Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus.",
      netWeight: "100",
    },
  };

  const [isEditable, setIsEditable] = useState(false);

  return (
    <Grid
      container
      spacing={3}
      style={{ padding: "auto", paddingLeft: "20px" }}
    >
      <Grid container>
        <Grid item lg={8}>
          <h1>General Information</h1>
        </Grid>
        <Grid item container justify="flex-end">
          <Create onClick={() => setIsEditable(true)} />

          <Check onClick={() => setIsEditable(false)} />
        </Grid>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Raw Material Name</h3>

        {isEditable ? (
          <TextField value={jsonData.data.rawMaterialGroup.name} />
        ) : (
          jsonData.data.rawMaterialGroup.name
        )}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Item Code:</h3>
        {jsonData.data.itemCode}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Shelf Life:</h3>
        {jsonData.data.shelfLife.value + " " + jsonData.data.shelfLife.uom}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Food Type</h3>
        {jsonData.data.foodType.name}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Food Group</h3>
        {jsonData.data.rawMaterialGroup.name}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Country of origin:</h3>
        <div>
          {jsonData.data.countryOfOrigin.map((e, i) => e.name).join(", ")}
        </div>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Net Weight:</h3>
        {jsonData.data.netWeight + " " + jsonData.data.unitOfMeasurement.name}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Food Grade:</h3>
        {jsonData.data.grade.name}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Food Variety:</h3>
        {jsonData.data.variety.map((element, index) => {
          return <div>{element.name}</div>;
        })}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Parameters:</h3>
        {jsonData.data.parameter.map((element, index) => {
          return <div>{element.name}</div>;
        })}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Plants:</h3>
        {jsonData.data.plants.map((element, index) => {
          return <div key={index}>{element.name}</div>;
        })}
      </Grid>

      <Grid item lg={12} sm={6} md={4}>
        <h3>Description:</h3>
        {jsonData.data.description}
      </Grid>
    </Grid>
  );
};
export default Demo;
