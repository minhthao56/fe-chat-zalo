import React, { useState, useEffect, useRef } from "react";
import "./ModalProfile.scss";
import { X, Edit, Camera } from "react-feather";
import { Avatar, Input, Button } from "../../index";
import {
  doLoseUpdateInfo,
  doLoseBlur,
  doUpdateInfoUser,
  doUpdateAvata,
  doUpdateBanner,
} from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

export default function ModalProfile() {
  const reduxUserData = useSelector((state) => state.reduxUserData);

  const [isShowInputName, setIsShowInputName] = useState(false);
  const [valueName, setValueName] = useState(reduxUserData.data.name);
  const [imageAvatar, setImageAvatar] = useState(null);
  const [imageBanner, setImageBanner] = useState(null);

  const dispatch = useDispatch();
  const wrapperRef = useRef(null);

  const handleLoseUpdateInfo = () => {
    dispatch(doLoseUpdateInfo());
    dispatch(doLoseBlur());
  };
  const handleChangeValueName = (e) => {
    const value = e.target.value;
    setValueName(value);
  };

  const handleChangeImageAvatar = (event) => {
    setImageAvatar(event.target.files[0]);
  };

  const handleChangeImageBanner = (event) => {
    setImageBanner(event.target.files[0]);
  };

  const ValidationSchema = Yup.object().shape({
    email: Yup.string("").email("Invalid email"),
    password: Yup.string("").min(8).max(10),
    confirm: Yup.string("").test("", "Mật khẩu chưa khớp", function (value) {
      return this.parent.password === value;
    }),
  });
  const formik = useFormik({
    initialValues: {
      email: reduxUserData.data.email,
      password: "",
      confirm: "",
    },
    validationSchema: ValidationSchema,
    onSubmit: (values) => {
      // const ojbName = { name: valueName };
      // const ojbValues = Object.assign(values, ojbName);
      // dispatch(doUpdateInfoUser(reduxUserData.data.id, ojbValues));

      if (valueName !== reduxUserData.data.name) {
        dispatch(doUpdateInfoUser(reduxUserData.data.id, { name: valueName }));
      }
      if (values.email !== reduxUserData.data.email) {
        dispatch(
          doUpdateInfoUser(reduxUserData.data.id, { email: values.email })
        );
      }
      if (values.password && values.confirm) {
        dispatch(
          doUpdateInfoUser(reduxUserData.data.id, {
            password: values.password,
            confirm: values.confirm,
          })
        );
      }

      const fd = new FormData();
      if (imageAvatar) {
        fd.append("file", imageAvatar);
        dispatch(doUpdateAvata(reduxUserData.data.id, fd));
      }
      if (imageBanner) {
        fd.append("file", imageBanner);
        dispatch(doUpdateBanner(reduxUserData.data.id, fd));
      }
    },
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        handleLoseUpdateInfo();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="modal-profile">
      <div className="modal-profile__container" ref={wrapperRef}>
        <div className="modal-profile__header">
          <span className="modal-profile__title">Update Information</span>
          <X
            className="modal-profile__icon"
            size={16}
            onClick={handleLoseUpdateInfo}
          />
        </div>
        <div className="modal-profile__main">
          <div
            className="modal-profile__banner"
            style={{ backgroundImage: `url(${reduxUserData.data.urlBanner})` }}
          >
            <label className="modal-profile_lablebaner">
              <Camera
                size={20}
                className="modal-profile__icon modal-profile__icon--banner"
              />
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleChangeImageBanner}
              />
            </label>

            <div className="modal-profile__avatar">
              <label className="modal-profile__lable">
                <Avatar
                  backgroundImage={reduxUserData.data.urlAvatar}
                  height={90}
                  width={90}
                />
                <Camera
                  size={20}
                  className="modal-profile__icon modal-profile__icon--camera"
                />
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={handleChangeImageAvatar}
                />
              </label>

              <div className="modal-profile__name">
                {isShowInputName ? (
                  <Input value={valueName} onChange={handleChangeValueName} />
                ) : (
                  <h4 className="modal-profile__subname">
                    {reduxUserData.data.name}
                  </h4>
                )}
                <Edit
                  className="modal-profile__icon modal-profile__icon--edit"
                  size={16}
                  onClick={() => setIsShowInputName(!isShowInputName)}
                />
              </div>
            </div>
          </div>
          <form className="modal-profile__info" onSubmit={formik.handleSubmit}>
            <span className="modal-profile__span">Email</span>
            <Input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
              borderColorErr={
                formik.touched.email && formik.errors.email ? "tomato" : null
              }
            />
            <span className="modal-profile__span">Password</span>
            <Input
              type="password"
              placeholder="New Password"
              id="password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
              borderColorErr={
                formik.touched.password && formik.errors.password
                  ? "tomato"
                  : null
              }
            />
            <span className="modal-profile__span">Confirm</span>
            <Input
              type="passowrd"
              placeholder="Confirm password"
              id="confirm"
              name="confirm"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirm}
              error={formik.touched.confirm && formik.errors.confirm}
              borderColorErr={
                formik.touched.confirm && formik.errors.confirm
                  ? "tomato"
                  : null
              }
            />
            <div className="modal-profile__action">
              <Button
                type="button"
                className="modal-profile__btn modal-profile__btn--cancel"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="modal-profile__btn modal-profile__btn--save"
              >
                Update
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
