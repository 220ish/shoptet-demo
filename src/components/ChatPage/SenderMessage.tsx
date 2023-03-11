import { RefObject } from "react";

import styled from "styled-components";
import FadeIn from "react-fade-in";
import Moment from "react-moment";

type Props = {
	message: string;
	timestamp: Date;
	ref: RefObject<HTMLDivElement>;
};

export default function SenderMessage({ message, timestamp, ref }: Props) {
	return (
		<FadeIn
			transitionDuration={1500}
			className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
			<div ref={ref}>
				<MessageOverlay>
					<MessageContent>{message}</MessageContent>
				</MessageOverlay>
				<StyledTimestamp>
					<Moment interval={1000} date={timestamp} fromNow />
				</StyledTimestamp>
			</div>
		</FadeIn>
	);
}

const MessageContent = styled.p`
	font-size: 14px;
	line-height: 20px;
`;

const MessageOverlay = styled.div`
	background: #2afebd11;
	color: #62ffb3;

	border-radius: 8px;
	padding: 12px;
`;

const StyledTimestamp = styled.span`
	display: flex;
	justify-content: flex-end;
	opacity: 0.8;

	margin-top: 4px;
	margin-right: 8px;

	line-height: 1rem;
	font-size: 12px;
	color: #888;
`;
