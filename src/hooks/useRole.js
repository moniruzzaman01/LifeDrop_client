import { useEffect, useState } from "react";
import axiosInstance from "./useAxios";

const useRole = (email) => {
  const [role, setRole] = useState({});
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (email) {
      try {
        axiosInstance
          .post("/auth/get-role", { email })
          .then(({ data }) => {
            setRole(data.data);
            setRoleLoading(false);
          })
          .catch((error) => setRoleLoading(false));
      } catch (error) {}
    }
  }, []);

  return { ...role, roleLoading };
};

export default useRole;
