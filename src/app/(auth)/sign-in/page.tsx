import { SignIn } from "@clerk/nextjs"

type SignInPageProps = {
    searchParams: {
        fallbackRedirectUrl: string;
    }
}

export default function SignInPage({searchParams: {fallbackRedirectUrl} }: SignInPageProps ) {
  return (
    <section className="py-14">
      <main className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <SignIn signUpUrl="/sign-up" fallbackRedirectUrl={fallbackRedirectUrl}  />
        </div>
      </main>
    </section>
  )
}
