import { getIronSession } from "iron-session";
import { cookies } from "next/headers";

interface ISessionContent {
  id?: number;
}

export default async function getSession() {
  return await getIronSession<ISessionContent>(await cookies(), {
    cookieName: "pawfect-jindo",
    password: process.env.COOKIE_PASSWORD!,
  });
}
