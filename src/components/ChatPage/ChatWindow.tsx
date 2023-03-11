import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

import SenderMessage from "./SenderMessage";
import ResponseMessage from "./ResponseMessage";

import useChat from "@hooks/useChat";
import SendMessage from "./SendMessage";

const ChatWindow = () => {
    const { messages, sendMessage } = useChat()
    const messageRef = useRef<HTMLDivElement>(null)

	return (
		<main className="flex flex-col items-center h-screen justify-center">
			<div className="flex flex-col w-full max-w-xl bg-black border border-[#333] shadow-xl rounded-xl overflow-hidden h-[80%]">
				<div className="flex flex-col flex-grow h-0 p-8 overflow-auto">
                    {
                        messages.map(message => (
                            message.type == "response"
                            ? <ResponseMessage ref={messageRef} key={message.content} message={message.content} timestamp={message.timestamp}/>
                            : <SenderMessage ref={messageRef} key={message.content} message={message.content} timestamp={message.timestamp}/>
                        ))
                    }
				</div>
				<SendMessage sendMessage={sendMessage}/>
			</div>
		</main>
	);
};

export default ChatWindow;
