"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { register } from "@teamhanko/hanko-elements";



export function LogoutBtn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<any>();

  useEffect(() => {
    // import("@teamhanko/hanko-elements").then(({ Hanko }) =>
    //   setHanko(new Hanko(hankoApi ?? ""))
    // );
    const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL!;
    register(hankoApi).then(({hanko}) => setHanko(hanko));
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
}
