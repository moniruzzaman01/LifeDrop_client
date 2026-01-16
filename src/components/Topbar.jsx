import { use, useEffect, useState } from "react";
import { Clock, Github, Facebook, MessageCircleMore } from "lucide-react";
import { Link } from "react-router";
import { AuthContext } from "../context/auth/context";

export default function Topbar() {
  const [time, setTime] = useState();
  const { user } = use(AuthContext);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formatted = now.toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

      // "Mon, Jan 15, 10:42:18"
      setTime(formatted.replace(", ", " | ").replace(", ", " | "));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const userName = user
    ? user.name.split(" ").filter(Boolean)[user.name.split(" ").length - 1]
    : "Saviour";

  return (
    <div className="w-full border-b bg-card text-card-foreground">
      <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-xs">
        <div className="hidden sm:block">❤️ Donate Blood, Save Lives</div>
        <div className="font-medium text-muted-foreground flex items-center gap-2">
          {time}
          <Clock size={14} className=" text-primary" />
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="https://github.com/moniruzzaman01"
            target="_blank"
            className="text-muted-foreground hover:text-primary transition"
          >
            <Github size={14} />
          </Link>
          <Facebook
            size={14}
            className="text-muted-foreground hover:text-primary transition cursor-pointer"
          />
          <MessageCircleMore
            size={14}
            className="text-muted-foreground hover:text-primary transition cursor-pointer"
          />
          <span className="ml-2 hidden md:block text-muted-foreground">
            Hi, {userName}
          </span>
        </div>
      </div>
    </div>
  );
}
