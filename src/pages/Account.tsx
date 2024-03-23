import { DeleteIcon } from "@chakra-ui/icons";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";

interface DataItem {
  name: string;
  date: string;
}

const data: DataItem[] = [{ name: "Brand Jewelry Studio", date: "12.03.24" }];

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
          <Text fontSize="18px" lineHeight="22px" fontWeight={600}>
            {item.name}
          </Text>
          <Flex gap={6} alignItems="center">
            <Text
              fontSize="sm"
              lineHeight="17px"
              fontWeight={400}
              color="black.4"
            >
              Подключен {item.date}
            </Text>
            <Button
              leftIcon={<DeleteIcon color="text.4" />}
              colorScheme="gray"
              size="xs"
            >
              Удалить
            </Button>
          </Flex>
        </Flex>
      ))}
    </Stack>
  );
};

export default Account;
