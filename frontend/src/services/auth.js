import axios from "axios";

export const fetchUserFromServer = async () => {
  const token = getToken();
  if (!token) return null;

  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.user;
};
