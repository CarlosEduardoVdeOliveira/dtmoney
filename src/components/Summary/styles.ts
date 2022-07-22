import styled from "styled-components";

export const Conteiner = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;
  div {
    background-color: var(--shape-color);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title-color);
    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    strong {
      display: block;
      margin-top: 1.5rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }
    &.highlight-background {
      background-color: var(--green-color);
      color: var(--shape-color);
    }
  }
`;
