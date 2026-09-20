// Accept the existing deployment setting whether it contains an app root or /register.
const configuredUrl =
  process.env.NEXT_PUBLIC_FRONTEND_URL ||
  "https://foliocuts.blazor-movies.online";
const appRoot = configuredUrl
  .replace(/\/+$/, "")
  .replace(/\/(register|login)$/, "");
export const registerUrl = `${appRoot}/register`;
export const loginUrl = `${appRoot}/login`;
