import { createContext, useState, ReactNode } from 'react';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

interface AuthContextType {
  token: string | null;
  email: string | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {

  const base_url = import.meta.env.VITE_BASE_URL || "http://localhost:5000/";

  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));
  const [email, setEmail] = useState<string | null>(localStorage.getItem('email'));

  const handleAuth = (token: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    const decodedToken: any = jwtDecode(token);
    setEmail(decodedToken.email);
    localStorage.setItem('email', decodedToken.email);
  };

  const signUp = async (email: string, password: string) => {
    await axios.post(base_url + 'signup', { email, password });
    // handleAuth(response.data.token);
  };

  const signIn = async (email: string, password: string) => {
    const response = await axios.post(base_url + 'signin', { email, password });
    handleAuth(response.data.token);
  };

  const signOut = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  };

  return (
    <AuthContext.Provider value={{ token, email, signUp, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
