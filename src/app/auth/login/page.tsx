import GoogleIcon from "@/assets/icons/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { KeyRound, Mail } from "lucide-react";
import Link from "next/link";

export default function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white relative px-4">
            {/* Card */}
            <div className="w-full max-w-md bg-white text-center">
                <h1 className="text-3xl font-semibold mb-16">Welcome Back</h1>

                {/* Form */}
                <form className="space-y-4">
                    <Input icon={<Mail className="size-5" />} placeholder="example@gmail.com" />
                    <Input icon={<KeyRound className="size-5" />} placeholder="your password" type="password" />

                    <Button type="button" size="lg" className="w-full">Sign In</Button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow h-px bg-gray-300" />
                    <span className="mx-2 text-xs text-gray-500">OR</span>
                    <div className="flex-grow h-px bg-gray-300" />
                </div>

                {/* Google Button */}
                <Button className="w-full rounded-full" size="lg">
                    <GoogleIcon />
                    Continue with google
                </Button>

                {/* Footer Link */}
                <p className="text-sm mt-6 text-gray-600">
                    Don&apos;t have an account?{" "}
                    <Link className="underline" href="/auth/register">Sign up here</Link>
                </p>
            </div>
        </div>
    )
}
