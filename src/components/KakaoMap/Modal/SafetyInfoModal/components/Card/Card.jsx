import { Count, Root, Title, TopStripe } from './styled';

export const Card = ({ title, count, mode, accumulate }) => {
  return (
    <Root>
      <TopStripe className={accumulate ? 'green' : 'gray'} />
      <Title>{title}</Title>
      <Count>
        {count}
        {mode === 'car' ? '대' : '명'}
      </Count>
    </Root>
  );
};
