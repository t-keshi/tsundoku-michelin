import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthModal } from "../../containers/authModal";
import { h50 } from "../system/style/style.css";
import { Box } from "../ui/Box/Box";
import { Button } from "../ui/Button/Button";
import { Dialog } from "../ui/Dialog/Dialog";
import { Flex } from "../ui/Flex/Flex";
import { Typography } from "../ui/Typography/Typography";
import { signIn } from "next-auth/react";
import { useSnackbar } from "../../containers/snackbar";

export const AuthModal = () => {
  const { isOpen, onClose } = useAuthModal();
  const { onOpen: onOpenSnackbar } = useSnackbar();
  const handleLogin = useCallback(async () => {
    signIn("google").then(() => {
      onClose();
      onOpenSnackbar({ message: "ログインしました", status: "success" });
    });
  }, [onClose, onOpenSnackbar]);

  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <Box
        className={h50}
        sx={{ width: 200, position: "relative", mx: "auto" }}
      >
        <Link href="/">
          <Image
            src="/brand-logo.png"
            layout="fill"
            objectFit="contain"
            alt="logo"
          />
        </Link>
      </Box>
      <Box sx={{ mt: 2 }} />
      <Typography>
        積読ミシュランは、誰でも気軽に読書ログを残せるサービスです。
      </Typography>
      <Box sx={{ mt: 2 }} />
      <Flex sx={{ justifyContent: "center" }}>
        <Button
          color="inherit"
          variant="outlined"
          startIcon={<FcGoogle />}
          onClick={handleLogin}
          data-testid="Login with Google"
        >
          Login with Google
        </Button>
      </Flex>
    </Dialog>
  );
};
