import { NavLink, useLocation } from "react-router-dom";
import { Flex, Image, Box, Text } from "@chakra-ui/react";

interface NavigationLinkProps {
  to: string;
  icon: string;
  text: string;
  badgeCount?: string;
}

const ActiveStyle = {
  bg: "#F55B3D14",
  color: "brand.base",
  fontWeight: 600,
};

export const NavigationItem: React.FC<{ to: string }> = ({ to, children }) => {
  const location = useLocation();

  return (
    <NavLink to={to} activeclassname="active">
      {children}
    </NavLink>
  );
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  to,
  icon,
  text,
  badgeCount,
}) => {
  return (
    <NavigationItem to={to}>
      <Flex
        p={3}
        gap={4}
        justifyContent="space-between"
        alignItems="center"
        borderRadius="lg"
        _hover={{ bg: "#F55B3D14", color: "brand.base" }}
        activeclassname="active"
        {...(to === "/" && ActiveStyle)}
      >
        <Flex alignItems="center" gap="20px">
          <Image src={icon} />
          <Text fontSize="sm" lineHeight="22px">
            {text}
          </Text>
        </Flex>
        {badgeCount && (
          <Box
            fontSize="xs"
            lineHeight="20px"
            fontWeight={700}
            py="2px"
            px={2}
            color="brand.base"
            borderRadius="6px"
            bg="#F55B3D29"
          >
            {badgeCount}
          </Box>
        )}
      </Flex>
    </NavigationItem>
  );
};
