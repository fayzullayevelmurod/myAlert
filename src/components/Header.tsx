import { Flex, Heading } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { ButtonComponent } from ".";

export const Header = () => {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Heading className="page-title">Мои аккаунты</Heading>
      <ButtonComponent
        colorScheme={"brand"}
        size={"md"}
        leftIcon={<AddIcon />}
        text={"Добавить"}
        width={}
      />
    </Flex>
  );
};
