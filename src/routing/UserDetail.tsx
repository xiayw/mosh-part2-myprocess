import { useLocation, useParams } from "react-router-dom";

const UserDetail = () => {
  const location = useLocation();
  const params = useParams();
  return <p>User: {params.id}{ location?.pathname}</p>;
};

export default UserDetail;
