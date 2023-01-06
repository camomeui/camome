import Link from "next/link";
import React from "react";

import { Button } from "@camome/components/Button";

type Props = {
  className?: string;
};

export default function BuyButton({ className }: Props) {
  return (
    <Button
      component={Link}
      href="https://rubiq.gumroad.com/l/saazy"
      className={className}
    >
      Buy for $39
    </Button>
  );
}
