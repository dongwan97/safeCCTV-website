import { useState } from 'react';
import { ButtonContainer, CancelButton, ContentInput, RegisterButton, Root, TitleInput } from './styled';
import { useNavigate } from 'react-router-dom';

export const PostCreate = () => {
  const [inputValue, setInputValue] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const onChange = ({ target }) => {
    setInputValue({ ...inputValue, [target.name]: target.value });
  };
  const onClickRegisterButton = () => {
    //등록 api
    navigate('/main');
  };
  const onClickCancelButton = () => {
    navigate('/main');
  };
  return (
    <Root>
      <TitleInput placeholder="제목을 입력하세요." name="title" onChange={onChange} />
      <ContentInput placeholder="내용을 입력하세요." name="content" onChange={onChange} />
      <ButtonContainer>
        <RegisterButton onClick={onClickRegisterButton}>등록</RegisterButton>
        <CancelButton onClick={onClickCancelButton}>취소</CancelButton>
      </ButtonContainer>
    </Root>
  );
};
