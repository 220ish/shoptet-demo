import styled from "styled-components";

const SendMessage = () => {
	return (
		<Overlay className="flex flex-row space-x-5">
			<StyledInput
				type="text"
				placeholder="Type your message…"
			/>
            <StyledButton>
                Send
            </StyledButton>
		</Overlay>
	);
};

const Overlay = styled.div`
    padding: 16px;
`

const StyledButton = styled.button`
    border-radius: 6px;
    padding: 8px;
    width: 110px;

    background: white;
    color: black;

    &:hover {
        opacity: 0.8;
    }
`

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

export default SendMessage