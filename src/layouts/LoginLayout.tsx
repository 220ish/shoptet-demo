import { ReactNode } from "react";
import FadeIn from "react-fade-in";

import styled from "styled-components";

type LayoutProps = {
	children: ReactNode;
};

const ContainerLayout = styled.div`
  background-color: #000;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`

export const LoginLayout = ({ children }: LayoutProps) => {
	return (
		<FadeIn transitionDuration={1000}>
			<ContainerLayout>
        {children}
      </ContainerLayout>
		</FadeIn>
	);
};