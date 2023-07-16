import { HeaderContentWrapper, Logo, NavigateTypo, NavigateWrapper, Root } from './styled';

export const Header = () => {
  return (
    <Root>
      <HeaderContentWrapper>
        <Logo alt="logo_img" src="" />
        <NavigateWrapper>
          <NavigateTypo>nav1</NavigateTypo>
          <NavigateTypo>nav2</NavigateTypo>
        </NavigateWrapper>
      </HeaderContentWrapper>
    </Root>
  );
};
