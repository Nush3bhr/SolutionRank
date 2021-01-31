import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Check, Create } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

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
  const [name, setName] = useState("Apple Organic Sliced Fuji 5/8");
  const [days, setDays] = useState("50 Days");
  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "days") {
      setDays(event.target.value);
    }
  };

  const [foodType, setFoodType] = useState("fruits");
  const types = ["fruits", "vegies"];
  const handleSelect = (event, value) => {
    setFoodType(value);

    // console.log("event:", event.target.value, "value", value);
  };

  const [variety, setVariety] = useState(["Food"]);
  const varieties = ["Food", "Fruit", "Fuji"];
  const [group, setGroup] = useState(["Fuji"]);
  const groups = ["Apple", "Kashmiri", "Shimla", "Fuji"];
  const handleVariety = (event, value) => {
    console.log("value:", value, "eventname:", event.target.name);
    // if (event.target.name === "variety") {
    setVariety(value);

    // } else if (event.target.name === "group") {
    //   setGroup(value);
    // }
  };

  const [parameter, setParameter] = useState({ name: "FP1" });
  const Parameters = [
    {
      name: "Param",
    },
    {
      name: "FP1",
    },
    {
      name: "param2",
    },
  ];
  const [country, setCountry] = useState("India");
  const countries = [
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
  ];
  const handleParameter = (event, value) => {
    // console.log("event:", event.name, "value:", value.name);
    if (event.target.name === "country") {
      setCountry(value);
    } else {
      setParameter(value);
    }
  };

  const [plant, setPlant] = useState([{ name: "Nature's Touch LLC" }]);
  const plants = [
    {
      name: "Nature's Touch LLC",
    },
    {
      name: "Herbel Plus",
    },
  ];
  const handlePlants = (event, value) => {
    // console.log(value);
    setPlant(value);
  };

  return (
    <Grid
      container
      spacing={3}
      style={{ padding: "auto", paddingLeft: "20px" }}
    >
      <Grid item lg={12}>
        <h1>General Information</h1>
      </Grid>
      {/* <Grid item container justify="flex-end"> */}
      <Grid item lg={12} style={{ textAlign: "right" }}>
        {!isEditable ? (
          <Create onClick={() => setIsEditable(true)} />
        ) : (
          <Check onClick={() => setIsEditable(false)} />
        )}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Raw Material Name</h3>

        {isEditable ? (
          <TextField value={name} name="name" onChange={handleChange} />
        ) : (
          name
        )}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Item Code:</h3>
        {jsonData.data.itemCode}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Shelf Life:</h3>
        {isEditable ? (
          <TextField name="days" value={days} onChange={handleChange} />
        ) : (
          days
        )}
        {/* {jsonData.data.shelfLife.value + " " + jsonData.data.shelfLife.uom} */}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Food Type</h3>
        {isEditable ? (
          <Autocomplete
            onChange={handleSelect}
            value={foodType}
            options={types}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select food" variant="outlined" />
            )}
          />
        ) : (
          foodType
        )}

        {/* {jsonData.data.foodType.name} */}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Food Group</h3>
        {isEditable ? (
          <Autocomplete
            multiple
            name="group"
            value={group}
            onChange={handleVariety}
            options={groups}
            renderInput={(params) => (
              <TextField {...params} variant="outlined" label="Select group" />
            )}
          />
        ) : (
          group.join(", ")
        )}

        {/* {jsonData.data.rawMaterialGroup.name} */}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Country of origin:</h3>

        {isEditable ? (
          <Autocomplete
            onChange={handleSelect}
            name="country"
            value={country}
            options={countries}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select country"
                variant="outlined"
              />
            )}
          />
        ) : (
          country
        )}
        {/* {jsonData.data.countryOfOrigin.map((e, i) => e.name).join(", ")} */}
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
        {isEditable ? (
          <Autocomplete
            multiple
            name="variety"
            value={variety}
            onChange={handleVariety}
            options={varieties}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select variety"
              />
            )}
          />
        ) : (
          variety.join(", ")
        )}
        {/* <div>{jsonData.data.variety.map((e, i) => e.name).join(", ")}</div> */}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Parameters:</h3>

        {isEditable ? (
          <Autocomplete
            onChange={handleParameter}
            value={parameter}
            getOptionLabel={(option) => option.name}
            options={Parameters}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Select Parameter"
                variant="outlined"
              />
            )}
          />
        ) : (
          parameter.name
        )}

        {/* <div>
          {jsonData.data.parameter
            .map((element, index) => element.name)
            .join(", ")}
        </div> */}
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <h3>Plants:</h3>
        {isEditable ? (
          <Autocomplete
            multiple
            options={plants}
            value={plant}
            style={{ width: 300 }}
            onChange={handlePlants}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select"
                // placeholder="Favorites"
              />
            )}
          />
        ) : (
          plant.map((element, index) => plant[index].name).join(", ")
        )}
        {/* <div>
          {jsonData.data.plants
            .map((element, index) => element.name)
            .join(", ")}
        </div> */}
      </Grid>

      <Grid item lg={8} sm={6} md={4}>
        <h3>Description:</h3>
        {jsonData.data.description}
      </Grid>
    </Grid>
  );
};
export default Demo;
