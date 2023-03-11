import { useRef } from "react";

import SenderMessage from "./SenderMessage";
import ResponseMessage from "./ResponseMessage";

import useChat from "@hooks/useChat";
import SendMessage from "./SendMessage";
import styled from "styled-components";

const ChatWindow = () => {
	const { messages, sendMessage } = useChat();
	const messageRef = useRef<HTMLDivElement>(null);

	return (
		<MainOverlay>
			<ChatWindowOverlay>
				<MessagesContainer>
					{messages.map((message) =>
						message.type == "response" ? (
							<ResponseMessage
								ref={messageRef}
								key={message.content}
								message={message.content}
								timestamp={message.timestamp}
							/>
						) : (
							<SenderMessage
								ref={messageRef}
								key={message.content}
								message={message.content}
								timestamp={message.timestamp}
							/>
						)
					)}
				</MessagesContainer>
				<SendMessage sendMessage={sendMessage} />
			</ChatWindowOverlay>
		</MainOverlay>
	);
};

const MainOverlay = styled.main`
	display: flex;
	overflow: hidden;
	flex-direction: column;

	height: 100vh;

	align-items: center;
	justify-content: center;
`;

const ChatWindowOverlay = styled.div`
	display: flex;
	flex-direction: column;

	height: 80%;
	width: 100%;
	max-width: 36rem;

	border-width: 1px;
	border-color: #333;
	border-radius: 12px;
`;

const MessagesContainer = styled.div`
	display: flex;
	overflow: auto;
	flex-direction: column;
	flex-grow: 1;

	height: 0px;
	padding: 32px;
`;

export default ChatWindow;
