import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import assets from "../assets";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box bg="white" py="24px" px={4} minW="280px" minH="100vh">
      <Image mb={8} mx="auto" src={assets.logo} w="184px" height="54px" />
      <Stack spacing={1}>
        <NavLink to="/">
          <Flex
            p={3}
            gap={4}
            alignItems="center"
            bg="#F55B3D14"
            borderRadius="lg"
          >
            <Image src={assets.widgetIcon} />
            <Text fontSize="sm" lineHeight="22px" fontWeight={400}>
              Мои аккаунты
            </Text>
          </Flex>
        </NavLink>
        <NavLink to="/">
          <Flex p={3} gap={4} alignItems="center">
            <Image src={assets.notificationIcon} />
            <Text fontSize="sm" lineHeight="22px" fontWeight={400}>
              Коннекторы
            </Text>
            <Box
              fontSize="xs"
              lineHeight="20px"
              fontWeight={700}
              py="2px"
              px={2}
              color="brand"
              borderRadius="6px"
              bg="#F55B3D29"
            >
              32+
            </Box>
          </Flex>
        </NavLink>
      </Stack>
    </Box>
  );
}
