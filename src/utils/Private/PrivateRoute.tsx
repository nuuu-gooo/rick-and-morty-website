import { PropsWithChildren, useContext } from "react";
import { GLobalContext } from "../../Providers/Global/GlobalContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }: PropsWithChildren) => {
  const { serverDownStatus } = useContext(GLobalContext);

  return serverDownStatus === true ? <Navigate to={"/serverDown"} /> : children;
};
