import axios from "axios";

export const fetchUserFromServer = async () => {
  const token = getToken();
  if (!token) return null;

  const res = await axios.get(`${import.meta.env.VITE_API_URL}/auth/currentUser`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.data.user;
};
