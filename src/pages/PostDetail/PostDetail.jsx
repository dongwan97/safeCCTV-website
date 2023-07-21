import { useEffect, useRef, useState } from 'react';
import {
  CommentContainer,
  CommentInput,
  Content,
  Date,
  PostOwnerName,
  Root,
  Title,
  UserNickname,
  ViewCount,
} from './styled';
import samplePostDetailData from 'constants/samplePostDetail.json';
import sampleCommentList from 'constants/sampleComment.json';
import { useParams } from 'react-router-dom';
import { Comment } from 'components/Comment';

export const PostDetail = () => {
  const { postId } = useParams();
  const inputRef = useRef();
  const [postDetailData, setPostDetailData] = useState(samplePostDetailData.samplePostDetail[+postId]);
  const [currentCommentList, setCurrentCommentList] = useState(sampleCommentList.commentList);
  const [commentInput, setCommentInput] = useState('');
  const onChange = ({ target: { value } }) => {
    setCommentInput(value);
  };
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        if (commentInput.length === 0) return;
        inputRef.current.disabled = true;
        setTimeout(() => {
          inputRef.current.disabled = false;
          inputRef.current.focus();
        }, 0); //한국어 입력 오류 방지용 코드입니다.
        setCurrentCommentList((prev) =>
          prev.concat({
            commentId: currentCommentList[currentCommentList.length - 1].commentId + 1,
            content: commentInput,
            commentOwnerName: '현재 로그인 한 사용자 닉네임',
            date: '새 댓글 날짜',
          })
        );
        //댓글 저장 api
        setCommentInput('');
      }
    }
  };
  const deleteComment = (id) => {
    setCurrentCommentList((prev) => prev.filter((comment, index) => comment.commentId !== id));
    //deleteComment api
  };
  useEffect(
    () => {},
    [
      //api로 detail 정보 받아옵니다. 백엔드 완료후 react router loader 함수로 다시 구현
    ]
  );

  return (
    <Root>
      <Title>{postDetailData.title}</Title>
      <PostOwnerName>{postDetailData.postOwnerName}</PostOwnerName>
      <Content>{postDetailData.content}</Content>
      <Date>{postDetailData.date}</Date>
      <ViewCount>{postDetailData.ViewCount}</ViewCount>
      <UserNickname>로그인한 사용자의 닉네임</UserNickname>
      <CommentContainer>
        {currentCommentList.map((comment) => (
          <Comment {...comment} key={comment.commentId} deleteComment={deleteComment} />
        ))}
      </CommentContainer>
      <CommentInput value={commentInput} onChange={onChange} onKeyDown={onKeyDown} ref={inputRef} />
    </Root>
  );
};
