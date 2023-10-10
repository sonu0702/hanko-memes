import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image"
import { AspectRatio } from "@/components/ui/aspect-ratio"



export default function MemeTemplate({ url, name, templateId }: {
    url: string,
    name: string, templateId: string
}) {

    return <div className="w-[450px]" style={{margin:"4px 4px"}}>
        <AspectRatio ratio={16 / 9}>
            <Image src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80" 
            alt="Image" 
            fill
            className="rounded-md object-cover" />
        </AspectRatio>
    </div>

}