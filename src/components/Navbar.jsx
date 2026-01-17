import { use, useState } from "react";
import { Menu, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router";
import { NAVLINKS } from "../lib/constant";
import { AuthContext } from "../context/auth/context";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = use(AuthContext) || {};
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut().then(() => {
      navigate("/login");
    });
  };

  return (
    <div className="overflow-hidden">
      <nav className="bg-card border-b border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="text-primary font-bold text-xl tracking-wide capitalize"
              >
                life drop
              </Link>
            </div>
            {/* Desktop Links */}
            <div className="hidden md:flex space-x-6 items-center">
              {NAVLINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-muted-foreground hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
              {/* Logged in / auth buttons */}
              {user ? (
                <div className="ml-4 relative">
                  <DropdownMenu>
                    <DropdownMenuTrigger>
                      <Avatar className="h-8 w-8 rounded-lg cursor-pointer">
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className="rounded-full text-primary">
                          <User />
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuLabel>{user.name}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild className="cursor-pointer">
                        <Link to="/dashboard">Profile</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={handleLogout}
                        className="cursor-pointer"
                      >
                        LogOut
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="px-4 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition font-medium cursor-pointer"
                >
                  Login
                </Link>
              )}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-muted-foreground"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`md:hidden border-t border-border bg-card px-4 py-2 space-y-2 transition ${
          isOpen
            ? "translate-0 opacity-100"
            : "translate-x-full opacity-0 absolute"
        }`}
      >
        {NAVLINKS.map((link) => (
          <Link
            key={link.name}
            to={link.to}
            className="block text-muted-foreground hover:text-primary transition"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        {user ? (
          <div className="pt-2 border-t border-border space-y-2">
            <Link
              to="/dashboard"
              className="block text-muted-foreground hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="block text-muted-foreground hover:text-primary transition"
            >
              LogOut
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="block my-4 px-4 py-1 rounded-md bg-primary text-primary-foreground hover:bg-primary-hover transition font-medium text-center"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
