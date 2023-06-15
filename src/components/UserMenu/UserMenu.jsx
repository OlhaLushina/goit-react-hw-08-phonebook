import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from 'components/Button/Button.styled';
import { Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Container>
      Welcome, {user.name}
      <Button onClick={() => dispatch(logOut())}>Logout</Button>
    </Container>
  );
};
