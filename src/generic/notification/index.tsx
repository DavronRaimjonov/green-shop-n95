import { notification } from "antd";

type NotifyType = "confirm_password";

export const notificationApi = () => {
  const notify = (type: NotifyType) => {
    switch (type) {
      case "confirm_password":
        return notification.error({ message: "Passwrods don't match !" });
    }
  };

  return notify;
};
