import type { Field, RuleType } from "react-querybuilder";
import { defaultOperators, toFullOption } from "react-querybuilder";

export const validator = (r: RuleType) => !!r.value;

export const fields = (
  [
    {
      name: "firstName",
      label: "First Name",
      placeholder: "Enter first name",
      validator,
    },
    {
      name: "lastName",
      label: "Last Name",
      placeholder: "Enter last name",
      defaultOperator: "beginsWith",
      validator,
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter email",
      defaultOperator: "beginsWith",
      validator,
    },
    {
      name: "phone",
      label: "Phone",
      placeholder: "Enter phone",
      defaultOperator: "beginsWith",
      validator,
    },
    {
      name: "age",
      label: "Age",
      placeholder: "Enter age",
      inputType: "number",
      validator,
    },
    {
      name: "city",
      label: "City",
      placeholder: "Enter city",
      defaultOperator: "beginsWith",
      validator,
    },
    {
      name: "country",
      label: "Country",
      placeholder: "Enter Country",
      defaultOperator: "beginsWith",
      validator,
    },
    {
      name: "gender",
      label: "Gender",
      operators: defaultOperators.filter((op) => op.name === "="),
      valueEditorType: "radio",
      values: [
        { name: "M", label: "Male" },
        { name: "F", label: "Female" },
      ],
    },
    { name: "birthdate", label: "Birth Date", inputType: "date" },
  ] satisfies Field[]
).map((o) => toFullOption(o));
