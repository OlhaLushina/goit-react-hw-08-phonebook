import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  background-image: linear-gradient(-180deg, #3182ce 0%, #2b6cb0 100%);
  color: #ebf8ff;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(-180deg, #63b3ed 0%, #3182ce 100%);
  }
`;
/*
export const Button = styled.button`
  padding: 10px 20px;
  background-image: linear-gradient(-180deg, #37aee2 0%, #1e96c8 100%);
  color: lime;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  :hover {
    background-image: linear-gradient(-180deg, #1d95c9 0%, #17759c 100%);
  }
`;
*/
