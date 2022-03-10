import React from "react";
import { useForm } from "react-hook-form";
import { post } from "./data";

export type TFormData = {
  [x: string]: any;
};

export const ContactForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    formState,
  } = useForm();

  const onSubmit = async (data: TFormData) => {
    await post(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <div className="row">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...register("name", { required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span className="field-error">You must enter your name</span>
        )}
      </div>
      <div className="row">
        <label htmlFor="department">Department</label>
        <select multiple id="department" {...register("department")}>
          <option value="sales">Sales</option>
          <option value="support">Support</option>
          <option value="finance">Finance</option>
        </select>
      </div>
      <div className="row">
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message", { required: true })} />
        {errors.message && errors.message.type === "required" && (
          <span className="field-error">You must enter a message</span>
        )}
      </div>
      <button type="submit" onMouseDown={() => console.log("mouseDown")}>
        Save
      </button>
      {formState.isSubmitSuccessful && (
        <p className="success-message">Successfully saved</p>
      )}
    </form>
  );
};
