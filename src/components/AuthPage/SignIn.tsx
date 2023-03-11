import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { toast } from "sonner";

import styled from "styled-components";

const SignIn = ({ csrf }: { csrf?: string }) => {
	const { register, handleSubmit } = useForm();
    const { replace } = useRouter()

	const onSubmit = async (data: any) => {
		try {
			const response = await signIn("credentials", {
				username: data.username,
				password: data.password,
				redirect: false,
			});

			if (response?.ok) {
				return replace("/chat");
			}

			toast.error(`Your username or password is incorrect.`);
		} catch (error) {
			// handle possible 500 error
			toast.error(`Internal error, please try again later.`);
		}
	};

	return (
		<main className="flex flex-col items-center h-screen justify-center">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col rounded-xl px-10 py-5 space-y-3">
					<input name="csrfToken" type="hidden" defaultValue={csrf} />

					<StyledOverlay>
						<StyledLabel>Username</StyledLabel>
						<StyledInput
							type="text"
							placeholder="shoptet"
							{...register("username", { required: true })}
						/>
					</StyledOverlay>

					<StyledOverlay>
						<StyledLabel>Password</StyledLabel>
						<StyledInput
							type="password"
							placeholder="shoptet"
							{...register("password", { required: true })}
						/>
					</StyledOverlay>

					<StyledOverlay className="mx-auto pt-5">
						<StyledButton type="submit">
                            Sign in
                        </StyledButton>
					</StyledOverlay>
				</div>
			</form>
		</main>
	);
};


const StyledInput = styled.input`
    border-width: 1px;
    border-color: #333;
    border-radius: 0.375rem;

    padding: 8px;

    background-color: #000;
    line-height: 20px;
    font-size: 14px;
    color: #cecece;

    &:focus {
        outline: 2px solid transparent;
        border-color: #7a7a7a;
        outline-offset: 2px;    
    }
`

const StyledLabel = styled.label`
    line-height: 1rem;
    font-size: 12px;
    color: #888;

    margin-bottom: 4px;
    margin-left: .5px;
`

const StyledOverlay = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: calc(0.5rem * calc(1 - 0));
    margin-bottom: calc(0.5rem * 0);
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

export default SignIn;
