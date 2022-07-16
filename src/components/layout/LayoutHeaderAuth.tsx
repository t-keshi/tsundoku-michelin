import React, { useCallback } from "react";
import {
  Button,
  Typography,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
} from "../ui";
import { useAnchoEl } from "../../hooks/useAnchoEl";
import { MdLogout, MdManageAccounts, MdOutlineArticle } from "react-icons/md";
import { useAuthModal } from "../../containers/authModal";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useSnackbar } from "../../containers/snackbar";

export const LayoutHeaderAuth = () => {
  const { onOpen } = useAuthModal();
  const { anchorEl, onOpen: onMenuOpen, onClose: onMenuClose } = useAnchoEl();
  const { status, data: session } = useSession();
  const { onOpen: onOpenSnackbar } = useSnackbar();
  const handleLogOut = useCallback(() => {
    signOut().then(() =>
      onOpenSnackbar({ message: "ログアウトしました", status: "success" })
    );
  }, [onOpenSnackbar]);

  if (status === "loading") {
    return <Typography variant="overline">loading...</Typography>;
  }

  if (status !== "authenticated") {
    return <Button onClick={onOpen}>Log in</Button>;
  }

  return (
    <>
      <IconButton onClick={onMenuOpen}>
        <Avatar
          src={session.user?.image ? session.user.image : "/brand-icon.png"}
        />
      </IconButton>
      <Link href="/me/bookshelf">
        <Button>MY本棚</Button>
      </Link>
      <Popover
        offsetMargin={{ top: 12, right: 0 }}
        anchorEl={anchorEl}
        onClose={onMenuClose}
      >
        <List>
          <ListItem>
            <Link href="/me/profile">
              <ListItemButton>
                <ListItemIcon size="sm">
                  <MdManageAccounts />
                </ListItemIcon>
                <ListItemText>プロフィール</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="/me/logs">
              <ListItemButton>
                <ListItemIcon size="sm">
                  <MdOutlineArticle />
                </ListItemIcon>
                <ListItemText>読書ログの管理</ListItemText>
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon size="sm">
                <MdLogout />
              </ListItemIcon>
              <ListItemText>ログアウト</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </>
  );
};
