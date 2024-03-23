import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import assets from "../assets";
import { ButtonComponent, NavigationLink } from ".";

export default function Sidebar() {
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      bg="white"
      py="24px"
      px={4}
      minW="280px"
      minH="100vh"
    >
      <Box>
        <Image mb={8} mx="auto" src={assets.logo} w="184px" height="54px" />
        <Stack spacing={1}>
          <NavigationLink to="/" icon={assets.widgetIcon} text="Мои аккаунты" />
          <NavigationLink
            to="/connectors"
            icon={assets.notificationIcon}
            text="Коннекторы"
            badgeCount="32+"
          />
        </Stack>
      </Box>

      <Box>
        <Box
          bg={"bg"}
          textAlign="center"
          pt="20px"
          pb={3}
          px="20px"
          borderRadius="xl"
          mb={6}
        >
          <Box
            bg="white"
            py={3}
            px="9px"
            width="fit-content"
            borderRadius="10px"
            mx="auto"
            mb={3}
          >
            <Image src={assets.telegramIcon} />
          </Box>
          <Heading color="black.1" mb={1} fontSize="base" lineHeight={6}>
            Нужна помощь?
          </Heading>
          <Text color="black.5" fontSize="sm" lineHeight="20px" mb="20px">
            Пишите нам в телеграмм, мы поможем!
          </Text>
          <ButtonComponent
            size="sm"
            text="Написать"
            width="full"
            colorScheme="brand"
          />
        </Box>
        <ButtonComponent
          rightIcon={assets.rirghtIcon}
          text="Выйти из профиля"
          colorScheme="gray"
          color="#919EAB"
          size={"sm"}
          w="full"
          to="/login"
        />
      </Box>
    </Flex>
  );
}
