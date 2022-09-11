import React, { useEffect } from "react";
import { notification } from "antd";
import "antd/dist/antd.min.css";
// import "antd/dist/antd.css";
interface IToast {
  title: string;
  value: string;
  type: string;
  duration?: number;
}
const useToast = () => {
  const [toast, setToast] = React.useState<IToast>({
    title: "",
    value: "",
    type: "",
    duration: 5,
  });

  const { type, title, duration, value } = toast;

  useEffect(() => {
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

    return () => {
      setToast({ title: "", value: "", type: "", duration: 5 });
    };
  }, [title, value, type, duration]);

  return { toast, setToast };
};

export default useToast;
