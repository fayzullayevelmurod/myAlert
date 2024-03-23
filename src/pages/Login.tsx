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
import { useState } from "react";

export const Login = () => {
  const phoneNumberRegex = /^\+7 \(\d{3}\) \d{3} - \d{2} - \d{2}$/;

  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);
    setIsValidPhoneNumber(phoneNumberRegex.test(inputValue));
    console.log(inputValue);
  };
  return (
    <Box
      backgroundColor="white"
      borderRadius="30px"
      marginTop={{ base: "56px", sm: "40px", desktop: "44px" }}
      marginLeft={{ base: "20px", sm: "32px", desktop: "49px" }}
      marginRight={{ base: "20px", sm: "32px", desktop: 10 }}
      marginBottom={{ base: "56px", sm: "40px", desktop: 8 }}
      width="full"
      backgroundImage={{ base: assets.loginBanner, md: "none" }}
      py={{ base: "126px", md: "auto" }}
    >
      <Image
        w={{ base: "219px", md: "full" }}
        h={{ base: "63px", md: "full" }}
        src={assets.myAlertLogo}
        mb={6}
        display={{ base: "block", md: "none" }}
        mx="auto"
      />
      <Flex
        gap={{ base: "40px", desktop: "76px" }}
        alignItems="center"
        pr={{ base: "0", md: 10, desktop: 20 }}
        position="relative"
        flexDir={{ base: "column", md: "row" }}
      >
        <Box
          maxW={{ base: "full", md: "458px", desktop: "695px" }}
          maxH={{ base: "auto", md: "1043px" }}
          position="relative"
          display={{ base: "none", md: "block" }}
        >
          <Image
            w="full"
            h="full"
            src={assets.loginBanner}
            borderRadius={{ base: "18px", sm: "30px" }}
            display={{ base: "none", md: "block" }}
          />
          <Box
            position={{ base: "relative", md: "absolute" }}
            top={{ base: "156px", md: "50%" }}
            left="50%"
            transform="translate(-50%, -50%)"
          >
            <Image
              w={{ base: "219px", md: "full" }}
              h={{ base: "63px", md: "full" }}
              src={assets.myAlertLogo}
            />
          </Box>
        </Box>
        <Box
          flex={1}
          maxW={{ base: "full", md: "500px" }}
          className="login-content"
        >
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
            whiteSpace="nowrap"
          >
            Вход в аккаунт
          </Heading>
          <Text lineHeight={6} mb={1} color="black.1">
            Телефон
          </Text>
          <Input
            type="number"
            placeholder="+7 (___) ___ - __ - __"
            size="lg"
            value={phoneNumber}
            onChange={handleChange}
          />
          {isValidPhoneNumber ? (
            <p style={{ color: "green" }}>Valid phone number</p>
          ) : (
            <p style={{ color: "red" }}>Invalid phone number</p>
          )}
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
          <ButtonComponent
            text={"Далее"}
            width="full"
            size={"lg"}
            colorScheme={"brand"}
            to="/login/send-code"
          />
        </Box>
      </Flex>
    </Box>
  );
};
