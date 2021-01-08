import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import AddOrderTemplate from "../../template/AddOrderTemplate";

const AddOrderFormContent = ({
  values,
  handleChange,
  currency,
  deliveryDate,
  paymentDate,
  deliveryDateError,
  paymentDateError,
  handleCurrencyChange,
  handleDeliveryDateChange,
  handlePaymentDateChange,
}) => {
  return (
    <Grid container>
      <AddOrderTemplate>
        <TextField
          id="outlined-basic"
          label="Nazwa klienta"
          variant="outlined"
          name="clientName"
          value={values.clientName}
          onChange={handleChange}
        />
        <ErrorMessage name="clientName" />
      </AddOrderTemplate>

      <AddOrderTemplate>
        <FormControl component="fieldset">
          <FormLabel component="legend">Waluta</FormLabel>
          <RadioGroup
            aria-label="currency"
            name="currency"
            value={currency}
            onChange={handleCurrencyChange}
          >
            <FormControlLabel value="PLN" control={<Radio />} label="PLN" />
            <FormControlLabel value="EUR" control={<Radio />} label="EUR" />
          </RadioGroup>
        </FormControl>
      </AddOrderTemplate>

      <AddOrderTemplate>
        <TextField
          id="outlined-basic"
          label={`Do zapłaty(${currency})`}
          variant="outlined"
          name="payment"
          type="number"
          value={values.payment}
          onChange={handleChange}
        />
        <ErrorMessage name="payment" />
      </AddOrderTemplate>

      <AddOrderTemplate>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="data dostarczenia"
            format="dd/MM/yyyy"
            name="deliveryDate"
            value={deliveryDate}
            onChange={handleDeliveryDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <p style={{ color: "red" }}>{deliveryDateError}</p>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            name="paymentDate"
            id="date-picker-dialog"
            label="data zapłaty przez klienta"
            format="dd/MM/yyyy"
            value={paymentDate}
            onChange={handlePaymentDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
          />
        </MuiPickersUtilsProvider>
        <p style={{ color: "red" }}>{paymentDateError}</p>
      </AddOrderTemplate>
    </Grid>
  );
};

export default AddOrderFormContent;
