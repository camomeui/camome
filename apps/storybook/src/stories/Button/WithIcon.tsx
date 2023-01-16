import {
  ArrowPathIcon,
  PaperAirplaneIcon,
  CloudArrowDownIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@camome/core";

import styles from "./WithIcon.module.scss";

export default function WithIcon() {
  return (
    <div className={styles.container}>
      <Button
        leftIcon={<ArrowPathIcon strokeWidth="2.25" />}
        size="sm"
        variant="outline"
      >
        Auto-sync
      </Button>
      <Button
        rightIcon={<PaperAirplaneIcon strokeWidth="2.25" />}
        size="sm"
        variant="ghost"
      >
        Send
      </Button>

      <Button
        leftIcon={<CloudArrowDownIcon strokeWidth="2.25" />}
        variant="soft"
      >
        Download
      </Button>
      <Button rightIcon={<ChatBubbleLeftEllipsisIcon strokeWidth="2.5" />}>
        Chat with us
      </Button>

      <Button
        leftIcon={<HeartIcon strokeWidth="2.25" />}
        size="lg"
        variant="ghost"
        colorScheme="success"
      >
        Like
      </Button>
      <Button
        rightIcon={<TrashIcon strokeWidth="2" />}
        size="lg"
        colorScheme="danger"
      >
        Remove
      </Button>
    </div>
  );
}
