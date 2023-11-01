import Layout from "@/components/Layout";
import {useSession} from "next-auth/react";

export default function Home() {
  const {data: session} = useSession();
  return <Layout>
    <div className="text-blue-900 flex justify-between m-5">
      <h2>
        Hello, <b>{session?.user?.name}</b>
      </h2>
      <div className="flex gap-2 text-black font-bold text-primary rounded-md overflow-hidden">
        <img src={session?.user?.image} alt="Sumit" className="w-6 h-6 rounded-full"/>
        <span className="">
          {session?.user?.name}
        </span>
      </div>
    </div>
  </Layout>
}
