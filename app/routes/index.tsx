import { Box, Heading, HStack, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "remix";
import Hero from "~/components/Hero";

export default function Index() {
  return (
    <Box fontFamily="system-ui, sans-serif" lineHeight={1.4}>
     <Hero />
    </Box>
  );
}
