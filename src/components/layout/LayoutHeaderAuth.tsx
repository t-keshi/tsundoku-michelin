import React, { useCallback } from "react";
import { Button } from "../ui/Button/Button";
import { Flex } from "../ui/Flex/Flex";
import { Avatar } from "../ui/Avatar/Avatar";
import { IconButton } from "../ui/IconButton/IconButton";
import { useAnchoEl } from "../../hooks/useAnchoEl";
import { List } from "../ui/List/List";
import { ListItem } from "../ui/ListItem/ListItem";
import { ListItemButton } from "../ui/ListItemButton/ListItemButton";
import { ListItemIcon } from "../ui/ListItemIcon/ListItemIcon";
import { MdLogout, MdManageAccounts } from "react-icons/md";
import { ListItemText } from "../ui/ListItemText/ListItemText";
import { useAuthModal } from "../../containers/authModal";
import Link from "next/link";
import { Popover } from "../ui/Popover/Popover";
import { useSession, signOut } from "next-auth/react";
import { useSnackbar } from "../../containers/snackbar";

export const LayoutHeaderAuth = () => {
  const { onOpen } = useAuthModal();
  const { anchorEl, onOpen: onMenuOpen, onClose: onMenuClose } = useAnchoEl();
  const { status } = useSession();
  const { onOpen: onOpenSnackbar } = useSnackbar();
  const handleLogOut = useCallback(() => {
    signOut().then(() =>
      onOpenSnackbar({ message: "ログアウトしました", status: "success" })
    );
  }, [onOpenSnackbar]);

  if (status !== "authenticated") {
    return <Button onClick={onOpen}>Log in</Button>;
  }

  return (
    <Flex
      sx={{
        height: "100%",
        alignItems: "center",
        columnGap: 2,
      }}
    >
      <IconButton onClick={onMenuOpen}>
        <Avatar src="/brand-icon.png" />
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
            <ListItemButton onClick={handleLogOut}>
              <ListItemIcon size="sm">
                <MdLogout />
              </ListItemIcon>
              <ListItemText>ログアウト</ListItemText>
            </ListItemButton>
          </ListItem>
        </List>
      </Popover>
    </Flex>
  );
};
