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
import { Avito, ButtonComponent, Header } from "../components";
import assets from "../assets";

const EditingAdding = () => {
  return (
    <>
      <Header text="Редактирование /  добавление" addBtn={false} />
      <Stack className="card-box">
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
            alignItems={{ base: "end", tablet: "center" }}
            justifyContent={{ base: "end", tablet: "start" }}
            gap={{ base: 3, sm: 4 }}
            pl={8}
            pt={{ base: 3, sm: 4 }}
            mt={2}
            pb={{ base: 4, sm: 6, desktop: 8 }}
            flexWrap="wrap"
          >
            <Select
              size={{ base: "sm", sm: "lg" }}
              w={{ base: "100%", tablet: "500px" }}
            >
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
          <Stack
            spacing={{ base: 3, sm: 4 }}
            className="line-box"
            pl={8}
            mt={2}
            pt={{ base: 3, sm: 4 }}
            pb={{ base: 4, sm: 6, desktop: 8 }}
          >
            <Box>
              <Text
                mb={1}
                color="black.1"
                fontSize={{ base: "sm", sm: "15px", desktop: "16px" }}
              >
                Стратегия
              </Text>
              <Select
                size={{ base: "sm", sm: "lg" }}
                w={{ base: "100%", tablet: "500px" }}
              >
                <option>Пропущенные сообщения</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </Select>
            </Box>
            <Box>
              <Text
                mb={1}
                color="black.1"
                fontSize={{ base: "sm", sm: "15px", desktop: "16px" }}
              >
                Сообщение считается пропущенным через
              </Text>
              <Input
                w={{ base: "100%", tablet: "500px" }}
                placeholder="20 мин."
                size={{ base: "sm", sm: "lg" }}
              />
            </Box>
            <FormControl display="flex" gap={3} alignItems="center">
              <Switch id="email-alerts" isChecked />
              <FormLabel
                userSelect="none"
                htmlFor="email-alerts"
                color="black.1"
                fontWeight={400}
                fontSize={{ base: "sm", sm: "16px" }}
                ml="0"
                mb="0"
              >
                Присылать уведомления только в рабочее время
              </FormLabel>
            </FormControl>
            <Box>
              <Text
                mb={1}
                color="black.1"
                fontSize={{ base: "sm", sm: "15px", desktop: "16px" }}
              >
                Рабочие часы
              </Text>
              <Flex
                alignItems="center"
                maxW={{ base: "100%", tablet: "500px" }}
              >
                <Input
                  w={{ base: "62px", xs: "full" }}
                  placeholder="10:00"
                  size={{ base: "sm", sm: "lg" }}
                />
                <Box
                  w={{ base: 4, sm: "20px" }}
                  h="1px"
                  bg="#E2E8F0"
                  mx={{ base: 2, md: 3 }}
                />
                <Input
                  w={{ base: "62px", xs: "full" }}
                  placeholder="10:00"
                  size={{ base: "sm", sm: "lg" }}
                />
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
          <Stack
            pt={{ base: 3, sm: 4 }}
            pb={{ base: 4, sm: 6, desktop: 6 }}
            spacing={4}
            className="line-box"
            pl={8}
            mt={2}
          >
            <Box>
              <Text
                mb={1}
                color="black.1"
                fontSize={{ base: "sm", sm: "15px", desktop: "16px" }}
              >
                Добавленные аккаунты
              </Text>
              <Flex
                gap="10px"
                flexWrap="wrap"
                w={{ base: "100%", tablet: "500px" }}
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
              <Text
                mb={1}
                color="black.1"
                fontSize={{ base: "sm", sm: "15px", desktop: "16px" }}
              >
                Добавление аккаунта
              </Text>
              <Input
                w={{ base: "100%", tablet: "500px" }}
                placeholder="t.me@"
                size={{ base: "sm", sm: "lg" }}
              />
            </Box>
          </Stack>
        </Box>
      </Stack>
      <Flex
        gap={{ base: 2, sm: 3 }}
        flexDir={{ base: "column", sm: "row" }}
        justifyContent="end"
        mt={{ base: "20px", sm: 8 }}
        mb="45px"
      >
        <ButtonComponent
          size={{ base: "lg", sm: "md" }}
          icon={assets.trashLogo}
          variant="outline"
          text="Удалить навсегда"
          color="black.5"
          width={{ base: "full", sm: "fit-content" }}
        />
        <ButtonComponent
          colorScheme={"brand"}
          text={"Добавить"}
          width={{ base: "full", sm: "fit-content" }}
          icon={assets.saveIcon}
          size={{ base: "lg", sm: "md" }}
        />
      </Flex>
    </>
  );
};
export default EditingAdding;
