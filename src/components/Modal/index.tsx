import { Modal } from "antd";
import { ModalProps } from "antd";

function CommonModal({
  open,
  onOk,
  onCancel,
  children,
  ...restProp
}: ModalProps) {
  return (
    <Modal
      open={true} //isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      okText="저장"
      cancelText="취소"
      {...restProp}
    >
      {children}
    </Modal>
  );
}

export default CommonModal;
