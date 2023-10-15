import HankoProfile from "@/components/hanko-components/HankoProfile";
import { Suspense } from "react";


function SearchBarFallback() {
  return <>placeholder</>
}

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Suspense fallback={<SearchBarFallback />}>
      <HankoProfile />

      </Suspense>
    
    </div>
  );
};

export default DashboardPage;
