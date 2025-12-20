"use client";

import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootRedirect() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "loading") return; // wait for session
    if (session) router.replace("/home"); // logged-in → landing page
    else router.replace("/login"); // not logged-in → login
  }, [session, status, router]);

  return null; // nothing to render
}