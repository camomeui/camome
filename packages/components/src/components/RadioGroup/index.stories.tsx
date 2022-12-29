import type { Meta, StoryObj } from "@storybook/react";

import { FormControl } from "@camome/components/FormControl";
import { Radio } from "@camome/components/Radio";
import { RadioGroup, RadioGroupProps } from "@camome/components/RadioGroup";

const meta: Meta<typeof RadioGroup> = {
  component: RadioGroup,
  decorators: [
    (Story) => (
      <FormControl labelText="Gundam kids">
        <Story />
      </FormControl>
    ),
  ],
};
export default meta;
type Story = StoryObj<RadioGroupProps>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Radio
          labelText="Katz"
          name="gundam-kids-1"
          value="katz"
          defaultChecked
        />
        <Radio labelText="Letz" name="gundam-kids-1" value="letz" />
        <Radio labelText="Kikka" name="gundam-kids-1" value="kikka" />
      </>
    ),
  },
};
