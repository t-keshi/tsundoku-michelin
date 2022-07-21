import { useCallback, useEffect, useRef } from 'react';
import { SearchBooksQuery } from '../../generated/types';
import { Box } from '../components/ui/Box/Box';
import { Card } from '../components/ui/Card/Card';
import { Grid } from '../components/ui/Grid/Grid';
import { TextField } from '../components/ui/TextField/TextField';

type Props = {
  books: SearchBooksQuery['books'] | undefined;
  keyword: string | undefined;
  onSearch: (keyword: string) => void;
};

export const SearchTemplate: React.FC<Props> = ({ books, keyword, onSearch }) => {
  const textFieldRef = useRef<HTMLInputElement>(null);
  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onSearch(e.target.value);
    },
    [onSearch],
  );

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
        sx={{ width: '100%', borderRadius: '100%' }}
        data-testid="search"
        value={keyword}
        onChange={handleSearch}
      />
      <Box sx={{ mt: 6 }}>
        <Grid
          sx={{
            gridTemplateColumns: { mobile: 1, tablet: 2, desktop: 3 },
            gridGap: 4,
          }}
        >
          {books &&
            books.map((book) => (
              <Card
                key={book.id}
                media={book.image}
                title={book.title}
                href={`/books/${book.id}`}
              />
            ))}
        </Grid>
      </Box>
    </>
  );
};
