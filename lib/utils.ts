import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { cookies } from "next/headers";
import * as jose from "jose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function userToken() {
  const token = cookies().get("hanko")?.value;
  // const payload = jose.decodeJwt(token ?? "");
  // const userID = payload.sub;
  return token;
}