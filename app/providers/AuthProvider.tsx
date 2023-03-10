import { addDoc, collection } from '@firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';
import React, { FC, PropsWithChildren } from 'react';
import { createContext } from 'react';
import { Alert } from 'react-native';
import { auth, db, login, logout, register } from '../firebase';

interface IContext {
  user: User | null;
  isLoading: boolean;
  register: (email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const registerHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      const { user } = await register(email, password);

      await addDoc(collection(db, 'users'), {
        _id: user.uid,
        displayName: 'No Name',
      });
    } catch (error: any) {
      Alert.alert('Error reg:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loginHandler = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (error: any) {
      Alert.alert('Error login:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logoutHandler = async () => {
    setIsLoading(true);
    try {
      await logout();
    } catch (error: any) {
      Alert.alert('Error logout:', error);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user || null);
      setIsLoadingInitial(false);
    });
  }, []);

  const value = React.useMemo(
    () => ({
      user,
      isLoading,
      register: registerHandler,
      login: loginHandler,
      logout: logoutHandler,
    }),
    [user, isLoading],
  );

  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
};
