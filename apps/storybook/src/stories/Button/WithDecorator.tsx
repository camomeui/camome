import ArrowPathIcon from "@heroicons/react/24/outline/ArrowPathIcon";
import ChatBubbleLeftEllipsisIcon from "@heroicons/react/24/outline/ChatBubbleLeftEllipsisIcon";
import CloudArrowDownIcon from "@heroicons/react/24/outline/CloudArrowDownIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import PaperAirplaneIcon from "@heroicons/react/24/outline/PaperAirplaneIcon";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

import { Button } from "@camome/core/Button";

import styles from "./WithDecorator.module.scss";

export default function WithDecorator() {
  return (
    <div className={styles.container}>
      <Button
        startDecorator={<ArrowPathIcon strokeWidth="2.25" />}
        size="sm"
        variant="outline"
      >
        Auto-sync
      </Button>
      <Button
        endDecorator={<PaperAirplaneIcon strokeWidth="2.25" />}
        size="sm"
        variant="ghost"
      >
        Send
      </Button>

      <Button
        startDecorator={<CloudArrowDownIcon strokeWidth="2.25" />}
        variant="soft"
      >
        Download
      </Button>
      <Button endDecorator={<ChatBubbleLeftEllipsisIcon strokeWidth="2.5" />}>
        Chat with us
      </Button>

      <Button
        startDecorator={<HeartIcon strokeWidth="2.25" />}
        size="lg"
        variant="ghost"
        colorScheme="success"
      >
        Like
      </Button>
      <Button
        endDecorator={<TrashIcon strokeWidth="2" />}
        size="lg"
        colorScheme="danger"
      >
        Remove
      </Button>
    </div>
  );
}
