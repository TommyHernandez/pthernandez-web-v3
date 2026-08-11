import { LuGithub as Github, LuLinkedin as Linkedin } from "react-icons/lu";
import type {
  SocialLink,
  SocialLinkVariant,
  SocialLinksProps,
} from "@/app/types";

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/tommyhernandez",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pedrothdc/",
    icon: Linkedin,
  },
];

const styles: Record<
  SocialLinkVariant,
  { list: string; link: string; icon: string }
> = {
  icon: {
    list: "flex items-center gap-6",
    link: "inline-flex p-2.5 rounded-lg bg-white border border-ink/8 text-muted hover:text-ink hover:border-ink/18 transition-all",
    icon: "w-5 h-5",
  },
  labelled: {
    list: "flex flex-wrap gap-3",
    link: "inline-flex items-center gap-2 px-4 py-2.5 bg-background border border-ink/8 rounded-xl text-sm font-semibold text-ink hover:bg-surface-muted transition-colors",
    icon: "w-4 h-4",
  },
};

export function SocialLinks({
  variant = "icon",
  className = "",
}: SocialLinksProps) {
  const style = styles[variant];

  return (
    <ul className={`${style.list} ${className}`.trim()}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={style.link}
            aria-label={variant === "icon" ? label : undefined}
          >
            <Icon className={style.icon} />
            {variant === "labelled" && label}
          </a>
        </li>
      ))}
    </ul>
  );
}
