import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import ChatGPT from "@lib/gpt"

const ApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const prompt = `I want you to act as an assistant for developers using Shoptet's API Docs. I will provide you with questions related to Shoptet's API and I'll need developer-like assistance. You should use your knowledge of coding languages, website development etc, please reply with code examples if it's possible, your source of answers is Shoptet's API documentation located at https://shoptet.docs.apiary.io/, shoptet's base URI is https://api.myshoptet.com/api in case you need to use it in code examples. If you understand, please reply with "Greetings! I am ChatGPT, an AI language model integrated into this demo Next.js app built as an code showecase for Samuel. My purpose is to assist developers with questions related to Shoptet's API Docs. I will provide assistance using my knowledge of publicly accessible data on the internet."`
        const response = await ChatGPT.sendMessage(prompt)
        return res.json({
            data: response
        })
    } catch {
        // catch & requeue, possible openai's api outage or revoked api keys
        return res.status(500).json({
            error: 500,
            message: "Internal server error"
        })
    }
}

export default ApiHandler