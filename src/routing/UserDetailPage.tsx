import { useLocation } from "react-router-dom";

const UserDetailPage = () => {
  const location = useLocation();
  return <p>User: {location?.pathname}</p>;
};

export default UserDetailPage;
