import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShieldAlert, Home, LogIn } from "lucide-react";
import { Link } from "react-router";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function Unauthorized() {
  const { logOut } = useAuth();
  useEffect(() => {
    logOut();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="max-w-lg w-full border border-red-200 shadow-lg">
        <CardContent className="p-8 text-center space-y-6">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
            <ShieldAlert className="h-8 w-8 text-red-600" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Unauthorized Access
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            You don&apos;t have permission to access this page.
            <br />
            Please log in with the correct account or return to a safe page.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="h-4 w-4" />
                Home
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="gap-2 border-red-300 text-red-600 hover:bg-red-50"
            >
              <Link to="/login">
                <LogIn className="h-4 w-4" />
                Login
              </Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground pt-4">
            Error Code: <span className="font-medium">403</span> · Blood
            Donation Platform
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
