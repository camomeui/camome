import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "@camome/components/Button";
import { Checkbox } from "@camome/components/Checkbox";
import { FormField } from "@camome/components/FormField";
import { Radio } from "@camome/components/Radio";
import { RadioGroup } from "@camome/components/RadioGroup";
import { Select } from "@camome/components/Select";
import { TextInput } from "@camome/components/TextInput";
import { Textarea } from "@camome/components/Textarea";

type FormSchema = {
  firstName: string;
  lastName: string;
  jobTitle: "developer" | "designer" | "other";
  message: string;
  favorite: "pen" | "pineapple" | "apple";
  privacy: boolean;
};

const errMsg = { required: "This field is required." } as const;

export default function WithReactHookForm() {
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
    <div style={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} style={styles.form}>
        <div style={styles.col2}>
          <TextInput
            label="First name"
            error={errors.firstName?.message}
            {...register("firstName", {
              required: errMsg.required,
            })}
            fill
          />
          <TextInput
            label="Last name"
            error={errors.lastName?.message}
            {...register("lastName", {
              required: errMsg.required,
            })}
            fill
          />
        </div>
        <RadioGroup label="Job title" aria-required orientation="horizontal">
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
        <Select
          label="Favorite thing"
          error={errors.favorite?.message}
          {...register("favorite", {
            required: errMsg.required,
          })}
          fill
        >
          <option value="pen">Pen</option>
          <option value="pineapple">Pineapple</option>
          <option value="apple">Apple</option>
        </Select>
        <Textarea
          label="Message"
          error={errors.message?.message}
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
        <Checkbox
          label="Agree to Privacy Policy"
          {...register("privacy", {
            required: errMsg.required,
          })}
          error={errors.privacy?.message}
        />
        <Button type="submit" variant="soft">
          Submit
        </Button>
      </form>
      <output style={styles.output}>
        {data ? JSON.stringify(data, null, 2) : "// Submit to see JSON data"}
      </output>
    </div>
  );
}

const container = {
  display: "grid",
  gap: "2rem",
  width: "100%",
};

const col2 = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "1rem",
  placeItems: "start stretch",
};

const size = {
  width: "min(calc(100% - 1rem), 28rem)",
  margin: "0 auto",
};

const form = {
  ...size,
  display: "grid",
  gap: "1.5rem",
};

const output = {
  ...size,
  padding: "1rem",
  borderRadius: "var(--cmm-rounded-lg)",
  backgroundColor: "var(--cmm-color-black)",
  color: "var(--cmm-color-white)",
  fontSize: "var(--cmm-font-size-sm)",
  display: "grid",
  placeContent: "center start",
  whiteSpace: "pre-wrap",
} as const;

const styles = {
  container,
  col2,
  form,
  output,
};
