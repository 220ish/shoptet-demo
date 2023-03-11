import 'tailwindcss/tailwind.css'

import { SessionProvider } from "next-auth/react";
import { AppPropsExtended } from "@types";

import Toaster from "@components/Toaster";

const App = ({ Component, pageProps }: AppPropsExtended) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Toaster />
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
