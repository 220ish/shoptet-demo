import styled from 'styled-components';
import Moment from 'react-moment';

type Props = {
	message: string;
	timestamp: Date;
};

export default function SenderMessage({ message, timestamp }: Props) {
	return (
		<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
			<div>
				<MessageOverlay>
					<MessageContent>
						{message}
					</MessageContent>
				</MessageOverlay>
				<StyledTimestamp>
                    <Moment interval={1000} date={timestamp} fromNow/>
                </StyledTimestamp>
			</div>
		</div>
	);
}

const Overlay = styled.div`
	display: flex;
	justify-content: flex-end;

	width: 100%;
	max-width: 320px;
	
	margin-top: 8px;
	margin-left: auto;	

	--space-x-reverse: 0;
    margin-right: calc(0.75rem * var(--space-x-reverse));
    margin-left: calc(0.75rem * calc(1 - var(--space-x-reverse)));
`

const MessageContent = styled.p`
	font-size: 14px;
	line-height: 20px;
`

const MessageOverlay = styled.div`
	background: #2afebd11;
	color: #62ffb3;

	border-radius: 8px;
	padding: 12px;
`

const StyledTimestamp = styled.span`
	display: flex;
	justify-content: flex-end;
	opacity: .8;

	margin-top: 4px;
	margin-right: 8px;

    line-height: 1rem;
    font-size: 12px;
    color: #888;
`