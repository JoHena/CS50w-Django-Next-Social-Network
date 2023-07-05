import { DefaultSession } from "next-auth";

declare module "next-auth" {
  interface Session {
    user?: {
      user_id: number;
      followings: number[];
    } & DefaultSession["user"];
  }
}