import { useState, useCallback } from "react";

export const useAnchoEl = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | undefined>();
  const onOpen = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  }, []);
  const onClose = useCallback(() => {
    setAnchorEl(undefined);
  }, []);

  return { anchorEl, onOpen, onClose };
};
