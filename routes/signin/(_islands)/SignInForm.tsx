import IconUser from "tabler-icons/user.tsx";
import { computed, useSignal } from "@preact/signals";

export default function SignInForm() {
  const username = useSignal("");
  const step = useSignal(1);
  const avatarUrl = useSignal("");
  const processing = useSignal(false);

  return (
    <form class="w-full text-baseline-light-on-surface bg-baseline-light-surface-container rounded-lg p-8 max-w-sm mx-auto border border-baseline-light-outline-variant">
      {avatarUrl.value
        ? (
          <>
            <img
              src={avatarUrl.value}
              class="w-20 h-20 rounded-full border border-baseline-light-outline mt-8 mb-2 mx-auto"
            />
            <h2 class="text-center font-display font-medium">
              Welcome back, nora!
            </h2>
          </>
        )
        : (
          <div class="w-20 h-20 rounded-full my-8 bg-baseline-light-surface-container-high flex items-center justify-center mx-auto border border-baseline-light-outline">
            <IconUser class="w-8 h-8" />
          </div>
        )}
      {step.value === 1 &&
        (
          <div class="flex items-center gap-x-4">
            <label for="cytrix-signup-username" class="sr-only">
              Username
            </label>
            <input
              id="cytrix-signup-username"
              name="username"
              placeholder="Username"
              pattern="[a-zA-Z0-9]+"
              readonly={processing.value}
              onChange={(e) => {
                username.value = e.currentTarget.value;
              }}
              class={`invalid:border-baseline-light-error ${
                processing.value ? "cursor-wait" : ""
              } invalid:bg-baseline-light-error-container placeholder:text-baseline-light-on-surface-variant placeholder:text-sm w-full bg-baseline-light-surface-container outline-none p-2 text-center border-2 border-baseline-light-outline focus:border-baseline-light-on-surface transition-colors rounded-md`}
            />
          </div>
        )}
      {step.value === 2 && (
        <div class="flex items-center gap-x-4 mt-4">
          <label for="cytrix-signup-password" class="sr-only">
            Password
          </label>
          <input
            id="cytrix-signup-password"
            name="password"
            placeholder="Password"
            type="password"
            class="placeholder:text-baseline-light-on-surface-variant placeholder:text-sm w-full bg-baseline-light-surface-container outline-none p-2 text-center border-2 border-baseline-light-outline focus:border-baseline-light-on-surface transition-colors rounded-md"
          />
        </div>
      )}

      <button
        onClick={() => {
          if (step.value === 1) {
            processing.value = true;
            (new Promise((resolve) => {
              setTimeout(resolve, 2000);
            })).then(() => {
              step.value = 2;
              avatarUrl.value =
                "https://cdn.discordapp.com/avatars/557429876618166283/02f4790ff7e006f6e2cabd40f4c92569.png?size=256";
              processing.value = false;
            });
          } else {
            processing.value = true;
            (new Promise((resolve) => {
              setTimeout(resolve, 2000);
            })).then(() => {
              processing.value = false;
            });
          }
        }}
        type="button"
        class="w-full mb-10 bg-baseline-light-primary font-display text-baseline-light-inverse-on-surface py-2 select-none rounded-lg font-medium active:bg-baseline-light-on-surface-variant transition-colors text-center mt-4"
      >
        {processing.value ? "Processing..." : (
          step.value === 1 ? "Next" : "Sign In"
        )}
      </button>
    </form>
  );
}
