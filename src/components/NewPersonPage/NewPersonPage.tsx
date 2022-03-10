import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { addPerson } from "./data";

export function NewPersonPage() {
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm();

  const [saveResult, setSaveResult] = React.useState("not saved");

  async function onSubmit(data: FieldValues) {
    const dataToPost = { ...data, score: parseInt(data.score, 10) };
    const result = await addPerson(dataToPost);
    setSaveResult(result.ok ? "success" : "error");
  }

  return (
    <>
      <h3>New person</h3>
      <div>
        <Link to="/">
          Home
        </Link>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            {...register("name", { required: true })}
          />
          {errors.name && errors.name.type === "required" && (
            <span>You must enter your name</span>
          )}
        </div>
        <div>
          <label htmlFor="score">Score</label>
          <input
            type="number"
            id="score"
            {...register("score", { required: true, min: 0, max: 10 })}
          />
          {errors.score &&
            (errors.score.type === "required" ||
              errors.score.type === "min" ||
              errors.score.type === "max") && (
              <span>
                You must enter a score between 0 and 10
              </span>
            )}
        </div>
        <button type="submit" disabled={isSubmitting}>
          Save
        </button>
        {saveResult === "success" && (
          <p>
            The person was successfully added
          </p>
        )}
        {saveResult === "error" && (
          <p>
            There was a problem adding this person
          </p>
        )}
      </form>
    </>
  );
}
