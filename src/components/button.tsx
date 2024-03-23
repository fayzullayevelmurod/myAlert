import { Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ButtonComponentProps {
  text: string;
  icon?: string;
  rightIcon?: string;
  to: string,
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  icon,
  rightIcon,
  to,
  ...rest
}) => {
  return (
    <Link to={to}>
      <Button display="flex" alignItems="center" gap="6px" {...rest}>
        {icon && <Image src={icon} />}
        <span>{text}</span>
        {rightIcon && <Image src={rightIcon} />}
      </Button>
    </Link>
  );
};
