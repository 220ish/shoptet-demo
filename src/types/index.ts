import type { NextApiResponse } from "next";
import type { AppProps } from "next/app";
import type { Session } from "next-auth";
import type { FC } from "react";

export type AppPropsExtended = AppProps & {
	Component: FC;
	pageProps: {
		session: Session;
	};
};

export interface NextApiResponseWithSession extends NextApiResponse {
	session: Session|null;
	parentId?: string;
}