import useAuthStore from "./store";
import useAuth from "./useAuth";

const LoginStatus = () => {

  const {user, Login, Logout} = useAuthStore();
  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => Logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a
        onClick={() => Login("mosh.hamedani")}
        href="#"
      >
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
