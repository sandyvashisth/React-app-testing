import React, { useState } from "react";

type FieldValues = {
  [key: string]: string;
};

export const useForm = () => {
  const [values, setValues] = useState<FieldValues>({});

  const register = (name: string) => {
    return {
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues((v) => ({ ...v, [name]: e.target.value }));
      },
    };
  };

  const handleSubmit =
    (callback: (values: FieldValues) => void) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      callback(values);
    };

  return {
    values,
    register,
    handleSubmit,
  };
};
