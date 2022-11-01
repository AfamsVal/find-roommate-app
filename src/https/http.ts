import { DEV_URL } from "./../utils/environment";
import { sanitizeUserInput } from "../utils/encrypt";

interface HTTPParams {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
  url: string;
  headers?: any;
  body?: any;
  isFormData?: boolean;
  sanitize?: boolean;
}

export interface HTTPResponse<T = any> {
  status: boolean;
  data: T;
  message: string;
}

export const httpRequest = async (
  params: HTTPParams
): Promise<HTTPResponse> => {
  try {
    const {
      url,
      method,
      body,
      headers,
      isFormData = false,
      sanitize = true,
    } = params;

    if (!url) throw new Error("url is not set");
    if (typeof url !== "string") throw new Error("url must be a string");
    const options: any = {
      method: method || "GET",
      redirect: "follow",
      // mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: "same-origin", // include, *same-origin, omit
      // referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("i-token")}`,
        ...headers,
      },
    };

    if (!isFormData) {
      options.headers["Content-Type"] = "application/json";
    }

    if (body) {
      const sanitized = JSON.stringify(sanitizeUserInput(body));
      options.body = isFormData
        ? body
        : sanitize
        ? sanitized
        : JSON.stringify(body);
    }

    const res = await fetch(`${DEV_URL}${url}`, options);
    const responseData: any = await res.json();
    return responseData;
  } catch (error) {
    throw error;
  }
};
