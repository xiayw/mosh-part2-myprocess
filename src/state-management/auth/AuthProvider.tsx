import { ReactNode, useReducer } from "react";

import userReducer from "../reducers/userReducer";
import AuthContext from "./authContext";
interface Pros {
  children: ReactNode;
}

const AuthProvider = ({ children }: Pros) => {
  const [user, dispatch] = useReducer(userReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
