export const useAuth = () => {
  const isAuth = typeof window !== undefined;
  return isAuth;
};
