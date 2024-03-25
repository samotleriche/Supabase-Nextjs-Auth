import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl mb-10">Test</h1>
      <div className="flex gap-4">
        <Button>
          <Link href="/login">Login</Link>
        </Button>
        <Button>
          <Link href="/account">Account</Link>
        </Button>
      </div>
    </main>
  );
}
