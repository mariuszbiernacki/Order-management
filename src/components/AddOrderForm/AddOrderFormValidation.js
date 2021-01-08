import * as Yup from "yup";

export const addOrderValidationSchema = Yup.object().shape({
  clientName: Yup.string().required("Podaj nazwę klienta"),
  payment: Yup.string().required("Podaj sumę do zapłaty"),
});
