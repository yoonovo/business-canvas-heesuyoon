import { Modal } from "antd";
import RecordForm from "../RecordForm";
import { ModalProps } from "antd";

function CommonModal({ open, onOk, onCancel, ...restProp }: ModalProps) {
  return (
    <Modal
      open={true} //isModalOpen}
      onOk={onOk}
      onCancel={onCancel}
      okText="저장"
      cancelText="취소"
      {...restProp}
    >
      <RecordForm />
    </Modal>
  );
}

export default CommonModal;
