import NextAuth from "next-auth";
import { authConfig } from "../auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/seller-dashboard/:path*", "/seller-dashboard"],
};
