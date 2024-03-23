import { Flex, Image, Text } from "@chakra-ui/react";

interface AvitoProps {
  text: string;
  leftIcon?: string;
  rightIcon?: string;
  color?: string;
}

export const Avito: React.FC<AvitoProps> = ({
  text,
  leftIcon,
  rightIcon,
  color,
  ...rest
}) => {
  return (
    <Flex
      {...rest}
      borderRadius="xl"
      bg="bg"
      alignItems="center"
      gap={1}
      py={2}
      px={{ base: 3, desktop: 4 }}
    >
      {leftIcon && <Image src={leftIcon} />}
      <Text
        color={color ? color : "#171923"}
        fontSize={{ base: "sm", desktop: "16px" }}
        lineHeight="19.2px"
        fontWeight={500}
      >
        {text}
      </Text>
      {rightIcon && <Image src={rightIcon} />}
    </Flex>
  );
};
