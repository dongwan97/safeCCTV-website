import { HeaderContentWrapper, Logo, NavigateTypo, NavigateWrapper, Root } from './styled';
import logoImg from 'assets/images/logo.png';
export const Header = () => {
  return (
    <Root>
      <HeaderContentWrapper>
        <Logo alt="logo_img" src={logoImg} />
        <NavigateWrapper>
          <NavigateTypo>Landing</NavigateTypo>
          <NavigateTypo>Main</NavigateTypo>
          <NavigateTypo>About Us</NavigateTypo>
        </NavigateWrapper>
      </HeaderContentWrapper>
    </Root>
  );
};
