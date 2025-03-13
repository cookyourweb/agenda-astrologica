import { signIn } from "next-auth/react";

const SignInPage = () => {
  const handleSignIn = () => {
    signIn("google");
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={handleSignIn}>Sign in with Google</button>
    </div>
  );
};

export default SignInPage;
