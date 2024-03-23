// import { Button, Image } from "@chakra-ui/react";
// import { Link } from "react-router-dom";
// 0;
// interface ButtonComponentProps {
//   text: string;
//   icon?: string;
//   rightIcon?: string;
//   to: string;
//   colorScheme: string;
//   width?: string;
//   size: { base: string; md: string; desktop: string };
//   leftIcon: React.ReactNode;
// }

// export const ButtonComponent: React.FC<ButtonComponentProps> = ({
//   text,
//   icon,
//   rightIcon,
//   to,
//   ...rest
// }) => {
//   return (
//     <Link to={to}>
//       <Button display="flex" alignItems="center" gap="6px" {...rest}>
//         {icon && <Image src={icon} />}
//         <span>{text}</span>
//         {rightIcon && <Image src={rightIcon} />}
//       </Button>
//     </Link>
//   );
// };

import { Button, Image, SystemStyleObject } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

interface ButtonComponentProps {
  // text: string;
  // icon?: string;
  // rightIcon?: string;
  // to: string;
  // colorScheme: string;
  // width?: string;
  // size: { base: string; md: string; desktop: string };
  // leftIcon: React.ReactNode;
  text: string;
  icon?: string;
  rightIcon?: string;
  to: string;
  colorScheme?: string;
  width?: string | { base: string; sm: string };
  size:
    | string
    | { base: string; md: string; desktop: string }
    | { base: string; sm: string };
  color?: string;
  leftIcon?: React.ReactNode;
  variant?: string;
  bg?: string;
  _hover?: SystemStyleObject
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  icon,
  rightIcon,
  to,
  colorScheme,
  width,
  size,
  color,
  bg,
  _hover
}) => {
  return (
    <Link to={to}>
      <Button
        colorScheme={colorScheme}
        width={width}
        bg={bg}
        size={size}
        display="flex"
        alignItems="center"
        gap="6px"
        color={color}
        _hover={_hover}
      >
        {icon && <Image src={icon} />}
        <span>{text}</span>
        {rightIcon && <Image src={rightIcon} />}
      </Button>
    </Link>
  );
};
