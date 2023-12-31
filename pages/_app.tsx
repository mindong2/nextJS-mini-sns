import { SWRConfig } from "swr";
import "../global.css";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) =>
          fetch(url)
            .then((response) => response.json())
            .catch((err) => console.log(err)),
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
