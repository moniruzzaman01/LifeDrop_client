import { useEffect } from "react";

export default function UnderConstruction() {
  useEffect(() => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);
  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.theme = document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-3xl w-full bg-card border border-default rounded-2xl p-8 md:p-12 text-center space-y-8">
        {/* Logo / Icon */}
        <div
          onClick={toggleTheme}
          className="flex justify-center cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl font-bold">
            🩸
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-3xl md:text-4xl font-bold text-primary">
            Blood Donation Platform
          </h1>
          <p className="text-muted text-lg">
            A community-driven initiative to connect blood donors with those in
            need.
          </p>
        </div>

        {/* Status */}
        <div className="bg-warning/20 border border-default rounded-xl p-4">
          <p className="text-warning font-semibold">
            🚧 Website Under Construction
          </p>
          <p className="text-muted text-sm mt-1">
            We are currently building something meaningful. Please check back
            soon.
          </p>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="border border-default rounded-xl p-4 bg-surface">
            <h3 className="font-semibold text-primary mb-1">Donate Blood</h3>
            <p className="text-muted text-sm">
              Register as a donor and help save lives with your contribution.
            </p>
          </div>

          <div className="border border-default rounded-xl p-4 bg-surface">
            <h3 className="font-semibold text-primary mb-1">Request Blood</h3>
            <p className="text-muted text-sm">
              Quickly request blood during emergencies and reach nearby donors.
            </p>
          </div>

          <div className="border border-default rounded-xl p-4 bg-surface">
            <h3 className="font-semibold text-primary mb-1">Admin Managed</h3>
            <p className="text-muted text-sm">
              Verified requests, secure management, and transparent operations.
            </p>
          </div>
        </div>

        {/* CTA (Disabled for now) */}
        <div className="space-y-3">
          <button
            disabled
            className="bg-primary/50 text-white px-6 py-3 rounded-lg cursor-not-allowed"
          >
            Launching Soon
          </button>
          <p className="text-muted text-sm">
            Expected launch:{" "}
            <span className="text-primary font-medium">Coming Soon</span>
          </p>
        </div>

        {/* Footer */}
        <div className="pt-6 border-t border-default text-sm text-muted">
          © {new Date().getFullYear()} Blood Donation Platform
          <br />
          Together, we can save lives.
        </div>
      </div>
    </div>
  );
}
