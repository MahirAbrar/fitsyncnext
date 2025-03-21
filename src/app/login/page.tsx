import Image from "next/image";
import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-700 px-4 py-8 flex flex-col items-center justify-center">
      {/* Logo Container */}
      <div className="mb-8 w-full max-w-[200px]">
        <Image
          src="/logo.png"
          alt="FitSync Logo"
          width={200}
          height={60}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Login Form Component */}
      <LoginForm />
    </main>
  );
}
