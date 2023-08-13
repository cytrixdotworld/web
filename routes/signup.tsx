import { Head } from "$fresh/runtime.ts";
import { useId } from "preact/hooks";

export default function SignUp() {
  const usernameId = useId();
  const displayNameId = useId();

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
          <form class="flex flex-col gap-y-4 max-w-sm" // onSubmit={webAuthnFlow}
          >
            <div>
              <label
                htmlFor={usernameId}
                class="after:content-['*'] after:text-red-500 after:ml-0.5"
              >
                Username
              </label>
              <input
                id={usernameId}
                class="block w-full border px-4 py-2 rounded-lg hover:border-zinc-600 transition-colors"
                required
                name="username"
                autoComplete="username webauthn"
              />
            </div>
            <div>
              <label htmlFor={displayNameId}>Display Name</label>
              <input
                id={displayNameId}
                class="block w-full border px-4 py-2 rounded-lg hover:border-zinc-600 transition-colors"
                name="displayName"
              />
            </div>
            <button class="w-full max-w-sm bg-zinc-600 text-white rounded-md py-2 hover:brightness-110 active:brightness-90 transition">
              Continue with <span class="font-medium">WebAuthn</span>
            </button>
            {
              /* <button class="w-full max-w-sm bg-blue-500 text-white rounded-md py-2">
              Continue with Google
            </button> */
            }
          </form>
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
