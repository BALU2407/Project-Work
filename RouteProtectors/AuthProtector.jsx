import { useEffect } from 'react';

const AuthProtector =  ({ children }) => {

  useEffect(() => {

    if (!localStorage.getItem('userToken')) {
      window.location.href = '/landing';
    }
  }, );


  return children;
};

export default AuthProtector;