import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserList";
import ContactPage from "./ContactPage";
import UserDetailPage from "./UserDetailPage";
import path from "path";
import Layout from "./Layout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "users", element: <UserListPage /> },
      { path: "users/:id", element: <UserDetailPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);
export default router;
