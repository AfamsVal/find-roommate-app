import { notification } from "antd";
import "antd/dist/antd.min.css";
// import "antd/dist/antd.css";

const useToast = () => {
  const openNotification: (
    title: string,
    value: string,
    type: string,
    duration?: number
  ) => void = (title, value, type, duration = 5) => {
    if (type === "error") {
      notification.error({
        message: title,
        description: value,
        duration,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    } else {
      notification.success({
        message: title,
        description: value,
        duration,
        onClick: () => {
          console.log("Notification Clicked!");
        },
      });
    }
  };
  return [openNotification];
};

export default useToast;
