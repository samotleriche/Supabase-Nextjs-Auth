import { login, signup } from "./actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center p-24">
      <Card className="p-8">
        <form className="flex w-80 flex-col gap-4">
          <h2 className="text-2xl">Login</h2>
          <p className="text-sm text-gray-400">Sign up to join the waitlist!</p>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Email:</Label>
              <Input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="password">Password:</Label>

              <Input id="password" name="password" type="password" required />
            </div>
          </div>
          <Separator />
          <div className="flex flex-col gap-2">
            <Button formAction={login}>Log in</Button>
            <Button formAction={signup}>Sign up</Button>
          </div>
        </form>
      </Card>
    </main>
  );
}
