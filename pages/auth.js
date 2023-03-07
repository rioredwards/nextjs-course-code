import { useEffect, useState } from "react";
import AuthForm from "../components/auth/auth-form";
import { useRouter } from "next/router";
import classes from "../components/profile/user-profile.module.css";
import { getSession } from "next-auth/client";

function AuthPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // redirect to profile page if user is authenticated
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p className={classes.profile}>Loading...</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
