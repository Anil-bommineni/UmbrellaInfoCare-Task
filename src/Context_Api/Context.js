import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const CounselAppContext = createContext();

function CounselAppContextProvider({ children }) {
  const [email, setEmail] = useState(
    localStorage.getItem('CounselAppLoginAccount') || ''
  );

  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('CounselAppAccessToken') || ''
  );

  const [token, setToken] = useState(
    localStorage.getItem('CounselAppToken') || ''
  );

  useEffect(() => {
    localStorage.setItem('CounselAppLoginAccount', email);
  }, [email]);
  
  useEffect(() => {
    localStorage.setItem('CounselAppAccessToken', accessToken);
  }, [accessToken]);

  useEffect(() => {
    localStorage.setItem('CounselAppToken', token);
  }, [token]);


  const login = (paramEmail, paramAccessToken, paramToken) => {
    setEmail(paramEmail);
    setAccessToken(paramAccessToken);
    setToken(paramToken);
  };

  const [profilePic, setProfilePic] = useState('');
  const [profileName, setProfileName] = useState('');

  useEffect(() => {
    if (email && token) {
      Axios.post('https://comms.globalxchange.com/coin/verifyToken', {
        email,
        token: token,
      }).then((res) => (res.data.status ? '' : login('', '', '')));

      Axios.get(
        `https://comms.globalxchange.com/user/details/get?email=${email}`
      ).then((res) => {
        const { data } = res;
        console.log('data :>> ', data);
        if (data.status) {
          setProfileName(data.user.name);
          setProfilePic(data.user.profile_img);
        }
      });
    }
  }, [email, token]);

  return (
    <CounselAppContext.Provider
      value={{ login, email, token, profilePic, profileName }}
    >
      {children}
    </CounselAppContext.Provider>
  );
}

export default CounselAppContextProvider;
