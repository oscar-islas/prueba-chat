import { lazy } from "react";

const Home = lazy(() => import("../Home/Home"));
const LogIn = lazy(() => import("../LogIn/LogIn"));
const Register = lazy(() => import("../Register/Register"));
const ProtectedComponent = lazy(() => import("../ProtectedComponent/ProtectedComponent"));

export default {
  Home,
  LogIn,
  Register,
  ProtectedComponent
};