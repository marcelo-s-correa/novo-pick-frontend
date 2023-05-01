import api from "@/services/api";

const authConfig = {
  authHeader: "Authorization",
  authTokenPrefix: "Bearer",
  storageKey: "auth",
};

api.interceptors.request.use(
  (config) => {
    const auth = JSON.parse(localStorage.getItem(authConfig.storageKey));
    if (auth) {
      config.headers[
        authConfig.authHeader
      ] = `${authConfig.authTokenPrefix} ${auth.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const login = async (email, password) => {
  const response = await api.post("/login", {
    email,
    password,
  });
  localStorage.setItem(authConfig.storageKey, JSON.stringify(response.data));
  return response.data;
};

export const refreshToken = async () => {
  const auth = JSON.parse(localStorage.getItem(authConfig.storageKey));
  const response = await api.post("/refresh-token", {
    token: auth.refreshToken,
  });
  auth.token = response.data.token;
  localStorage.setItem(authConfig.storageKey, JSON.stringify(auth));
  return response.data;
};