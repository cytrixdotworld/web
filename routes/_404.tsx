import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>404 - Page not found</title>
      </Head>
      <main class="h-screen flex justify-center items-center flex-col max-w-screen-sm mx-auto">
        <span class="font-bold text-3xl">404</span>
        <hr class="w-full my-4" />
        <span class="text-xl">Not Found</span>
      </main>
    </>
  );
}
