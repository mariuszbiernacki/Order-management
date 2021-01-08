import React from "react";
import TextField from "@material-ui/core/TextField";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Button from "@material-ui/core/Button";
import AddOrderTemplate from "../../template/AddOrderTemplate";

const AddBill = ({
  billNumber,
  billCompanyName,
  billPrice,
  handleBillNumberChange,
  handleBillCompanyNameChange,
  handleBillPriceChange,
  handleBillDateChange,
  handleAddBill,
  billDate,
  handleShowBillFormClose,
}) => {
  return (
    <>
      <div>
        <AddOrderTemplate>
          <TextField
            id="outlined-basic"
            label="numer rachunku"
            variant="outlined"
            name="billNumber"
            value={billNumber}
            onChange={handleBillNumberChange}
          />
        </AddOrderTemplate>
        <AddOrderTemplate>
          <TextField
            id="outlined-basic"
            label="Nazwa firmy (wierzyciela)"
            variant="outlined"
            name="companyName"
            value={billCompanyName}
            onChange={handleBillCompanyNameChange}
          />
        </AddOrderTemplate>
        <AddOrderTemplate>
          <TextField
            id="outlined-basic"
            label="kwota do zapłacenia"
            variant="outlined"
            name="billPrice"
            type="number"
            value={billPrice}
            onChange={handleBillPriceChange}
          />
        </AddOrderTemplate>
        <AddOrderTemplate>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="data uregulowania rachunku"
              format="dd/MM/yyyy"
              value={billDate}
              onChange={handleBillDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </MuiPickersUtilsProvider>
        </AddOrderTemplate>
        <AddOrderTemplate>
          <Button variant="contained" color="primary" onClick={handleAddBill}>
            dodaj
          </Button>
        </AddOrderTemplate>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={handleShowBillFormClose}
      >
        anuluj
      </Button>
    </>
  );
};

export default AddBill;
