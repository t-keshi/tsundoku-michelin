import React, { useCallback, useRef } from "react";
import { Avatar } from "../../components/ui/Avatar/Avatar";
import { Box } from "../../components/ui/Box/Box";
import { Button } from "../../components/ui/Button/Button";
import { Flex } from "../../components/ui/Flex/Flex";
import { Form } from "../../components/ui/Form/Form";
import { Label } from "../../components/ui/Label/Label";
import { TextField } from "../../components/ui/TextField/TextField";
import { Typography } from "../../components/ui/Typography/Typography";
import { Dialog } from "../../components/ui/Dialog/Dialog";
import { useImageUpload } from "../../hooks/useImageUpload";
import { Layout } from "../../components/layout/Layout";
import { NextPageWithLayout } from "../../type";

const Profile: NextPageWithLayout = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  const inputRef = useRef<HTMLInputElement>(null);
  const { image, imageDataUrl, onReset, onUpload } = useImageUpload();
  const handleDialogClose = useCallback(() => {
    onReset();
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }, [onReset]);
  const handleClickChangeImage = useCallback(() => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }, []);

  return (
    <>
      <Typography variant="h2">Profile</Typography>
      <Box sx={{ mt: 3 }} />
      <Flex sx={{ columnGap: { mobile: 2, tablet: 4, desktop: 6 } }}>
        <Box>
          <Avatar size="lg" src="/brand-icon.png" />
          <Flex sx={{ mt: 1, justifyContent: "center" }}>
            <input
              hidden
              ref={inputRef}
              type="file"
              accept="image/*"
              onChange={onUpload}
            />
            <Button variant="text" onClick={handleClickChangeImage}>
              変更する
            </Button>
            <Dialog isOpen={!!image} disablePadding onClose={handleDialogClose}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageDataUrl ?? ""}
                alt="user-upload"
                style={{
                  height: "auto",
                  width: "100%",
                  objectFit: "contain",
                }}
              />
              <Flex sx={{ justifyContent: "center", width: "100%", my: 3 }}>
                <Button onClick={handleDialogClose}>確定する</Button>
              </Flex>
            </Dialog>
          </Flex>
        </Box>
        <Form sx={{ width: "100%" }} onSubmit={handleSubmit}>
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
        </Form>
      </Flex>
    </>
  );
};

Profile.getLayout = (page: React.ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
