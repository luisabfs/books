import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputText = styled.input`
  background-color: #eee;
  border: 0;
  border-radius: 7px;
  padding: 15px;
  margin-right: 10px;
  width: 350px;
  outline: 0;
  font-size: 14px;

  &::placeholder {
    color: #696969;
    font-size: 14px;
  }
`;

export const Button = styled.button`
  border: 0;
  border-radius: 7px;
  background: #a3543d;
  height: 45px;
  color: #fff;
  padding: 10px;
  /* font-size: 14px; */
`;
