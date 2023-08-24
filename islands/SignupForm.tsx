import { useId } from "preact/hooks";
import { client } from "https://esm.sh/@passwordless-id/webauthn@1.2.4";
import { type Signal, useSignal } from "@preact/signals";

export default function SignupForm(
  { challenge }: { challenge: string },
) {
  const usernameId = useId();
  const displayNameId = useId();
  const username = useSignal("");
  const displayName = useSignal("");

  return (
    <div class="flex flex-col gap-y-4 max-w-sm">
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
          value={username.value}
          onChange={(e) => username.value = e.currentTarget.value}
        />
      </div>
      <div>
        <label htmlFor={displayNameId}>Display Name</label>
        <input
          id={displayNameId}
          class="block w-full border px-4 py-2 rounded-lg hover:border-zinc-600 transition-colors"
          name="displayName"
          value={displayName.value}
          onChange={(e) => displayName.value = e.currentTarget.value}
        />
      </div>
      <button class="w-full max-w-sm bg-zinc-600 text-white rounded-md py-2 hover:brightness-110 active:brightness-90 transition"// onClick={webAuthnFlow}
      >
        Continue with <span class="font-medium">WebAuthn</span>
      </button>
      {
        /* <button class="w-full max-w-sm bg-blue-500 text-white rounded-md py-2">
              Continue with Google
            </button> */
      }
    </div>
  );
}
