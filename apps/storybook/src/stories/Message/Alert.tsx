import { Message } from "@camome/core/Message";

export default function Alert() {
  return <Message>This is an alert message</Message>;
}

Alert.parameters = {
  layout: "padded",
};
