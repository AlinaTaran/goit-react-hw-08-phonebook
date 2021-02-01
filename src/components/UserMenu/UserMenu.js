import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from './default-avatar.png';
import s from './UzerMenu.module.css';
import Button from '@material-ui/core/Button';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <div className={s.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}</span>
      <Button
        type="button"
        variant="outlined"
        size="small"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
