import React, { useCallback } from "react";
import { MdBookmarkRemove, MdMoreHoriz } from "react-icons/md";
import { Layout } from "../../components/layout/Layout";
import { Box } from "../../components/ui/Box/Box";
import { Card } from "../../components/ui/Card/Card";
import { Grid } from "../../components/ui/Grid/Grid";
import { IconButton } from "../../components/ui/IconButton/IconButton";
import { List } from "../../components/ui/List/List";
import { ListItem } from "../../components/ui/ListItem/ListItem";
import { ListItemButton } from "../../components/ui/ListItemButton/ListItemButton";
import { ListItemIcon } from "../../components/ui/ListItemIcon/ListItemIcon";
import { ListItemText } from "../../components/ui/ListItemText/ListItemText";
import { Popover } from "../../components/ui/Popover/Popover";
import { Typography } from "../../components/ui/Typography/Typography";
import { useAnchoEl } from "../../hooks/useAnchoEl";
import { NextPageWithLayout } from "../../type";

const Bookshelf: NextPageWithLayout = () => {
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

Bookshelf.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Bookshelf;
