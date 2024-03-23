import { Button, ButtonProps } from "@chakra-ui/react";

interface ButtonComponentProps extends ButtonProps {
  text: string;
}

export const ButtonComponent: React.FC<ButtonComponentProps> = ({
  text,
  size,
  colorScheme,
}) => {
  return (
    <Button colorScheme={colorScheme} w="100%" size={size}>
      {text}
    </Button>
  );
};