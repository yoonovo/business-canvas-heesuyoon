import styled from "styled-components";

const StyledRequiredMark = styled.span`
  color: rgba(255, 77, 79, 1);
  font-size: 16px;
  font-weight: 400;
  margin-left: 4px;
`;

export default function RequiredMark({ label }: { label: string }) {
  return (
    <>
      {label}
      <StyledRequiredMark>*</StyledRequiredMark>
    </>
  );
}
