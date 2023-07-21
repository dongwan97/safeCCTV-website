import { useEffect, useRef, useState } from 'react';
import {
  CommentOwnerName,
  Content,
  Date,
  DeleteTypo,
  EditInput,
  EditTypo,
  FunctionTypoContainer,
  Root,
} from './styled';

export const Comment = ({ commentId, commentOwnerName, content, date, deleteComment }) => {
  const inputRef = useRef();
  const [currentContent, setCurrentContent] = useState(content);
  const [inputValue, setInputValue] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const onClickEditTypo = () => {
    setIsEditing((prev) => !prev);
  };
  const onClickDeleteTypo = () => {
    deleteComment(commentId);
  };
  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) return;
      e.preventDefault();
      //edit comment api
      setCurrentContent(inputValue);
      setIsEditing(false);
    }
  };
  useEffect(() => {
    if (!isEditing) return;
    inputRef.current.focus();
    const len = inputValue.length; // 현재 입력 값의 길이
    inputRef.current.selectionStart = len; // 커서 시작 위치를 값의 끝으로 설정
    inputRef.current.selectionEnd = len; // 커서 끝 위치를 값의 끝으로 설정
  }, [isEditing]);

  return (
    <Root>
      <CommentOwnerName>
        {commentId}. {commentOwnerName}
      </CommentOwnerName>
      <Content>
        {isEditing ? (
          <EditInput value={inputValue} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
        ) : (
          currentContent
        )}
      </Content>
      <Date>{date}</Date>
      <FunctionTypoContainer>
        <EditTypo onClick={onClickEditTypo}>수정</EditTypo>
        <DeleteTypo onClick={onClickDeleteTypo}>삭제</DeleteTypo>
      </FunctionTypoContainer>
    </Root>
  );
};
