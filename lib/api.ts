import axios from 'axios';

export type TMemeTemplates = {
    "template_id": string
    "name": string,
    "url": string,
    "width": number,
    "height": number,
}
export async function listMemeTemplates() {
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/list-meme-templates');
    console.log(``)
    return response?.data.data as TMemeTemplates[];
}
export type TMyMemes = {
    "id": number
    "user_id": string,
    "url": string,
}
export async function myMemeTemplates(token: string) {
    const response = await axios.get(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/list-my-meme',
        {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    return response?.data.data as TMyMemes[];
}

export type TAIGeneratedCaption = {
    "top_caption": string
    "bottom_caption": string,
}

export async function giveAICaption(payload: { topic: string, audience: string, templateName: string }) {
    const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/give-ai-captions',
        payload);
    return response?.data.data as TAIGeneratedCaption;
}

export type TGeneratedMeme = {
    "imageurl": {
        url:string
    }
}

export async function generateMyMeme(payload: { templateId: string, text0: string, text1: string },
    token: string) {
    const response = await axios.post(process.env.NEXT_PUBLIC_BACKEND_BASE_URL + '/generate-meme',
        payload, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response?.data.data as TGeneratedMeme;
}