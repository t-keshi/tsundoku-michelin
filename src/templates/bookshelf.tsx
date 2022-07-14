import React, { useCallback } from "react";
import { MdBookmarkRemove, MdMoreHoriz } from "react-icons/md";
import {
  Box,
  Card,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Popover,
  Typography,
} from "../components/ui";
import { useAnchoEl } from "../hooks/useAnchoEl";

export const BookshelfTemplate: React.FC = () => {
  const { anchorEl, onOpen, onClose } = useAnchoEl();
  const handleClickMore = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onOpen(e);
    },
    [onOpen]
  );

  return (
    <>
      <Typography variant="h2">Bookshelf</Typography>
      <Box sx={{ mt: 3 }} />
      <Grid
        sx={{
          gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
          gridGap: 4,
        }}
      >
        <Card
          sx={{ position: "relative" }}
          media="http://books.google.com/books/content?id=APq6swEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          title="IntelliJ IDEAハンズオン ――基本操作からプロジェクト管理までマスター"
          href={`/books/${encodeURIComponent("hey")}`}
        >
          <Box sx={{ position: "absolute", bottom: 0, right: 0 }}>
            <IconButton transparent onClick={handleClickMore}>
              <MdMoreHoriz />
            </IconButton>
            <Popover anchorEl={anchorEl} onClose={onClose}>
              <List>
                <ListItem>
                  <ListItemButton>
                    <ListItemIcon size="sm">
                      <MdBookmarkRemove />
                    </ListItemIcon>
                    <ListItemText>MY本棚から削除する</ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Popover>
          </Box>
        </Card>
        <Card>hey</Card>
        <Card>hey</Card>
        <Card>hey</Card>
      </Grid>
    </>
  );
};
