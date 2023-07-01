import "@/styles/globals.css";
import { Auth0Provider } from "@auth0/auth0-react";

// INTERNAL IMPORT
import { Provider } from "react-redux";
import store from "../api/store";
import Script from "next/script";

const App = ({ Component, pageProps }) => {
  const DOMAIN = process.env.NEXT_PUBLIC_AUTHO_DOMAIN;
  const CLIENTID = process.env.NEXT_PUBLIC_AUTHO_CLIENTID;

  return (
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENTID}
      authorizationParams={{
        redirect_uri: "http://localhost:3000/",
      }}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <Script src="https://studio.alan.app/web/lib/alan_lib.min.js" />
    </Auth0Provider>
  );
};

export default App;
