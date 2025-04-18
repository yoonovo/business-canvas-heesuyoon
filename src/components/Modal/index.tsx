import { Modal } from "antd";
import { ModalProps } from "antd";

function CommonModal({ children, ...restProp }: ModalProps) {
  return (
    <Modal okText="저장" cancelText="취소" {...restProp}>
      {children}
    </Modal>
  );
}

export default CommonModal;
