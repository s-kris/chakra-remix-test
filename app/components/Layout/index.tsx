import { NavLink } from "remix";
import { Box, HStack, Link as ChakraLink, Spacer, useColorMode } from "@chakra-ui/react";
import { getColor } from '@chakra-ui/theme-tools'
import { FaMoon, FaSun } from 'react-icons/fa'
import { Switch } from "../switch"
import { useTheme } from "@emotion/react";
import Header from "./Header";
import Footer from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const { colorMode, toggleColorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box>
        <Header />

      <Box as="main" p={4}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
