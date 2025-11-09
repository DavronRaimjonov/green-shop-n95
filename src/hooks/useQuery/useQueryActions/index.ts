import { useMutation } from "react-query";
import { useAxios } from "../../useAxios";
import Cookies from "js-cookie";
import { useReduxDispatch } from "../../userRedux";
import { authorizationModalVisibltiyConf } from "../../../redux/modal-slice";

export const useLoginMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-in", body: data, method: "POST" }).then(
        (res) => res.data.data
      ),
    onSuccess: (data) => {
      const { token, user } = data;

      Cookies.set("user", JSON.stringify(user), { expires: 0.0833 });
      Cookies.set("token", token, { expires: 0.0833 });
      dispatch(authorizationModalVisibltiyConf());
    },
  });
};
export const useRegisterMutate = () => {
  const axios = useAxios();
  const dispatch = useReduxDispatch();
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (data: object) =>
      axios({ url: "user/sign-up", body: data, method: "POST" }).then(
        (res) => res.data.data
      ),
    onSuccess: (data) => {
      const { token, user } = data;

      Cookies.set("user", JSON.stringify(user), { expires: 0.0833 });
      Cookies.set("token", token, { expires: 0.0833 });
      dispatch(authorizationModalVisibltiyConf());
    },
  });
};
