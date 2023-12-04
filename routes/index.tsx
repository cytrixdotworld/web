import IconBrandGithub from "tabler-icons/brand-github.tsx";
import IconBrandDiscord from "tabler-icons/brand-discord.tsx";

export default function Index() {
  return (
    <>
      <head>
        <title>Cytrix</title>
      </head>
      <main class="w-screen min-h-screen flex justify-center items-center text-baseline-light-on-surface relative">
        <div>
          <img src="/icon.webp" class="rounded-full w-28 h-28 mx-auto" />
          <hr class="border-none h-4" />
          <h1 class="font-bold text-4xl text-center font-display">Cytrix</h1>
          <hr class="border-none h-4" />
          <p class="text-center text-xl">
            A multiplayer touchscreen circle game.
          </p>
          <hr class="border-none h-4" />
          <div class="flex flex-col lg:flex-row items-center justify-between gap-x-2 gap-y-4">
            <a
              href="/signup"
              class="w-full lg:w-3/4 bg-baseline-light-primary hover:brightness-110 font-display text-baseline-light-on-primary py-3 select-none rounded-full font-medium active:brightness-90 transition text-center"
            >
              Sign Up
            </a>
            <a
              href="/signin"
              class="hover:underline text-baseline-light-on-surface-variant select-none font-medium"
            >
              Sign In
            </a>
          </div>
        </div>
        <footer className="absolute right-8 bottom-8 flex items-center gap-x-6">
          <a
            href="https://github.com/cytrixdotworld"
            aria-label="GitHub organization"
            class="text-baseline-light-on-surface-variant hover:text-baseline-light-on-surface transition-colors rounded-full"
          >
            <IconBrandGithub />
          </a>
          <a
            href="#"
            aria-label="Discord server"
            class="text-baseline-light-on-surface-variant hover:text-baseline-light-on-surface transition-colors rounded-full"
          >
            <IconBrandDiscord />
          </a>
        </footer>
      </main>
    </>
  );
}
