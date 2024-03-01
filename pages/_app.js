import "../styles/globals.css";

import { SWRConfig } from "swr";
// import Amplify from "aws-amplify";
import { Provider } from "next-auth/client";

// Amplify.configure({
//   Auth: {
//     identityPoolID: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,
//     region: process.env.NEXT_PUBLIC_REGION,
//     userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,
//     userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
//   },
//   ssr: true,
// });

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: async (resource, init) =>
          await fetch(resource, init).then((res) => res.json()),
      }}
    >
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </SWRConfig>
  );
}

export default MyApp;
