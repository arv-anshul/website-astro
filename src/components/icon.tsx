/** biome-ignore-all lint/performance/noNamespaceImport: import all icons */
import { icons, type LucideIcon, type LucideProps } from "lucide-react";
import * as SimpleIcons from "simple-icons";

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

// Helper to convert kebab-case (arrow-right) to PascalCase (ArrowRight)
const toPascalCase = (str: string) =>
  str.replace(/(^\w|-\w)/g, (clear) => clear.replace("-", "").toUpperCase());

export function Icon({ name, fallback, ...props }: IconProps) {
  // Logic to resolve the icon based on prefix and library
  const resolveIcon = (iconName: string) => {
    // Handle Lucide Icons (prefix: lucide-)
    if (iconName.startsWith("lucide-")) {
      const cleanName = iconName.replace("lucide-", "");
      const pascalName = toPascalCase(cleanName);
      // biome-ignore lint/suspicious/noExplicitAny: don't know the fix
      const IconComponent = (icons as any)[pascalName] as LucideIcon;

      if (IconComponent) {
        return { type: "lucide", Component: IconComponent };
      }
      console.warn(
        `[dynamic-icon]: '${iconName}' not found in the lucide-icon set.`
      );
    }

    // Handle Simple Icons (prefix: si-)
    if (iconName.startsWith("si-")) {
      const cleanName = iconName.replace("si-", "");
      const pascalName = toPascalCase(cleanName);
      // Simple Icons exports objects with { title, slug, hex, path }
      // biome-ignore lint/suspicious/noExplicitAny: don't know the fix
      const iconData = (SimpleIcons as any)[`si${pascalName}`];

      if (iconData) {
        return { type: "simple", data: iconData };
      }
      console.warn(
        `[dynamic-icon]: '${iconName}' not found in the simple-icons set.`
      );
    }

    return null;
  };

  // Try to find the primary icon, then the fallback
  const iconResult =
    resolveIcon(name) || (fallback ? resolveIcon(fallback) : null);

  if (!iconResult) {
    return null;
  }

  // Render Lucide Icon
  if (iconResult.type === "lucide" && iconResult.Component) {
    const { Component } = iconResult;
    return <Component {...props} />;
  }

  // Render Simple Icon (SVG)
  if (iconResult.type === "simple" && iconResult.data) {
    const { data } = iconResult;
    const { color, size, ...svgProps } = props;

    return (
      <svg
        fill={color || "currentColor"}
        height={size || 24}
        role="img"
        viewBox="0 0 24 24"
        width={size || 24}
        xmlns="http://www.w3.org/2000/svg"
        {...svgProps}
      >
        <title>{data.title}</title>
        <path d={data.path} />
      </svg>
    );
  }

  return null;
}
