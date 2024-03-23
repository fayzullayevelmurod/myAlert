import {
  Box,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import assets from "../assets";
import { ButtonComponent } from "../components";

const Login = () => {
  return (
    <Box
      backgroundColor="white"
      borderRadius="30px"
      marginTop={{ base: "56px", sm: "40px", desktop: "44px" }}
      marginLeft={{ base: "20px", sm: "32px", desktop: "49px" }}
      marginRight={{ base: "20px", sm: "32px", desktop: 10 }}
      marginBottom={{ base: "56px", sm: "40px", desktop: 8 }}
    >
      <Flex gap={{ base: "40px", desktop: "76px" }} alignItems="center" pr={20}>
        <Box
          maxW={{ base: "100%", sm: "458px", desktop: "695px" }}
          maxH="1043px"
          position="relative"
        >
          <Image
            w="100%"
            h="100%"
            src={assets.loginBanner}
            borderRadius={{ base: "18px", sm: "30px" }}
          />
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Image src={assets.myAlertLogo} />
          </Box>
        </Box>
        <Box flex={1} maxW="500px">
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius="10px"
            className="gradient-bg"
            width={14}
            height={14}
          >
            <Image src={assets.callIcon} />
          </Flex>
          <Heading
            fontSize={{ base: "28px", sm: "36px", desktop: "48px" }}
            lineHeight={{ base: "34px", sm: "58px", desktop: "43px" }}
            fontWeight="bold"
            my={{ base: "20px", desktop: 8 }}
            color="black.base"
          >
            Вход в аккаунт
          </Heading>
          <Text lineHeight={6} mb={1} color="black.1">
            Телефон
          </Text>
          <Input placeholder="+7 (___) ___ - __ - __" size="lg" />
          <Checkbox
            size="sm"
            colorScheme="brand"
            defaultChecked
            color="black.3"
            mt={4}
            mb={{ base: "20px", desktop: 8 }}
          >
            Запомнить меня
          </Checkbox>
          <ButtonComponent text={"Далее"} size={"lg"} colorScheme={"brand"} />
        </Box>
      </Flex>
    </Box>
  );
};
export default Login;
