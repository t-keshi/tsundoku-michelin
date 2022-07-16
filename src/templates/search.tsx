import { useDeferredValue, useEffect, useRef, useState } from "react";
import { SearchBooksQuery } from "../../generated/types";
import { Box } from "../components/ui/Box/Box";
import { Card } from "../components/ui/Card/Card";
import { Grid } from "../components/ui/Grid/Grid";
import { TextField } from "../components/ui/TextField/TextField";

type Props = {
  booksSearch: SearchBooksQuery["booksSearch"] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SearchTemplate: React.FC<Props> = ({ booksSearch, onChange }) => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  }, []);

  return (
    <>
      <TextField
        variant="outlined"
        rounded
        autoFocus
        ref={textFieldRef}
        sx={{ width: "100%", borderRadius: "100%" }}
        data-testid="search"
        onChange={onChange}
      />
      <Box sx={{ mt: 6 }}>
        <Grid
          sx={{
            gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
            gridGap: 4,
          }}
        >
          {booksSearch &&
            booksSearch.map((book) => (
              <Card
                key={book.id}
                media={book.image}
                title={book.title}
                href={`/books/${encodeURIComponent(book.id)}`}
              />
            ))}
        </Grid>
      </Box>
    </>
  );
};
