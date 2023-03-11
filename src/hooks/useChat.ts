import { useEffect, useState } from "react"
import { toast } from "sonner";

type Message = {
    type: "sender" | "response";
    content: string;
    timestamp: Date;
    parentId?: string;
}

const useChat = () => {
    const [isReady, setReady] = useState(false)
    const [messages, setMessages] = useState<Message[]>([])

    const getLastParentId = () => {
        const lastItem = messages
          .filter((item) => item.type === "response")
          .slice(-1)
          .pop();
          
        return lastItem?.parentId ?? "";
    };
    
    const initialize = async () => {
        try {
            const response = await fetch("/api/chat")
            const data = await response.json()

            if (response.ok && data){
                setReady(true)
                setMessages(state => [...state, {
                    type: "response",
                    content: data.data.text,
                    timestamp: new Date(),
                    parentId: data.data.parentMessageId
                }])
            } else {
                console.error(data)
                toast.error(`Internal server error`)
            }

        } catch (error: any) { // catch must be type of any or unknown
            toast.error(error.message)
        }
    }

    const sendMessage = async (message: string) => {
        try {
            // sorry for this mess, too tired, will clean up later
            setMessages(state => [...state, {
                type: "sender",
                content: message,
                timestamp: new Date(),
            }])

            const lastMessage = getLastParentId()
            const response = await fetch("/api/chat/prompt", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    prompt: message,
                    parentId: lastMessage
                }).toString()
            })
            const data = await response.json()

            if (response.ok && data){
                setReady(true)
                setMessages(state => [...state, {
                    type: "response",
                    content: data.data.text,
                    timestamp: new Date(),
                    parentId: data.data.parentMessageId
                }])
            } else {
                console.error(data)
                toast.error(`Internal server error`)
            }

        } catch (error: any) { // catch must be type of any or unknown
            toast.error(error.message)
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return {
        isReady,
        messages,

        sendMessage
    }
}

export default useChat