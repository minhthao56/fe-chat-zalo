import React, { useState } from "react";
import { Button } from "../../index";
import { Send, Smile } from "react-feather";
import "./FormRoom.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";

export default function FormRoom({ handleSendMess }) {
  const [isShowEmoji, setIsShowEmoji] = useState(false);
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
      <div className="form-room__media">
        {isShowEmoji && (
          <div className="form-room__emoji">
            <Picker set="facebook" />
          </div>
        )}
        <Smile
          className="form-room__icon"
          onClick={() => setIsShowEmoji(!isShowEmoji)}
        />
      </div>
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
