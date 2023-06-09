import { RefObject, } from 'react';

import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import Moment from 'react-moment';

import IconGPT from '@components/IconGPT';

type Props = {
	message: string;
	timestamp: Date;
	ref: RefObject<HTMLDivElement>;
};

export default function ResponseMessage({ message, timestamp, ref }: Props) {

	return (
		<FadeIn transitionDuration={1500}>
			<Overlay ref={ref}>
				<IconOverlay>
					<IconGPT/>
				</IconOverlay>
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
			</Overlay>
		</FadeIn>
	);
}

const Overlay = styled.div`
	display: flex;
	width: 100%;
	max-width: 320px;
	margin-top: 8px;
`

const IconOverlay = styled.div`
	margin-right: 12px;
`

const MessageContent = styled.p`
	font-size: 14px;
	line-height: 20px;
`

const MessageOverlay = styled.div`
	background: #9999991a;
	color: #dedede;

	border-radius: 8px;
	padding: 12px;
`

const StyledTimestamp = styled.span`
	display: flex;
	justify-content: flex-start;
	opacity: .8;

	margin-top: 4px;
	margin-left: 8px;

    line-height: 1rem;
    font-size: 12px;
    color: #888;
`