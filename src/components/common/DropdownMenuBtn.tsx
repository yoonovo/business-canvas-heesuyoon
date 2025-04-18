import { MoreOutlined } from "@ant-design/icons";
import { Button, Dropdown } from "antd";
import type { MenuProps } from "antd";

function DropdownMenuBtn({
  buttons,
  onEdit,
  onDelete,
}: {
  buttons: MenuProps["items"];
  onEdit: () => void;
  onDelete: () => void;
}) {
  const commonButtons: MenuProps["items"] = [
    { label: "수정", key: "edit", onClick: onEdit },
    { type: "divider" },
    { label: "삭제", key: "delete", danger: true, onClick: onDelete },
  ];

  return (
    <Dropdown
      menu={{ items: buttons || commonButtons }}
      trigger={["click"]}
      overlayStyle={{ width: 150 }}
    >
      <Button color="default" variant="text" icon={<MoreOutlined />} />
    </Dropdown>
  );
}

export default DropdownMenuBtn;
