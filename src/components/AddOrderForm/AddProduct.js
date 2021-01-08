import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddOrderTemplate from "../../template/AddOrderTemplate";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const AddProduct = ({
  productName,
  productType,
  productPrice,
  productQuantity,
  handleProductTypeChange,
  handleAddProduct,
  handleProductNameChange,
  handleProductQuantityChange,
  handleProductPriceChange,
  handleShowProductFormClose,
}) => {
  const classes = useStyles();

  return (
    <>
      <div>
        <AddOrderTemplate>
          <TextField
            id="outlined-basic"
            label="Nazwa produktu"
            variant="outlined"
            name="productName"
            required
            value={productName}
            onChange={handleProductNameChange}
          />
        </AddOrderTemplate>
        <AddOrderTemplate>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="demo-simple-select-outlined-label">
              typ produktu
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={productType}
              onChange={handleProductTypeChange}
              label="produkt"
            >
              <MenuItem value={"płyty"}>płyty</MenuItem>
              <MenuItem value={"papiery"}>papiery</MenuItem>
              <MenuItem value={"gumy"}>gumy</MenuItem>
              <MenuItem value={"szczeliwa"}>szczeliwa</MenuItem>
              <MenuItem value={"inne"}>inne</MenuItem>
            </Select>
          </FormControl>
        </AddOrderTemplate>
        <AddOrderTemplate>
          <TextField
            id="outlined-basic"
            label="ilość"
            variant="outlined"
            name="productQuantity"
            type="number"
            required
            value={productQuantity}
            onChange={handleProductQuantityChange}
          />
        </AddOrderTemplate>
        <AddOrderTemplate>
          <TextField
            id="outlined-basic"
            label="cena za jeden produkt"
            variant="outlined"
            name="productPrice"
            type="number"
            required
            value={productPrice}
            onChange={handleProductPriceChange}
          />
        </AddOrderTemplate>
        <AddOrderTemplate>
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddProduct}
          >
            dodaj
          </Button>
        </AddOrderTemplate>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleShowProductFormClose}
      >
        anuluj
      </Button>
    </>
  );
};

export default AddProduct;
