import HankoAuth from "@/components/hanko-components/HankoAuth";
import { Suspense } from "react";

function SearchBarFallback() {
  return <>placeholder</>
}

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<SearchBarFallback />}>
        <HankoAuth />
      </Suspense>

    </div>
  );
}
