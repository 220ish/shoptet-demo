import { FormEvent, useState } from "react";
import styled from "styled-components";

type Props = {
	sendMessage: (message: string) => Promise<void>;
};

const SendMessage = ({ sendMessage }: Props) => {
	const [input, setInput] = useState("");
	const onSend = (e: FormEvent) => {
		e.preventDefault();
		sendMessage(input);
		setInput("");
	};

	return (
		<StyledForm onSubmit={onSend}>
			<StyledInput
				type="text"
				placeholder="Type your message..."
				value={input}
				onChange={(e) => setInput(e.currentTarget.value)}
			/>
			<StyledButton type="submit">Send</StyledButton>
		</StyledForm>
	);
};

const StyledForm = styled.form`
	display: flex;
	flex-direction: row;
	padding: 16px;
`;

const StyledButton = styled.button`
	border-radius: 6px;
	padding: 8px;
	width: 110px;
	margin-left: 10px;

	background: white;
	color: black;

	&:hover {
		opacity: 0.8;
	}
`;

const StyledInput = styled.input`
	border-width: 1px;
	border-color: #333;
	border-radius: 0.375rem;

	padding: 8px;
	padding-left: 16px;

	width: 100%;
	background-color: #000;
	line-height: 20px;
	font-size: 14px;
	color: #cecece;

	&:focus {
		outline: 2px solid transparent;
		border-color: #7a7a7a;
		outline-offset: 2px;
	}
`;

export default SendMessage;
