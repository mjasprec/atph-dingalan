import { Button as ShadButton } from "@/components/ui/button";

enum ButtonVariant {
  Default = "default",
  Destructive = "destructive",
  Outline = "outline",
  Secondary = "secondary",
  Ghost = "ghost",
  Link = "link",
}

type ButtonVariantType =
  | ButtonVariant.Default
  | ButtonVariant.Destructive
  | ButtonVariant.Outline
  | ButtonVariant.Secondary
  | ButtonVariant.Ghost
  | ButtonVariant.Link
  | null
  | undefined;

interface ButtonProps {
  variant?: ButtonVariantType;
  buttonText: string;
}

function Button({ variant, buttonText }: ButtonProps) {
  return <ShadButton variant={variant}>{buttonText}</ShadButton>;
}

export default Button;
