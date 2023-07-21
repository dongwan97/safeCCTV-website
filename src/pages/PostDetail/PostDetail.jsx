import { useEffect, useState } from 'react';
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
import { useParams } from 'react-router-dom';

export const PostDetail = () => {
  const { postId } = useParams();
  const [postDetailData, setPostDetailData] = useState(samplePostDetailData.samplePostDetail[+postId]);
  const [currentCommentList, setCurrentCommentList] = useState([]);

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
      <CommentContainer>{/* comment.map */}</CommentContainer>
      <CommentInput />
    </Root>
  );
};
