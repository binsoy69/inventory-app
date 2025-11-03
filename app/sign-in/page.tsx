import { SignIn } from "@stackframe/stack";
import Link from "next/link";
import { stackServerApp } from "@/stack/server";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const user = await stackServerApp.getUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-md w-full space-y-8">
        <SignIn />
        <Link
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-500"
          href="/"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}
