import { Flex, Stack, Text } from "@chakra-ui/react";
import assets from "../assets";
import { Avito, ButtonComponent } from "../components";

interface DataItem {
  name: string;
  date: string;
}

const data: DataItem[] = [
  { name: "Brand Jewelry Studio", date: "12.03.24" },
  { name: "Brand Studio", date: "12.03.24" },
  { name: "Jewelry", date: " 12.03.24" },
  { name: "Brand Jewelry Studio", date: "12.03.24" },
  { name: "Brand Studio", date: "12.03.24" },
  { name: "Brand Studio", date: "12.03.24" },
  { name: "Jewelry", date: "12.03.24" },
];

const Account = () => {
  return (
    <Stack spacing={4}>
      {data.map((item, index) => (
        <Flex
          justifyContent="space-between"
          alignItems="center"
          key={index}
          bg="white"
          borderRadius="xl"
          p={6}
        >
          <Flex alignItems="center" gap={6}>
            <Avito leftIcon={assets.avitoLogo} text="Авито" />
            <Text fontSize="18px" lineHeight="22px" fontWeight={600}>
              {item.name}
            </Text>
          </Flex>
          <Flex gap={6} alignItems="center">
            <Text
              fontSize="sm"
              lineHeight="17px"
              fontWeight={400}
              color="black.4"
            >
              Подключен {item.date}
            </Text>
            <ButtonComponent
              icon={assets.trashLogo}
              colorScheme="gray"
              size="xs"
              text="Удалить"
              color="#919EAB"
            />
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
};

export default Account;
