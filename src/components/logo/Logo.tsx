import { FC } from "react";
import { Brain } from "lucide-react";
import Link from "next/link";
const Logo: FC = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Brain className="h-8 w-8 text-primary" />
      <span className="text-lg sm:text-xl font-bold text-primary hidden sm:block">
        SkillScope
      </span>
    </Link>
  );
};

export default Logo;
