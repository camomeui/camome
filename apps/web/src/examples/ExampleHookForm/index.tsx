import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import {
  Button,
  Checkbox,
  FormControl,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  TextInput,
} from "@camome/components";

import styles from "./styles.module.scss";

type FormSchema = {
  firstName: string;
  lastName: string;
  jobTitle: "developer" | "designer" | "other";
  message: string;
  favorite: "pen" | "pineapple" | "apple";
  privacy: boolean;
};

const errMsg = { required: "This field is required." } as const;

export default function ExampleHookForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormSchema>({
    defaultValues: {
      jobTitle: "developer",
    },
  });
  const [data, setData] = React.useState<FormSchema>();

  const onSubmit: SubmitHandler<FormSchema> = (data) => {
    setData(data);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles["col-2"]}>
          <FormControl labelText="First name" error={errors.firstName?.message}>
            <TextInput
              {...register("firstName", {
                required: errMsg.required,
              })}
              fill
            />
          </FormControl>
          <FormControl labelText="Last name" error={errors.lastName?.message}>
            <TextInput
              {...register("lastName", {
                required: errMsg.required,
              })}
              fill
            />
          </FormControl>
        </div>
        <FormControl labelText="Job title" error={errors.jobTitle?.message}>
          <RadioGroup aria-required direction="horizontal">
            <Radio
              labelText="Developer"
              value="developer"
              {...register("jobTitle")}
            />
            <Radio
              labelText="Designer"
              value="designer"
              {...register("jobTitle")}
            />
            <Radio labelText="Other" value="other" {...register("jobTitle")} />
          </RadioGroup>
        </FormControl>
        <FormControl
          labelText="Favorite thing"
          error={errors.favorite?.message}
        >
          <Select
            {...register("favorite", {
              required: errMsg.required,
            })}
            fill
          >
            <option value="pen">Pen</option>
            <option value="pineapple">Pineapple</option>
            <option value="apple">Apple</option>
          </Select>
        </FormControl>
        <FormControl labelText="Message" error={errors.message?.message}>
          <Textarea
            {...register("message", {
              required: errMsg.required,
              minLength: {
                message: "You must write at least 20 characters!",
                value: 20,
              },
            })}
            rows={4}
            fill
          />
        </FormControl>
        <Checkbox
          labelText="Agree to Privacy Policy"
          {...register("privacy", {
            required: errMsg.required,
          })}
          error={errors.privacy?.message}
        />
        <Button type="submit" variant="subtle">
          Submit
        </Button>
      </form>
      <output className={styles.output}>
        {data ? JSON.stringify(data, null, 2) : "// Submit to see JSON data"}
      </output>
    </div>
  );
}
