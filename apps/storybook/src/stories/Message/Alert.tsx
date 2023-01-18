import { Message } from "@camome/core/Message";

export default function Alert() {
  return <Message title="This is an alert message" isAlert />;
}

Alert.parameters = {
  layout: "padded",
};
