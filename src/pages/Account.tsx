import { Flex, Stack, Text } from "@chakra-ui/react";
import assets from "../assets";
import { Avito, ButtonComponent, Header } from "../components";

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
    <>
      <Header text="Мои аккаунты" addBtn={true} />
      <Stack spacing={4}>
        {data.map((item, index) => (
          <Flex
            flexWrap="wrap"
            gap={4}
            flexDirection={{ base: "column", tablet: "row" }}
            className="card-box"
            key={index}
            justifyContent="space-between"
          >
            <Flex alignItems="center" gap={{ base: "20px", desktop: 6 }}>
              <Avito leftIcon={assets.avitoLogo} text="Авито" />
              <Text
                fontSize={{ base: "15px", sm: "base", dektop: "lg" }}
                lineHeight="22px"
                fontWeight={600}
              >
                {item.name}
              </Text>
            </Flex>
            <Flex
              justifyContent={{ base: "space-between", tablet: "normal" }}
              gap={{ base: "20px", desktop: 6 }}
              alignItems="center"
            >
              <Text
                // fontSize={{ base: "15px", sm: "xs", dektop: "100px" }}
                fontSize={{ base: "10px", sm: "xs", desktop: "16px" }}
                lineHeight={{ base: "14px", desktop: "17px" }}
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
    </>
  );
};

export default Account;
