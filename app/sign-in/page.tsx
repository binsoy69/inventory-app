import { SignIn } from "@stackframe/stack";
import Link from "next/dist/client/link";
export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-md w-full space-y-8">
        <SignIn /> <Link href="/">Go Back</Link>
      </div>
         {" "}
    </div>
  );
}
