import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  console.log("Generating JWT token for user ID:", userId);

  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  console.log("JWT token created:", token);

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true, // Prevents access from client-side scripts
    sameSite: "strict", // Protects against CSRF
    secure: process.env.NODE_ENV !== "development", // Only use HTTPS in production
  });

  console.log("JWT token set in cookie with options:");
  console.log({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
