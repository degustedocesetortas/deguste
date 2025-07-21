"use client";
import { useSearchParams } from "next/navigation";
import { login, signup, signupGoogle } from "./actions";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirect") || "/";
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <input type="hidden" name="redirect" value={redirectTo} />
      <button type="submit" formAction={login}>
        Log in
      </button>
      <button type="submit" formAction={signup}>
        Sign up
      </button>
      <button type="submit" formAction={signupGoogle}>
        Google
      </button>
    </form>
  );
}
