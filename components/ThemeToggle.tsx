import { MoonIcon, SunDimIcon } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
      setMounted(true);
    }, []);

    if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className="w-full sm:w-auto">
      <button
        onClick={toggleTheme}
        className="dark:bg-gray-900 bg-gray-100 dark:text-gray-300 text-gray-800 rounded-full p-[9px] transition duration-200 hover:opacity-80"
      >
        {mounted ? theme === "light" ? <MoonIcon size={24} /> : <SunDimIcon size={24} /> : <div className=" h-1 w-1 bg-gray-100 dark:text-gray-300" ></div>}
      </button>
    </div>
  );
};

export default ThemeToggle;
