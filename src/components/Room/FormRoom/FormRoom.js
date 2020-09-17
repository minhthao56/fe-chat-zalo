import React from "react";
import { Button } from "../../index";
import { Send } from "react-feather";
import "./FormRoom.scss";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function FormRoom({ handleSendMess }) {
  // Validation
  const SignUpSchema = Yup.object().shape({
    mes: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      mes: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values, { resetForm }) => handleSendMess(values, resetForm),
  });
  return (
    <form className="form-room" onSubmit={formik.handleSubmit}>
      <input
        type="text"
        placeholder="Your messenage"
        className="form-room__input"
        id="mes"
        name="mes"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.mes}
      />
      <Button type="submit" className="form-room__btn">
        <Send size={18} />
      </Button>
    </form>
  );
}
