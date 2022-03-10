import { useForm } from "./useForm";
import { renderHook, act } from "@testing-library/react-hooks";
import React from "react";

test("values should be empty object when first rendered", () => {
  const { result } = renderHook(()=> useForm())
  expect(result.current.values).toStrictEqual({});
});


test("values should be updated when field changes", () => {
  const { result } = renderHook(() => useForm());
  const field = result.current.register("field");
  const event = { preventDefault: ()=>{}, target: {value: "test"} } as React.ChangeEvent<HTMLInputElement>;
  act(()=>{
    field.onChange(event);
  })
  expect(result.current.values).toStrictEqual({ field: "test" })
})


test("submit callback should be called when form submitted", () => {
  const onSubmit = jest.fn();
  const { result } = renderHook(()=> useForm());
  const field = result.current.register("field");
  const event = { preventDefault: ()=>{}, target: {value: "test"} } as React.ChangeEvent<HTMLInputElement>;
  act(()=>{
    field.onChange(event)
  })

  act(()=>{
    result.current.handleSubmit(onSubmit)(event)
  })

  expect(onSubmit).toHaveBeenCalledTimes(1)
  expect(onSubmit).toHaveBeenCalledWith({field: "test"})
})