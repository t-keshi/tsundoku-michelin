import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdSearch } from "react-icons/md";
import { AppBar, Box, Container, Flex, Toolbar } from "../ui";
import { LayoutHeaderAuth } from "./LayoutHeaderAuth";

export const LayoutHeader = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Container disablePadding maxWidth="desktop" sx={{ height: "100%" }}>
            <Flex
              sx={{
                height: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  height: "100%",
                  width: { mobile: 150, tablet: 200, desktop: 200 },
                  position: "relative",
                }}
              >
                <Link href="/">
                  <Image
                    src="/brand-logo.png"
                    layout="fill"
                    objectFit="contain"
                    alt="logo"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </Box>
              <Flex
                sx={{
                  height: "100%",
                  alignItems: "center",
                  columnGap: { mobile: 1, tablet: 2, desktop: 2 },
                }}
              >
                <Link href="/search">
                  <MdSearch size="24px" style={{ cursor: "pointer" }} />
                </Link>
                <LayoutHeaderAuth />
              </Flex>
            </Flex>
          </Container>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};
