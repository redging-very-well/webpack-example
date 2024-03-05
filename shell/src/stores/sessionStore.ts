export enum LocalStorageSessionKeys {
  userSessionToken = "token",
}

export const setToken = (token: string): void => {
  localStorage.setItem(LocalStorageSessionKeys.userSessionToken, token);
};

export const clearToken = (): void => {
  localStorage.removeItem(LocalStorageSessionKeys.userSessionToken);
};

export const getToken = (): string => {
  return localStorage.getItem(LocalStorageSessionKeys.userSessionToken) ?? "";
};
