export default function Index() {
  return (
    <>
      <head>
        <title>Cytrix</title>
      </head>
      <main class="w-screen h-screen flex justify-center items-center">
        <div>
          <img src="/icon.webp" class="rounded-full w-28 h-28 mx-auto" />
          <hr class="border-none h-4" />
          <h1 class="font-bold text-4xl text-center">Cytrix</h1>
          <hr class="border-none h-4" />
          <p class="text-center text-xl">
            A multiplayer touchscreen circle game.
          </p>
          <hr class="border-none h-4" />
          <div class="flex items-center justify-between gap-x-2">
            <a
              href="/signup"
              class="w-3/4 bg-zinc-600 text-white py-2 font-medium hover:brightness-110 active:brightness-90 transition rounded-sm flex justify-center"
            >
              Sign Up
            </a>
            <a href="/signin" class="hover:underline">
              Sign In
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
