import { useEffect, useRef, useState } from 'react';
import {
  CommentContainer,
  CommentInput,
  CommentInputContainer,
  Content,
  Date,
  DeleteTypo,
  EditInput,
  EditTypo,
  FunctionTypoContainer,
  Line,
  RightContainer,
  PostOwnerName,
  Root,
  Title,
  LeftContainer,
  UserNickname,
  ViewCount,
  UpperContainer,
  ButtonWrapper,
} from './styled';
import samplePostDetailData from 'constants/samplePostDetail.json';
import sampleCommentList from 'constants/sampleComment.json';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { Comment } from 'components/Comment';
import { StyledButton } from 'components/StyledButton/StyledButton';
import { increaseView } from 'api/post/increaseView';
import { checkComment } from 'api/comment/checkComment';
import { createComment } from 'api/comment/createComment';
import { findPost } from 'api/post/findPost';
import { editPost } from 'api/post/editPost';
import { deletePost } from 'api/post/deletePost';

export const PostDetail = () => {
  const loaderData = useLoaderData();
  const { postId } = useParams();
  const inputRef = useRef();
  const navigate = useNavigate();
  const [postDetailData, setPostDetailData] = useState(loaderData.postDetailData);
  const [currentCommentList, setCurrentCommentList] = useState(loaderData.commentList);
  const [inputValue, setInputValue] = useState({ post: postDetailData.content, comment: '' });
  const [currentContent, setCurrentContent] = useState(postDetailData.content);
  const [currentViewCount, setCurrentViewCount] = useState(postDetailData.viewCount);
  const [isEditing, setIsEditing] = useState(false);
  const onClickCommentRegisterButton = () => {
    createComment({
      nickname: '이성훈',
      content: inputValue.comment,
      id: process.env.REACT_APP_USER_ID,
    }).then((res) => {
      if (inputValue.comment.length === 0) return;
      inputRef.current.disabled = true;
      setTimeout(() => {
        inputRef.current.disabled = false;
        inputRef.current.focus();
      }, 0); //한국어 입력 오류 방지용 코드입니다.

      setCurrentCommentList((prev) =>
        prev.concat({
          commentId: currentCommentList[currentCommentList.length - 1].commentId + 1 ?? 0,
          content: inputValue.comment,
          nickname: '현재 로그인 한 사용자 닉네임',
          date: '새 댓글 날짜',
        })
      );
      setInputValue({ ...inputValue, comment: '' });
    });
  };
  const onClickDeleteTypo = () => {
    deletePost({ postId: +postId });
    navigate(-1); //확인 모달 띄우기
  };
  const onClickEditTypo = () => {
    editPost({});
    setIsEditing((prev) => !prev);
  };
  const onChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (!e.shiftKey) {
        e.preventDefault();
        if (e.target.name === 'comment') {
          onClickCommentRegisterButton();
        } else if (e.target.name === 'post') {
          setCurrentContent(inputValue.post);
          setIsEditing(false);
        }
      }
    }
  };
  const deleteComment = (id) => {
    //deleteComment api
    deleteComment({ commentId: id }).then((res) => {
      setCurrentCommentList((prev) => prev.filter((comment) => comment.commentId !== id));
    });
  };
  useEffect(() => {
    findPost(postId).then((res) => {
      console.log('findPost', res);
      setPostDetailData(res);
      setCurrentContent(res.content);
    });
    //api로 detail 정보 받아옵니다. 백엔드 완료후 react router loader 함수로 다시 구현
    //api로 comment 정보 받아옵니다. 백엔드 완료후 react router loader 함수로 다시 구현

    increaseView({ postId: postId }).then((res) => {
      console.log(res);
      setCurrentViewCount((prev) => prev + 1);
    });
    checkComment({ postId: postId }).then((res) => {
      console.log(res);
      setCurrentCommentList(res);
    });
  }, []);

  return (
    <Root>
      <UpperContainer>
        <LeftContainer>
          <Title>{postDetailData.title}</Title>
          <Date>{postDetailData.uploadedAt}</Date>
        </LeftContainer>
        <RightContainer>
          <PostOwnerName>{postDetailData.nickname}</PostOwnerName>
          <FunctionTypoContainer>
            <EditTypo onClick={onClickEditTypo}>수정</EditTypo>
            <DeleteTypo onClick={onClickDeleteTypo}>삭제</DeleteTypo>
          </FunctionTypoContainer>
        </RightContainer>
      </UpperContainer>
      <Line />
      {isEditing ? (
        <EditInput name="post" onChange={onChange} onKeyDown={onKeyDown} value={inputValue.post} />
      ) : (
        <Content>{currentContent}</Content>
      )}
      <ViewCount>조회수 : {currentViewCount}</ViewCount>
      <CommentContainer>
        {currentCommentList.map((comment) => (
          <Comment {...comment} key={comment.commentId} deleteComment={deleteComment} />
        ))}
      </CommentContainer>
      <CommentInputContainer>
        <UserNickname>로그인한 사용자의 닉네임</UserNickname>
        <CommentInput
          placeholder="댓글을 입력하세요"
          name="comment"
          value={inputValue.comment}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={inputRef}
        />
        <ButtonWrapper>
          <StyledButton width={90} onClickStyledButton={onClickCommentRegisterButton}>
            댓글 등록
          </StyledButton>
        </ButtonWrapper>
      </CommentInputContainer>
    </Root>
  );
};
