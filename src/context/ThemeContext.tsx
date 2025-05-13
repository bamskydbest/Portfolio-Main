import { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";

type ThemeContextType = {
  toggleTheme: () => void;
  isDark: boolean;
};

const ThemeContext = createContext<ThemeContextType>({
  toggleTheme: () => {},
  isDark: false,
});

export const useTheme = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDark }}>
      <div
        className={isDark ? "bg-[#121212] text-white" : "bg-white text-black"}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
