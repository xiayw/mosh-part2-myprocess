import React, { Dispatch } from "react";
import { authAction } from "../reducers/userReducer";

interface authActionType {
    user: string,
    dispatch: Dispatch<authAction>
}
const AuthContext = React.createContext<authActionType>({} as authActionType);
export default AuthContext;