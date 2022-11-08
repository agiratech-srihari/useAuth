import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "./Hooks/useAuth";


export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return (
    <div>
      {outlet}
    </div>
  );
};
export default ProtectedLayout