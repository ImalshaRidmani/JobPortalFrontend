import { jwtDecode } from "jwt-decode";
import type { User } from "../types/Auth";

interface JwtPayload {
  nameid: string;
  email: string;
  role: string;
  exp: number;
}

export const getUserFromToken = (token: string): User => {
  const decoded = jwtDecode<JwtPayload>(token);

  return {
    id: Number(decoded.nameid),
    email: decoded.email,
    role: decoded.role,
  };
};