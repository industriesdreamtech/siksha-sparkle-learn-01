
import { AuthForm } from '@/components/auth/AuthForm';

export default function SignIn() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-1 items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthForm defaultMode="signin" />
      </div>
    </div>
  );
}
