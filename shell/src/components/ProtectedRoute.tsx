import { FunctionComponent, ReactElement } from "react";
import { Outlet, Navigate } from "react-router-dom";
import * as sessionStore from "../stores/sessionStore";

export const ProtectedRoute: FunctionComponent = (): ReactElement => {
  return sessionStore.getToken() ? <Outlet /> : <Navigate to="/login" />;
};
