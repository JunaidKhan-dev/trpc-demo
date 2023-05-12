import { Inter } from "next/font/google"
import Head from "next/head"

import { trpc } from "@/utils/trpc"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" })
  if (!hello.data) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>TRPC - Basics</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>TRPC Basics</h1>
        <p>{hello.data.greeting}</p>
      </main>
    </>
  )
}
