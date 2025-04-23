import styled from "styled-components";
import { Modal } from "antd";

export const StyledModal = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }

  .ant-modal-close {
    top: 6px;
  }

  .ant-modal-title {
    font-size: 14px;
    font-weight: 600;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(240, 240, 240, 1);
  }

  .ant-form-item-label label {
    font-size: 16px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.45);
  }

  .ant-modal-body {
    padding: 0 20px;
  }

  .ant-modal-footer {
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.02);
    border-top: 1px solid rgba(0, 0, 0, 0.06);
  }
`;
