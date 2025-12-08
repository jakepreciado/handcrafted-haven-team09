import LoginForm from '@/app/ui/login-form';
import { Suspense } from 'react';
import Image from 'next/image';
import loginHeroImage from "../../../public/handcrafted-login-hero-image.jpg"

export default function LoginPage() {
  return (
    <>
      <div className="relative mx-auto max-w-[950px] w-full h-[535px]">
        <Image
          src={loginHeroImage}
          alt="hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center z-10 w-full max-w-[950px]">
          <div className="flex items-center justify-center w-full max-w-[950px] h-[535px] rounded-lg shadow-lg bg-[rgba(211,198,180,0.55)] backdrop-blur-sm p-6">
            <div className="w-full max-w-[400px] bg-white p-4 rounded-md">
              <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}