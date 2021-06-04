import React, {createContext, useState} from 'react';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [meditationProgress, setMeditationProgress] = useState(0);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        data,
        setData,
        meditationProgress,
        setMeditationProgress
      }}>
      {children}
    </AppContext.Provider>
  );
};
