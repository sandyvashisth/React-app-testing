import React from "react";
import { useForm } from "react-hook-form";
import { post } from "./data";

export type TFormData = { attachment?: File[]; [key: string]: any };

export const AttachmentForm = () => {
  const [fileNames, setFileNames] = React.useState<string>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = async (data: TFormData) => {
    if (data?.attachment) {
      await post(data);
      setFileNames(
        Array.from(data?.attachment)
          .map((att: File) => att?.name)
          .join(", ")
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="form">
      <div className="row">
        <label htmlFor="attachment">Attachment</label>
        <input
          type="file"
          multiple
          disabled={isSubmitSuccessful}
          id="attachment"
          {...register("attachment", { required: true })}
        />
      </div>
      {errors.name && errors.name.type === "required" && (
        <span className="field-error">You must enter your name</span>
      )}
      <button type="submit" disabled={isSubmitSuccessful}>
        Upload
      </button>
      {isSubmitSuccessful && (
        <p className="success-message" data-testid="successMessage">Successfully uploaded {fileNames}</p>
      )}
    </form>
  );
};
