import { Message } from "@camome/components/Message";

export default function Variant() {
  return (
    <>
      <Message status="success" title="Success">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="info" title="Info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="warn" title="Warn">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
      <Message status="danger" title="Danger">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Message>
    </>
  );
}
