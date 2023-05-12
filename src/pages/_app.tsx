import "@/styles/globals.css"

import { trpc } from "../utils/trpc"

import type { AppType } from "next/app"

const App: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}
export default trpc.withTRPC(App)
