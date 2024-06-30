import { createContext, useState, ReactNode } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

interface AuthContextType {
  token: string | null;
  email: string | null;
  userId: string | null;
  signUp: (email: string, name: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const base_url = import.meta.env.VITE_BASE_URL || "http://localhost:5000/";

  const [token, setToken] = useState<string | null>(localStorage.getItem('CoinXchangetoken'));
  const [email, setEmail] = useState<string | null>(localStorage.getItem('CoinXchangeemail'));
  const [userId, setUserId] = useState<string | null>(localStorage.getItem('CoinXchangeuserId'));

  const handleAuth = (token: string) => {
    setToken(token);
    localStorage.setItem('CoinXchangetoken', token);
    const decodedToken: any = jwtDecode(token);
    setEmail(decodedToken.email);
    setUserId(decodedToken.userId);
    localStorage.setItem('CoinXchangeemail', decodedToken.email);
    localStorage.setItem('CoinXchangeuserId', decodedToken.userId);
  };

  const signUp = async (email: string, name: string, password: string) => {
    await axios.post(base_url + 'signup', { email, name, password });
    // handleAuth(response.data.token);
  };

  const signIn = async (email: string, password: string) => {
    const response = await axios.post(base_url + 'signin', { email, password });
    handleAuth(response.data.token);
  };

  const signOut = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('CoinXchangetoken');
    localStorage.removeItem('CoinXchangeemail');
  };

  return (
    <AuthContext.Provider value={{ token, email, userId, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
