export const config = {
  PORT: process.env.PORT || 3000,
  ORIGINS: (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim()) || ["http://localhost:3000"],
};
