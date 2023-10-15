"use client";

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { LogoutBtn } from "@/components/LogoutButton";



export default function HankoProfile() {
  useEffect(() => {
    const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <hanko-profile />
      <LogoutBtn />
    </>
  );
}
