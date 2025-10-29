import { useState } from "react";
import { useTranslation } from "react-i18next";
import { languages } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRTLClasses } from "@/hooks/use-rtl";

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation("navigation");
  const rtl = useRTLClasses();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (languageCode: string) => {
    // Store manually selected language with higher priority
    localStorage.setItem("i18nextLng", languageCode);
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
  };

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-9 w-auto px-3 min-w-0">
          <Globe className={cn("h-4 w-4", rtl.me("2"))} />
          <span className="text-sm font-medium truncate max-w-24">
            {currentLanguage.nativeName}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={rtl.isRtl ? "start" : "end"}
        className="w-64 max-h-80 overflow-y-auto"
      >
        <div className="p-2">
          <p
            className={cn(
              "text-sm font-medium text-foreground mb-2",
              rtl.textStart
            )}
          >
            {t("footer.selectLanguage", "Select Language")}
          </p>
          {languages.map((language) => (
            <DropdownMenuItem
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={cn(
                "flex items-center justify-between p-2 cursor-pointer rounded-md transition-colors",
                i18n.language === language.code
                  ? "bg-primary/10 text-primary"
                  : "hover:bg-muted"
              )}
            >
              <div className={cn("flex flex-col min-w-0 flex-1", rtl.me("2"))}>
                <span className="text-sm font-medium truncate">
                  {language.nativeName}
                </span>
                <span className="text-xs text-muted-foreground truncate">
                  {language.name}
                </span>
              </div>
              {i18n.language === language.code && (
                <Check className="h-4 w-4 text-primary flex-shrink-0" />
              )}
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
