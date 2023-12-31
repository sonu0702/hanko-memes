"use client"

import { useEffect, useCallback, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import MemeCard from "../MemeCard";
import Link from "next/link";
import { generateMyMeme, giveAICaption } from "@/lib/api";



export default function GenerateMeme(props: { token: string }) {
    let [argument, setArguments] = useState({
        topic: "", audience: "",
        topcaption: "", bottomcaption: ""
    })
    let [searchParamsValue, setSearchParams] = useState({ templateid: "", url: "" });
    const searchParams = useSearchParams()
    useEffect(() => {
        const templateid = searchParams.get('templateid')!
        const url = searchParams.get('url')!
        setSearchParams((prevSearchParams) => ({
            ...prevSearchParams,
            templateid: templateid,
            url: url
        }))
    }, [searchParams])

    const readInputs = (e: any) => {
        e.preventDefault()
        console.log(`e`, e.target.value, e.target.name, "e.target.name", e.target.id);
        let { id, value } = e.target;
        // setArguments((value) => Object.assign(value, { [e.target.id]: e.target.value }))
        setArguments((prevArgument) => ({
            ...prevArgument,
            [id]: value
        }))
    }

    const generateMeme = () => {
        generateMyMeme({
            templateId: searchParamsValue.templateid,
            text0: argument.topcaption, text1: argument.bottomcaption
        }, props.token)
            .then(data => {
                setSearchParams((prevSearchParams) => ({
                    ...prevSearchParams,
                    url: data?.imageurl?.url
                }));
            })
            .catch(err => console.log("generateMyMeme", err));
        console.log("arguments", argument)
    }

    const generateAICaption = () => {
        giveAICaption({
            topic: argument.topic || "topic",
            audience: argument.audience || "audience",
            templateName: "templateName"
        }).then(data => {
            console.log("giveAICaption", data);
            setArguments((prevArgument) => ({
                ...prevArgument,
                topcaption: 'hello top',
                bottomcaption: 'hello bottom'
            }))
        })

    }

    return <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        {searchParamsValue?.templateid
            ? <MemeCard templateId={searchParamsValue?.templateid} url={searchParamsValue.url} name="" />
            :
            <div>
                <Button asChild>
                    <Link href="/memetemplates">Select Meme Templete</Link>
                </Button>

            </div>
        }
        <div className="flex flex-row">
            <div style={{ marginRight: "4px" }}>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Step 1</CardTitle>
                        <CardDescription>Write appropriate Topic and Audience.</CardDescription>
                    </CardHeader>
                    <CardContent style={{ marginTop: '66px' }}>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="topic">Topic</Label>
                                    <Input id="topic" placeholder="Watching a youtube video!"
                                        onChange={readInputs}
                                        value={argument.topic} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="audience">Audience</Label>
                                    <Input id="audience" placeholder="Junior developers"
                                        onChange={readInputs}
                                        value={argument.audience} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className="w-[350px]">
                    <CardHeader>
                        <CardTitle>Step 2</CardTitle>
                        <CardDescription>You can write two captions. One for top and one for bottom.</CardDescription>
                        <Button onClick={generateAICaption}>AI Captions</Button>
                    </CardHeader>
                    <CardContent>
                        <form>
                            <div className="grid w-full items-center gap-4">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="topcaption">Top Caption</Label>
                                    <Input id="topcaption" placeholder="CSS you've been watching all day"
                                        onChange={readInputs}
                                        value={argument.topcaption}
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="bottomcaption">Bottom Caption</Label>
                                    <Input id="bottomcaption" placeholder="Still it looks horrible" onChange={readInputs}
                                        value={argument.bottomcaption} />
                                </div>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>

        </div>
        <CardFooter style={{ marginTop: "8px" }}>
            <Button onClick={generateMeme}>Generate Meme</Button>
        </CardFooter>
    </div>
}