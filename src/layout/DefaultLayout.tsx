import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Flex overflow="hidden" width="100%">
      <Sidebar />
      <Box
        marginTop={{ base: "20px", sm: "30px", desktop: "40px" }}
        marginLeft={{ base: "20px", sm: "32px", desktop: "40px" }}
        marginRight={{ base: "20px", sm: "20px", desktop: "40px" }}
        width="100%"
      >
        <Header />
        <Outlet />
      </Box>
    </Flex>
  );
};
