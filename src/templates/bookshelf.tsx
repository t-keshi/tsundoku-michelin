import React, { useCallback } from "react";
import { MdBookmarkRemove, MdMoreHoriz } from "react-icons/md";
import { FetchBookshelfBooksQuery } from "../../generated/types";
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
import { useAnchoEl } from "../helpers/hooks/useAnchoEl";

type Props = {
  bookshelfs: FetchBookshelfBooksQuery["bookshelfs"];
};

export const BookshelfTemplate: React.FC<Props> = ({ bookshelfs }) => {
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
        {bookshelfs.map(({ book }) => (
          <Card
            key={book.id}
            sx={{ position: "relative" }}
            media={book.image}
            title={book.title}
            href={`/books/${encodeURIComponent(book.id)}`}
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
        ))}
      </Grid>
    </>
  );
};
