import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Header } from "../components";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Flex overflow="hidden" width="full">
      <Sidebar />
      <Box
        marginTop={{ base: "20px", sm: "30px", desktop: "40px" }}
        marginLeft={{ base: "20px", sm: "32px", desktop: "40px" }}
        marginRight={{ base: "20px", sm: "20px", desktop: "40px" }}
        width="full"
      >
        <Header />
        {/* height="calc(100vh - 120px)" overflowY="auto" */}
        <Box>
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};
