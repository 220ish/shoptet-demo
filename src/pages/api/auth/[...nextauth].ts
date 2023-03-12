import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { NEXTAUTH_SECRET } from "@data/private";

type ICredentials = Record<"username" | "password", string> | undefined;

const demoCredentials = {
	username: "shoptet",
	password: "shoptet",
};

const demoValidator = (input: ICredentials): boolean => {
	if (input?.username !== demoCredentials.username) return false;
	if (input?.password !== demoCredentials.password) return false;
	return true;
};

export default NextAuth({
	secret: NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "shoptet" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "shoptet",
				},
			},
			async authorize(credentials) {
				const validate = demoValidator(credentials);
				if (validate) {
					// <any> Type since authorize() function doesnt accept returned object value due to not verifying the credentials
					return <any>{
						email: "shoptet@demo.cz",
						authorized_at: new Date(),
					};
				}

				return null;
			},
		}),
	],
});
