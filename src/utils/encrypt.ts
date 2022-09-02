export const sanitizeUserInput = (body: Record<any, any> = {}) => {
  for (let key in body) {
    if (typeof body[key] === "string") {
      body[key] = String(body[key]).replaceAll(
        /<|>|(\]|\[)|'|"|#|{|}||\//gi,
        ""
      );
    }
  }

  return body;
};
