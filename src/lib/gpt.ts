import { OPENAI_API_KEY } from "@data/private";
import { ChatGPTAPI } from "chatgpt";

const ChatGPT = new ChatGPTAPI({
    apiKey: OPENAI_API_KEY
})

export default ChatGPT