import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1rem;
  background: transparent;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  color: var(--mainGreen);
  border: 0.05rem solid var(--mainGreen);
  border-radius: 5px;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: var(--mainGreen);
    color: var(--secondGreen);
  }
  &:focus {
    outline: none;
  }
`