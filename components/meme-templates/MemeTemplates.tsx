
"use client";
import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import MemeCard from "../MemeCard";
import { listMemeTemplates, TMemeTemplates } from "@/lib/api";


// const templates = [
//     {
//         templateId: "1",
//         url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
//         name: ""
//     },
//     {
//         templateId: "2",
//         url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
//         name: ""
//     }
// ]

export default function MemeTemplates() {
    const [templates, setTemplates] = useState<TMemeTemplates[]>([]);
    const router = useRouter();

    const handleMemeSelection = (id: string, url: string) => {
        router.replace(`/generatememe?templateid=${id}&url=${url}`);
    }
    useEffect(() => {
        listMemeTemplates()
            .then(data => {
                console.log("got templates", data.length);
                setTemplates(data);
            })
            .catch(err => console.log(`listMemeTemplates:err`, err))
    }, [])
    return <div>
        {(templates || []).map((template) => {
            return <div key={template.template_id} onClick={() => handleMemeSelection(template.template_id, template.url)}
                style={{ cursor: 'pointer' }}>
                <MemeCard key={template.template_id} templateId={template.template_id}
                    name={template.name} url={template.url} />
            </div>
        })}
    </div>
}