import styled from "styled-components";

export const Conteiner = styled.div`
  margin-top: 4rem;
  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    th {
      color: var(--text-body-color);
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }
    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape-color);
      font-weight: 400;
      color: var(--text-body-color);
      border-radius: 0.25rem;
      &:first-child {
        color: var(--text-title-color);
      }
      &.deposit {
        color: var(--green-color);
      }
      &.withdraw {
        color: var(--red-color);
      }
    }
  }
`;
