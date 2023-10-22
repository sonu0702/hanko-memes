"use client"
import { useEffect, useCallback, useState, Key } from "react";
import { useRouter } from "next/navigation";
import MemeCard from "../MemeCard";
import { TMyMemes, myMemeTemplates } from "@/lib/api";

export default function MyMemes(props:{token:string}) {
    const [mymemes, setMyMemes] = useState<TMyMemes[]>([]);
    useEffect(() => {
        myMemeTemplates(props.token)
            .then(data => {
                console.log("got myMemeTemplates", data.length);
                setMyMemes(data);
            })
            .catch(err => console.log(`myMemeTemplates:err`, err))
    }, []);
    return <div>
        {(mymemes as any || []).map((template: { id: Key | null | undefined; url: string; }) => {
            return <div key={template.id}>
                <MemeCard key={template.id} templateId={""}
                    name={""} url={template.url} />
            </div>
        })}
    </div>
}