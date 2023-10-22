import MyMemes from "@/components/my-memes/MyMemes";
import { userToken } from "@/lib/user";
import { use } from "react";

const MyMemesPage = () => {
  let token = use(userToken())
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
     {token? <MyMemes token={token}/>:null }
    </div>
  );
};

export default MyMemesPage;
