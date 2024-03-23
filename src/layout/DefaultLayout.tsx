import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Box position="relative" width="full">
      <Flex overflow="hidden" width="full">
        <Sidebar />
        <Box
          marginTop={{ base: "20px", sm: "30px", desktop: "40px" }}
          marginLeft={{ base: "20px", sm: "32px", desktop: "40px" }}
          marginRight={{ base: "20px", sm: "32px", desktop: "40px" }}
          width="full"
          flex="1 1 0%"
        >
          {/* height="calc(100vh - 120px)" overflowY="auto" */}
          <Box>
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
