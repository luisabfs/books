import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin: 10px;
  padding: 10px;
  width: 200px;

  img {
    width: 100px;
    margin-bottom: 5px;
    border-radius: 4px;
  }

  span {
    font-size: 14px;
    font-weight: bold;
  }
`;
