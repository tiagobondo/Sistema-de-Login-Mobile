import React, { useContext } from "react";

import AppRouter from "./appRouter";
import AuthRouter from "./authRouter";

import { AuthContext } from "../Contexts/auth";

const Router = () => {

  const { isAuth } = useContext(AuthContext);

  return isAuth ? <AppRouter /> : <AuthRouter />
}

export default Router;