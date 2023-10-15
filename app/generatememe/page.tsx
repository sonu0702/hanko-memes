"use client"
import { Suspense } from 'react'
import GenerateMeme from "@/components/generate-meme/GenerateMeme";
function SearchBarFallback() {
  return <>placeholder</>
}

const GenerateMemePage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<SearchBarFallback />}>
        <GenerateMeme />
      </Suspense>

    </div>
  );
};

export default GenerateMemePage;
