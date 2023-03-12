import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import ChatGPT from "@lib/gpt"

const ApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
    const { prompt, parentId } = req.body || req.query

    if (!prompt) {
        return res.status(400).json({
            error: 400, 
            message: `"prompt" not found`
        })
    }

    try {
        const response = await ChatGPT.sendMessage(prompt, {
            // parentMessageId: parentId
        })

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