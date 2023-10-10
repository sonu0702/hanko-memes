import { useEffect, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import MemeCard from "../MemeCard";



export default function MyMemes() {

    return <div>
        <MemeCard templateId="1" url="" name="" />
        <MemeCard templateId="2" url="" name="" />
    </div>
}