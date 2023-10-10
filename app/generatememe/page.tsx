import GenerateMeme from "@/components/generate-meme/GenerateMeme";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <GenerateMeme/>
    </div>
  );
};

export default DashboardPage;
