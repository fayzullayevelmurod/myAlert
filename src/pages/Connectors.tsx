import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Stack,
  Switch,
} from "@chakra-ui/react";
import { Avito, ButtonComponent } from "../components";
import assets from "../assets";

const Connectors = () => {
  return (
    <Stack spacing={4}>
      <Box className="card-box">
        <Flex justifyContent="space-between" pb="20px" alignItems="center">
          <Flex alignItems="center" gap={3}>
            <Heading
              as="h4"
              fontSize="lg"
              fontWeight={600}
              lineHeight="21.6px"
              color="#171923"
            >
              Уведомления о пропущенных сообщениях
            </Heading>
            <ButtonComponent
              icon={assets.penciIcon}
              color="#919EAB"
              size="xs"
              text="Изменить"
              to="/editting-adding"
            />
          </Flex>
          <FormControl width="fit-content" display="flex" alignItems="center">
            <FormLabel
              color="black.4"
              fontSize="14px"
              fontWeight={400}
              htmlFor="email-alerts"
              mb="0"
            >
              Отключено
            </FormLabel>
            <Switch size="lg" isChecked id="email-alerts" />
          </FormControl>
        </Flex>
        <Flex borderTop="1px solid #EEEFF0" pt="20px" gap={6}>
          <Avito rightIcon={assets.avitoLogo} text="Авито" />
          <Image src={assets.nextIcon} />
          <Flex gap={2}>
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito color="brand.base" text="3 more" />
          </Flex>
        </Flex>
      </Box>
      <Box className="card-box">
        <Flex justifyContent="space-between" pb="20px" alignItems="center">
          <Flex alignItems="center" gap={3}>
            <Heading
              as="h4"
              fontSize="lg"
              fontWeight={600}
              lineHeight="21.6px"
              color="#171923"
            >
              Автоответы для клиентов Авито
            </Heading>
            <ButtonComponent
              icon={assets.penciIcon}
              color="#919EAB"
              size="xs"
              text="Изменить"
              to="/editting-adding"
            />
          </Flex>
          <FormControl width="fit-content" display="flex" alignItems="center">
            <FormLabel
              color="black.4"
              fontSize="14px"
              fontWeight={400}
              htmlFor="email-alerts"
              mb="0"
            >
              Отключено
            </FormLabel>
            <Switch size="lg" id="email-alerts" />
          </FormControl>
        </Flex>
        <Flex borderTop="1px solid #EEEFF0" pt="20px" gap={6}>
          <Avito leftIcon={assets.settingsIcon} text="Автоответ" />
          <Image src={assets.smallNextIcon} />
          <Flex gap={2}>
            <Avito leftIcon={assets.avitoLogo} text="Авито" />
          </Flex>
        </Flex>
      </Box>
      <Box className="card-box">
        <Flex justifyContent="space-between" pb="20px" alignItems="center">
          <Flex alignItems="center" gap={3}>
            <Heading
              as="h4"
              fontSize="lg"
              fontWeight={600}
              lineHeight="21.6px"
              color="#171923"
            >
              Уведомления о пропущенных сообщениях
            </Heading>
            <ButtonComponent
              icon={assets.penciIcon}
              color="#919EAB"
              size="xs"
              text="Изменить"
              to="/editting-adding"
            />
          </Flex>
          <FormControl width="fit-content" display="flex" alignItems="center">
            <FormLabel
              color="black.4"
              fontSize="14px"
              fontWeight={400}
              htmlFor="email-alerts"
              mb="0"
            >
              Отключено
            </FormLabel>
            <Switch size="lg" isChecked id="email-alerts" />
          </FormControl>
        </Flex>
        <Flex borderTop="1px solid #EEEFF0" pt="20px" gap={6}>
          <Avito rightIcon={assets.avitoLogo} text="Авито" />
          <Image src={assets.nextIcon} />
          <Flex gap={2}>
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito
              color="black.5"
              leftIcon={assets.blueTelegramIcon}
              text="@tg_name"
            />
            <Avito color="brand.base" text="3 more" />
          </Flex>
        </Flex>
      </Box>
      <Box className="card-box">
        <Flex justifyContent="space-between" pb="20px" alignItems="center">
          <Flex alignItems="center" gap={3}>
            <Heading
              as="h4"
              fontSize="lg"
              fontWeight={600}
              lineHeight="21.6px"
              color="#171923"
            >
              Автоответы для клиентов Авито
            </Heading>
            <ButtonComponent
              icon={assets.penciIcon}
              color="#919EAB"
              size="xs"
              text="Изменить"
              to="/editting-adding"
            />
          </Flex>
          <FormControl width="fit-content" display="flex" alignItems="center">
            <FormLabel
              color="black.4"
              fontSize="14px"
              fontWeight={400}
              htmlFor="2"
              mb="0"
            >
              Отключено
            </FormLabel>
            <Switch size="lg" id="2" />
          </FormControl>
        </Flex>
        <Flex borderTop="1px solid #EEEFF0" pt="20px" gap={6}>
          <Avito leftIcon={assets.settingsIcon} text="Автоответ" />
          <Image src={assets.smallNextIcon} />
          <Flex gap={2}>
            <Avito leftIcon={assets.avitoLogo} text="Авито" />
          </Flex>
        </Flex>
      </Box>
    </Stack>
  );
};

export default Connectors;
