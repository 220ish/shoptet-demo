import { ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

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
`;

export const AppLayout = ({ children }: LayoutProps) => {
	const { status } = useSession();
	const { replace } = useRouter();

	// useEffect(() => {
	// 	if (status === "unauthenticated") {
	// 		replace("/");
	// 	}
	// }, [status, replace]);

	// if (status !== "authenticated") {
	// 	return null;
	// }

	return (
		<FadeIn transitionDuration={1000}>
			<ContainerLayout>{children}</ContainerLayout>
		</FadeIn>
	);
};
