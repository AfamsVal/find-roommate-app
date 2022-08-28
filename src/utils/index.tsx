export const changeCase = (word: string) => {
  return word
    .replace(/([a-zA-Z])(?=[A-Z])/g, "$1 ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const beforeUpload = (
  file: any,
  count: number,
  arrCount: number,
  openNotification: (
    title: string,
    value: string,
    type: string,
    duration?: number
  ) => void
) => {
  let res = { isValid: true, title: "", msg: "" };

  if (count > 6) {
    res = {
      isValid: false,
      title: "Upload Failed:",
      msg: "Maximum of 6 images is allowed!",
    };
  }

  if (arrCount + count > 5) {
    res = {
      isValid: false,
      title: "Upload Failed:",
      msg: "Maximum of 5 images is allowed!",
    };
  }

  if (file.size / 1024 / 1024 > 5) {
    res = {
      isValid: false,
      title: "Upload Failed:",
      msg: `${file.name} size is more than the required 5mb`,
    };
  }

  if (!count) {
    res = {
      isValid: false,
      title: "Upload Failed:",
      msg: "Please select a valid file!",
    };
  }

  if (!res.isValid) {
    openNotification(res.title, res.msg, "error");
    return false;
  }

  return true;
};
