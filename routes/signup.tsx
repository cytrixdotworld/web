import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import SignupForm from "../islands/SignupForm.tsx";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <main class="flex h-screen">
        <div class="w-1/3 bg-white h-full hidden lg:block"></div>
        <div class="w-full bg-white h-full p-8 flex flex-col justify-center">
          <h1 class="font-medium text-3xl">Sign Up</h1>
          <hr class="mt-4 mb-8 max-w-md" />
          <SignupForm challenge={{} as any} />
          <hr class="my-8 max-w-md" />
          <div class="flex gap-x-4 text-sm">
            <a class="hover:underline" href="#">
              Support
            </a>
            <a class="hover:underline" href="#">
              Discord
            </a>
            <a class="hover:underline" href="#">
              Github
            </a>
            <a class="hover:underline" href="#">
              Statistics
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
