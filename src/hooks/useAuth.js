import { useEffect, useState, useContext } from 'react';
import { UserContext } from '../context/UserProvider';

const useAuth = () => {
  const {
    currentUser,
  } = useContext(UserContext);

  const [localUser, setLocalUser] = useState(currentUser);

  useEffect(() => {
    if (currentUser) return setLocalUser(currentUser);
    return setLocalUser(null);
  }, [currentUser]);

  return localUser;
};

export default useAuth;
