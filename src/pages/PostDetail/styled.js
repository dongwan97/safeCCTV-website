import { COMMENT_MAX_WIDTH, COMMENT_MIN_WIDTH, POST_DETAIL_MAX_WIDTH, POST_DETAIL_MIN_WIDTH } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: ${POST_DETAIL_MIN_WIDTH}px;
  max-width: ${POST_DETAIL_MAX_WIDTH}px;
  padding: 15px;
  margin-bottom: 5px;
`;
export const PostOwnerName = styled.p`
  font-size: 15px;
  color: #555555;
  margin-bottom: 10px;
`;
export const Title = styled.p`
  font-weight: 800;
  font-size: 24px;
`;
export const Line = styled.hr`
  margin-top: 5px;
  border: none;
  background-color: black;
  width: 100%;
  height: 1.5px;
`;
export const Content = styled.div`
  min-height: 200px;
  white-space: pre-line;
  padding: 8px 5px;
  border-radius: 10px;
  font-size: 15px;
`;
export const Date = styled.p`
  font-size: 15px;
  color: #555555;
`;
export const ViewCount = styled.p`
  text-align: right;
  font-size: 13px;
  color: #555555;
  margin: 0 5px 5px 0;
`;
export const UserNickname = styled.p`
  margin-top: 10px;
  font-size: 15px;
  font-weight: 900;
`;

export const CommentContainer = styled.div`
  margin: 20px auto 0;
  min-width: ${COMMENT_MIN_WIDTH}px;
  max-width: ${COMMENT_MAX_WIDTH}px;
  border: 1px solid black;
  border-radius: 10px;
  border-bottom: none;
  overflow: hidden;
`;
export const UpperContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: end;
`;
export const CommentInput = styled.textarea`
  margin: 0 auto;
  padding: 8px 5px;
  background-color: #eeeeee;
  width: 75%;
`;
export const FunctionTypoContainer = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  display: flex;
  column-gap: 3px;
`;
export const FunctionTypo = styled.p`
  font-weight: 900;
  font-size: 13px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
export const EditTypo = styled(FunctionTypo)``;
export const DeleteTypo = styled(FunctionTypo)``;
export const EditInput = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 8px 5px;
  border-radius: 10px;
  font-size: 15px;
  border: none;
`;

export const CommentInputContainer = styled.div`
  margin: 0 auto;
  min-width: ${COMMENT_MIN_WIDTH}px;
  max-width: ${COMMENT_MAX_WIDTH}px;
`;
