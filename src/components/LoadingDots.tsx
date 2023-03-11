import styled, { keyframes } from "styled-components"

type Props = {
    color?: string;
    className?: string;
}

const LoadingDots = ({ color = "#000", className }: Props) => {
  return (
    <div className={className}>
      <LoadingLayout>
        <LoadingSpan style={{ backgroundColor: color }} />
        <LoadingSpan style={{ backgroundColor: color }} />
        <LoadingSpan style={{ backgroundColor: color }} />
      </LoadingLayout>
    </div>
  );
};

const BlinkAnimation = keyframes`
    0% {
        opacity: 0.2;
    }
    20% {
        opacity: 1;
    }
    100% {
        opacity: 0.2;
    }
`

const LoadingLayout = styled.span`
    display: inline-flex;
    align-items: center;

    &.spacer {
        margin-right: 2px;
    }
`

const LoadingSpan = styled.span`
    animation-name: ${BlinkAnimation};
    animation-duration: 1.4s;
    animation-iteration-count: infinite;
    animation-fill-mode: both;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 1px;
`

export default LoadingDots;
