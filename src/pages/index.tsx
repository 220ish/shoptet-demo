import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import { LoginLayout } from "@layouts/LoginLayout";
import { getCsrfToken } from "next-auth/react";

import SignIn from "@components/AuthPage/SignIn";
import { useEffect } from "react";
import { toast } from "sonner";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>

const AuthPage = ({ csrfToken }: Props) => {

  useEffect(() => {
    const timeout = setTimeout(() => {
      toast(`Use "shoptet" as username/password combination for demo access.`)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

	return (
		<LoginLayout>
			<SignIn csrf={csrfToken}/>
		</LoginLayout>
	);
};

export async function getServerSideProps(context: GetServerSidePropsContext) {
	return {
		props: {
			csrfToken: await getCsrfToken(context),
		},
	};
}

export default AuthPage;