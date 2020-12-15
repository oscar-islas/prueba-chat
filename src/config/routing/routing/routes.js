import views from "../../../components/views/views";
import {
  HOME,
  LOGIN,
  REGISTER,
} from "./paths";

export const HOME = {
  component: views.Home,
  path: HOME,
  isPrivate: true
};

export const LOGIN = {
  component: views.LogIn,
  path: LOGIN,
  isPrivate: false
};

export const REGISTER = {
  component: views.Register,
  path: REGISTER,
  isPrivate: false
};

export default [HOME, LOGIN, REGISTER];