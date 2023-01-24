import { Avatar } from "@camome/core/Avatar";
import { AvatarGroup } from "@camome/core/AvatarGroup";

export default function Default() {
  return (
    <AvatarGroup>
      <Avatar size="sm" />
      <Avatar src="/demo/avatar-1.jpg" alt="avatar" size="sm" />
      <Avatar src="/demo/avatar-2.jpg" alt="avatar" size="sm" />
    </AvatarGroup>
  );
}
