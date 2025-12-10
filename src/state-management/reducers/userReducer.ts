interface loginAction {
    type: 'Login' ,
    user: string
}
interface logoutAction {
    type: 'Logout'
}
export type authAction = loginAction | logoutAction;
const userReducer= (state:string, action: authAction): string =>{

    switch (action.type) {
        case 'Login':
            return  action.user;
            break;
        case 'Logout':
             return  '';
        default:
            return  '';
            break;
    }

}
export default userReducer;