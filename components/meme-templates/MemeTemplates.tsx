"use client"

import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import MemeCard from "../MemeCard";


const templates = [
    {
        templateId: "1",
        url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
        name: ""
    },
    {
        templateId: "2",
        url: "https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80",
        name: ""
    }
]

export default function MemeTemplates() {
    const router = useRouter();

    const handleMemeSelection = (id: string, url: string) => {
        router.replace(`/generatememe?templateid=${id}&url=${url}`);
    }
    return <div>
        {templates.map((template) => {
            return <div onClick={() => handleMemeSelection(template.templateId, template.url)}
                style={{ cursor: 'pointer' }}>
                <MemeCard key={template.templateId} templateId={template.templateId}
                    name={template.name} url={template.url} />
            </div>
        })}
    </div>
}