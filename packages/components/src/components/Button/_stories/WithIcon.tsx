import {
  ArrowPathIcon,
  PaperAirplaneIcon,
  CloudArrowDownIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

import { Button } from "@camome/components/Button";

import styles from "./WithIcon.module.scss";

export default function WithIcon() {
  return (
    <div className={styles.container}>
      <Button
        leftIcon={<ArrowPathIcon stroke-width="2.25" />}
        size="sm"
        variant="outline"
      >
        Auto-sync
      </Button>
      <Button
        rightIcon={<PaperAirplaneIcon stroke-width="2.25" />}
        size="sm"
        variant="ghost"
      >
        Send
      </Button>

      <Button
        leftIcon={<CloudArrowDownIcon stroke-width="2.25" />}
        variant="subtle"
      >
        Download
      </Button>
      <Button rightIcon={<ChatBubbleLeftEllipsisIcon stroke-width="2.5" />}>
        Chat with us
      </Button>

      <Button
        leftIcon={<HeartIcon stroke-width="2.25" />}
        size="lg"
        variant="ghost"
        colorScheme="success"
      >
        Like
      </Button>
      <Button
        rightIcon={<TrashIcon stroke-width="2" />}
        size="lg"
        colorScheme="danger"
      >
        Remove
      </Button>
    </div>
  );
}
