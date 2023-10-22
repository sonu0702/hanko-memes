import { Suspense } from 'react'
import GenerateMeme from "@/components/generate-meme/GenerateMeme";
import { userToken } from "@/lib/user";
import { use } from "react";
function SearchBarFallback() {
  return <>placeholder</>
}

const GenerateMemePage = () => {
  let token = use(userToken())
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<SearchBarFallback />}>
        {token ? <GenerateMeme token={token}/> : null}
      </Suspense>

    </div>
  );
};

export default GenerateMemePage;
