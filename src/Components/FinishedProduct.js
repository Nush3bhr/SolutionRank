import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import { Check, Create } from "@material-ui/icons";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const FinishedProduct = () => {
  const [editState, setEditState] = useState(false);
  const handleEditClick = () => {
    setEditState(true);
  };
  const handleCheckClick = () => {
    setEditState(false);
    alert("Your data has been successfully saved.");
  };

  const [name, setName] = useState("Milkshake");
  const [itemCode, setItemCode] = useState("");
  const handleTextChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "itemCode") {
      setItemCode(event.target.value);
    }
  };
  const [brand, setBrand] = useState("");
  const brands = ["Amul", "MotherDairy", "Saras", "Britania"];
  const handleBrands = (event, value) => {
    // console.log("event:", event, "value:", value);
    setBrand(value);
  };

  const [Ingredients, setIngredients] = useState([]);
  const ingredient = ["Milk", "Sugar", "Added Flavour", "Milk Powder"];
  const handleIngredient = (event, value) => {
    // console.log("event:", event, "value:", value);
    setIngredients(value);
  };

  const [countries, setCountries] = useState([]);
  const country = [
    { name: "India" },
    { name: "UAE" },
    { name: "Canada" },
    { name: "America" },
  ];
  const handleCountry = (event, value) => {
    // console.log("event:", event, "value:", value);
    setCountries(value);
  };
  const [parameter, setParameter] = useState({});
  const parameters = [
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
  const handleParameter = (event, value) => {
    // console.log("event:", event, "value:", value);
    setParameter(value);
  };
  const [plant, setPlant] = useState({});
  const plants = [
    {
      name: "Nature's Touch LLC",
    },
    {
      name: "Herbel Plus",
    },
  ];
  const handlePlants = (event, value) => {
    console.log("event:", event, "value:", value);
  };
  return (
    <Grid container spacing={3}>
      <Grid item lg={12}>
        <h1>General Information</h1>
      </Grid>
      <Grid item lg={12} style={{ textAlign: "right" }}>
        {editState ? (
          <Check onClick={handleCheckClick} />
        ) : (
          <Create onClick={handleEditClick} />
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Name:</h3>
        {editState ? (
          <TextField
            variant="outlined"
            onChange={handleTextChange}
            value={name}
            name="name"
          />
        ) : (
          name
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Brand:</h3>
        {editState ? (
          <Autocomplete
            onChange={handleBrands}
            value={brand}
            options={brands}
            //   getOptionLabel={(option) => option.title}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Brand" variant="outlined" />
            )}
          />
        ) : (
          brand
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Ingredients:</h3>
        {editState ? (
          <Autocomplete
            multiple
            value={Ingredients}
            onChange={handleIngredient}
            options={ingredient}
            //   getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Ingredint"
              />
            )}
          />
        ) : (
          Ingredients.join(", ")
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Contry of Sale:</h3>
        {editState ? (
          <Autocomplete
            multiple
            value={countries}
            onChange={handleCountry}
            style={{ width: 300 }}
            options={country}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                label="Select Country"
              />
            )}
          />
        ) : (
          countries.map((element, index) => element.name).join(", ")
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Parameter:</h3>
        {editState ? (
          <Autocomplete
            onChange={handleParameter}
            value={parameter}
            options={parameters}
            getOptionLabel={(option) => option.name}
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
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Item Code:</h3>
        {editState ? (
          <TextField
            value={itemCode}
            onChange={handleTextChange}
            name="itemCode"
            variant="outlined"
          />
        ) : (
          itemCode
        )}
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <h3>Plants:</h3>
        {editState ? (
          <Autocomplete
            onChange={handlePlants}
            value={plant}
            options={plants}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Select Plant" variant="outlined" />
            )}
          />
        ) : (
          plant.name
        )}
      </Grid>
    </Grid>
  );
};
export default FinishedProduct;
