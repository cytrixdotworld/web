import SignInForm from "./(_islands)/SignInForm.tsx";

export default function SignUp() {
  return (
    <>
      <head>
        <title>Sign Up</title>
      </head>
      <main class="flex h-screen text-baseline-light-on-surface">
        <div class="w-full bg-white h-full p-8 flex gap-y-4 flex-col justify-center">
          <h1 class="font-medium text-3xl font-display text-center">Sign In</h1>
          <SignInForm />
          <div class="flex gap-x-4 text-sm mx-auto">
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
