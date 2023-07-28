import { COMMENT_MAX_WIDTH, COMMENT_MIN_WIDTH, POST_DETAIL_MAX_WIDTH, POST_DETAIL_MIN_WIDTH } from 'constants/layout';
import styled from 'styled-components';

export const Root = styled.div`
  position: relative;
  margin: 0 auto;
  min-width: ${POST_DETAIL_MIN_WIDTH}px;
  max-width: ${POST_DETAIL_MAX_WIDTH}px;
  padding: 30px 150px;
`;
export const PostOwnerName = styled.p`
  font-size: 12px;
  font-weight: 800;
  color: #555555;
`;
export const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
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
  font-size: 12px;
  color: #555555;
`;
export const ViewCount = styled.p`
  text-align: right;
  font-size: 13px;
  color: #555555;
  margin: 0 5px 5px 0;
`;
export const UserNickname = styled.p`
  font-size: 13px;
  font-weight: 900;
`;

export const CommentContainer = styled.div`
  margin: 0 auto;
  min-width: ${COMMENT_MIN_WIDTH}px;
  max-width: ${COMMENT_MAX_WIDTH}px;
  border-top: 2px solid #333333;
  border-bottom: none;
  overflow: hidden;
`;
export const LeftContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: end;
`;
export const CommentInput = styled.textarea`
  box-sizing: border-box;
  margin: 5px auto 0 auto;
  padding: 8px 5px;
  background-color: #eeeeee;
  width: 100%;
  border: 1px solid #999999;
`;
export const FunctionTypoContainer = styled.div`
  display: flex;
  column-gap: 3px;
`;
export const FunctionTypo = styled.p`
  font-weight: 900;
  font-size: 12px;
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
  margin-top: 20px;
  min-width: ${COMMENT_MIN_WIDTH}px;
  max-width: ${COMMENT_MAX_WIDTH}px;
  display: flex;
  flex-direction: column;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  column-gap: 10px;
`;

export const UpperContainer = styled.div`
  padding: 0 5px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  align-self: flex-end;
`;
