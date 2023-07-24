import styled from 'styled-components';

export const Root = styled.div`
  box-sizing: border-box;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const TitleInput = styled.input`
  width: 1000px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  box-sizing: border-box;
  padding: 10px 8px;
`;

export const ContentInput = styled.textarea`
  min-height: 500px;
  box-sizing: border-box;
  padding: 10px 8px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  column-gap: 5px;
`;
export const RegisterButton = styled.button`
  background-color: skyblue;
  border-radius: 20px;
  color: white;
  width: 50px;
  height: 30px;
`;

export const CancelButton = styled.button`
  border: 1px solid black;
  border-radius: 20px;
  width: 50px;
  height: 30px;
`;
