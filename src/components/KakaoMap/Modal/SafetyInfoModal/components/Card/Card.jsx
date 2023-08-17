import { Count, Root, Title, TopStripe } from './styled';

export const Card = ({ title, count }) => {
  return (
    <Root>
      <TopStripe />
      <Title>{title}</Title>
      <Count>{count}명</Count>
    </Root>
  );
};
