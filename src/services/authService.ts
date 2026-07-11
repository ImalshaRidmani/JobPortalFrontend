import api from "../api/axios";
import type {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
} from "../types/Auth";

export const login = async (
  data: LoginRequest
): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const register = async (
  data: RegisterRequest
) => {
  const response = await api.post("/auth/register", data);

  return response.data;
};