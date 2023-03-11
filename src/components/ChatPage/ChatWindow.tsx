import styled from "styled-components";
import { useState } from "react";

import SenderMessage from "./SenderMessage";
import ResponseMessage from "./ResponseMessage";

import useChat from "@hooks/useChat";
import SendMessage from "./SendMessage";

const ChatWindow = () => {

    const [message, setMessage] = useState<string>("")
    const { messages, sendMessage } = useChat()

	return (
		<main className="flex flex-col items-center h-screen justify-center">
			<div className="flex flex-col w-full max-w-xl bg-black border border-[#333] shadow-xl rounded-xl overflow-hidden h-[80%]">
				<div className="flex flex-col flex-grow h-0 p-8 overflow-auto">
                    {
                        messages.map(message => (
                            message.type == "response"
                            ? <ResponseMessage key={message.content} message={message.content} timestamp={message.timestamp}/>
                            : <SenderMessage key={message.content} message={message.content} timestamp={message.timestamp}/>
                        ))
                    }
				</div>
				<SendMessage/>
			</div>
		</main>
	);
};

export default ChatWindow;
