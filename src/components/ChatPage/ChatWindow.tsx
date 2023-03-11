import { useRef } from "react";

import SenderMessage from "./SenderMessage";
import ResponseMessage from "./ResponseMessage";

import useChat from "@hooks/useChat";
import SendMessage from "./SendMessage";
import styled from "styled-components";

const ChatWindow = () => {
    const { messages, sendMessage } = useChat()
    const messageRef = useRef<HTMLDivElement>(null)

	return (
		<MainOverlay>
			<div className="flex flex-col w-full max-w-xl border border-[#333] rounded-xl overflow-hidden h-[80%]">
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
		</MainOverlay>
	);
};

const MainOverlay = styled.main`
    display: flex;
    flex-direction: column;
    
    height: 100vh;

    align-items: center;
    justify-content: center;

`

export default ChatWindow;
