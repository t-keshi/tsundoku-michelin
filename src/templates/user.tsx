import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Label,
  TextField,
  Typography,
} from "../components/ui";

export const UserTemplate: React.FC = () => {
  return (
    <>
      <Box sx={{ py: 3, bgColor: "default" }}>
        <Typography variant="h2">User</Typography>
      </Box>
      <Box sx={{ mt: 3 }} />
      <Flex sx={{ columnGap: { mobile: 2, tablet: 4, desktop: 6 } }}>
        <Box>
          <Avatar size="lg" src="/brand-icon.png" />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ width: "100%" }}>
            <Label required>表示名</Label>
            <TextField variant="outlined" sx={{ width: "100%" }} />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Label>ひとこと</Label>
            <TextField variant="outlined" sx={{ width: "100%" }} />
          </Box>
          <Flex sx={{ mt: 4, justifyContent: "center" }}>
            <Button type="submit">更新する</Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};
