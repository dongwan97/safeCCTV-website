import { useNavigate } from 'react-router-dom';
import { HeaderContentWrapper, Logo, NavigateTypo, NavigateWrapper, Root } from './styled';
import logoImg from 'assets/images/logo.png';

export const Header = () => {
  const navigate = useNavigate();
  const onClickNavigateTypo = (url) => () => {
    navigate(url);
  };
  return (
    <Root>
      <HeaderContentWrapper>
        <Logo alt="logo_img" src={logoImg} onClick={onClickNavigateTypo('/')} />
        <NavigateWrapper>
          <NavigateTypo onClick={onClickNavigateTypo('/')}>Landing</NavigateTypo>
          <NavigateTypo onClick={onClickNavigateTypo('/main')}>Main</NavigateTypo>
          <NavigateTypo onClick={onClickNavigateTypo('/post')}>Bulletin</NavigateTypo>
          <NavigateTypo onClick={onClickNavigateTypo('/')}>About Us</NavigateTypo>
        </NavigateWrapper>
      </HeaderContentWrapper>
    </Root>
  );
};
