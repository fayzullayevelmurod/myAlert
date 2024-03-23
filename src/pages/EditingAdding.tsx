import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Stack,
  Switch,
  Text,
} from "@chakra-ui/react";
import { Avito, ButtonComponent } from "../components";
import assets from "../assets";
import { SmallCloseIcon } from "@chakra-ui/icons";

const EditingAdding = () => {
  return (
    <>
      <Stack spacing={2} bg="white" p={6} borderRadius="xl">
        <Box>
          <Flex gap={2} alignItems="center">
            <Flex
              fontSize={{ base: "sm", sm: "15px", desktop: "base" }}
              borderRadius="50%"
              w={6}
              h={6}
              color="white"
              justifyContent="center"
              alignItems="center"
              bg="brand.base"
            >
              1
            </Flex>
            <Heading
              as="h5"
              fontSize={{ base: "sm", sm: "15px", desktop: "base" }}
              color="black.1"
              fontWeight={500}
              lineHeight="22px"
            >
              Выберите сервис для получения данных
            </Heading>
          </Flex>
          <Flex
            className="line-box"
            alignItems="center"
            gap={4}
            pl={8}
            pt={6}
            mt={2}
            pb={8}
          >
            <Select size="lg" w="500px">
              <option value="Brand Jewelry Studio">Brand Jewelry Studio</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Text
              cursor="pointer"
              userSelect="none"
              color="black.5"
              fontWeight={500}
              lineHeight="24px"
            >
              Удалить
            </Text>
          </Flex>
        </Box>
        <Box>
          <Flex gap={2} alignItems="center">
            <Flex
              fontSize={{ base: "sm", sm: "15px", desktop: "base" }}
              borderRadius="50%"
              w={6}
              h={6}
              color="white"
              justifyContent="center"
              alignItems="center"
              bg="brand.base"
            >
              2
            </Flex>
            <Heading
              as="h5"
              fontSize={{ base: "sm", sm: "15px", desktop: "base" }}
              color="black.1"
              fontWeight={500}
              lineHeight="22px"
            >
              Настройте подключение
            </Heading>
          </Flex>
          <Stack spacing={4} className="line-box" pl={8} pt={4} mt={2} pb={8}>
            <Box>
              <Text mb={1} color="black.1">
                Стратегия
              </Text>
              <Select size="lg" w="500px">
                <option>Пропущенные сообщения</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box>
              <Text mb={1} color="black.1">
                Сообщение считается пропущенным через
              </Text>
              <Input width="500px" placeholder="20 мин." size="lg" />
            </Box>
            <FormControl display="flex" gap={3} alignItems="center">
              <Switch id="email-alerts" isChecked />
              <FormLabel
                userSelect="none"
                htmlFor="email-alerts"
                color="black.1"
                ml="0"
                mb="0"
              >
                Присылать уведомления только в рабочее время
              </FormLabel>
            </FormControl>
            <Box>
              <Text mb={1} color="black.1">
                Рабочие часы
              </Text>
              <Flex alignItems="center" maxW="500px">
                <Input width="full" placeholder="10:00" size="lg" />
                <Box w="20px" h="1px" bg="#E2E8F0" mx={3} />
                <Input width="full" placeholder="10:00" size="lg" />
              </Flex>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Flex gap={2} alignItems="center">
            <Flex
              fontSize={{ base: "sm", sm: "15px", desktop: "base" }}
              borderRadius="50%"
              w={6}
              h={6}
              color="white"
              justifyContent="center"
              alignItems="center"
              bg="brand.base"
            >
              3
            </Flex>
            <Heading
              as="h5"
              fontSize={{ base: "sm", sm: "15px", desktop: "base" }}
              color="black.1"
              fontWeight={500}
              lineHeight="22px"
            >
              Аккаунты для получения уведомлений
            </Heading>
          </Flex>
          <Stack pb={6} spacing={4} className="line-box" pl={8} mt={2} pt={4}>
            <Box>
              <Text mb={1} color="black.1">
                Добавленные аккаунты
              </Text>
              <Flex
                gap="10px"
                flexWrap="wrap"
                width="500px"
                border="1px solid #E2E8F0"
                borderRadius="md"
                py="10px"
                px={4}
              >
                <Avito
                  leftIcon={assets.blueTelegramIcon}
                  color="black.5"
                  text="@tg_name"
                  rightIcon={assets.closeIcon}
                />
                <Avito
                  leftIcon={assets.blueTelegramIcon}
                  color="black.5"
                  text="@tg_name"
                  rightIcon={assets.closeIcon}
                />
                <Avito
                  leftIcon={assets.blueTelegramIcon}
                  color="black.5"
                  text="@tg_name"
                  rightIcon={assets.closeIcon}
                />
              </Flex>
            </Box>
            <Box>
              <Text mb={1} color="black.1">
                Добавление аккаунта
              </Text>
              <Input width="500px" placeholder="t.me@" size="lg" />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Flex gap={3} justifyContent="end" mt={8} mb="45px">
        <ButtonComponent
          size="md"
          icon={assets.trashLogo}
          variant="outline"
          text="Удалить навсегда"
          color="black.5"
        />
        <ButtonComponent
          colorScheme={"brand"}
          size={"md"}
          text={"Добавить"}
          width={"fit-content"}
          icon={assets.saveIcon}
          size="md"
        />
      </Flex>
    </>
  );
};
export default EditingAdding;
