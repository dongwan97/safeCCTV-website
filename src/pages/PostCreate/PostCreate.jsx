import { useState } from 'react';
import { ButtonContainer, CancelButton, ContentInput, Root, TitleInput, TitleTypo } from './styled';
import { useNavigate } from 'react-router-dom';
import { RegisterButton } from 'components/StyledButton';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { createPost } from 'api/post/createPost';

export const PostCreate = () => {
  const [inputValue, setInputValue] = useState({ title: '', content: '' });
  const navigate = useNavigate();
  const onChange = ({ target }) => {
    setInputValue({ ...inputValue, [target.name]: target.value });
  };
  const onClickRegisterButton = () => {
    createPost({
      title: inputValue.title,
      nickname: '성훈',
      id: process.env.REACT_APP_USER_ID,
      content: inputValue.content,
    }).then((res) => {
      console.log('createPostResponse', res);
      navigate(-1);
    });
  };
  const onClickCancelButton = () => {
    navigate('/main');
  };
  return (
    <Root>
      <TitleTypo>글쓰기 ✏️</TitleTypo>
      <TitleInput placeholder="제목을 입력하세요." name="title" onChange={onChange} />
      <ContentInput placeholder="내용을 입력하세요." name="content" onChange={onChange} />
      <ButtonContainer>
        <StyledButton onClickStyledButton={onClickRegisterButton} width={80}>
          등록
        </StyledButton>
        <StyledButton onClickStyledButton={onClickCancelButton} width={80}>
          취소
        </StyledButton>
      </ButtonContainer>
    </Root>
  );
};
