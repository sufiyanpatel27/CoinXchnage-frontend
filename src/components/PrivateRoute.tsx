import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  return token ? (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {children}
    </div>
  ) : (
    <Navigate to="/signin" />
  );
};

export default PrivateRoute;
