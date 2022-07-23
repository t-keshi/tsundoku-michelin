import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { SchemaOf } from 'yup';
import {
  FetchProfileQuery,
  UpdateUserImageMutation,
  UpdateUserInfoMutation,
} from '../../generated/types';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Form,
  Label,
  TextField,
  Typography,
  Dialog,
} from '../components/ui';
import { useImageUpload } from '../helpers/hooks/useImageUpload';
import { yup } from '../helpers/utils/yupExtend';

type Props = {
  user: FetchProfileQuery['user'];
  onUpdateUserImage: ({ image }: { image: File }) => Promise<UpdateUserImageMutation>;
  onUpdateUserInfo: ({
    name,
    profile,
  }: {
    name: string;
    profile?: string;
  }) => Promise<UpdateUserInfoMutation>;
};

type FormValues = {
  name: string;
  profile?: string;
};

const schema: SchemaOf<FormValues> = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .max(15)
    .matches(/^[a-zA-Z0-9-_]+$/, '半角英数字または_, -で入力してください'),
  profile: yup.string().min(2).max(100),
});

export const ProfileTemplate: React.FC<Props> = ({ user, onUpdateUserImage, onUpdateUserInfo }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: user.name ?? '', profile: user.profile ?? '' },
  });

  const handleClickSubmit = handleSubmit(({ name, profile }) => {
    onUpdateUserInfo({ name, profile });
  });

  const inputRef = useRef<HTMLInputElement>(null);

  const { image, imageDataUrl, onReset, onUpload } = useImageUpload();

  const handleDialogClose = useCallback(() => {
    onReset();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [onReset]);

  const handleUpdateImage = useCallback(() => {
    if (image) {
      onUpdateUserImage({ image });
    }
    onReset();
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [image, onReset, onUpdateUserImage]);

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
          <Avatar size="lg" src={user.image || '/brand-icon.png'} />
          <Flex sx={{ mt: 1, justifyContent: 'center' }}>
            <input hidden ref={inputRef} type="file" accept="image/*" onChange={onUpload} />
            <Button variant="text" onClick={handleClickChangeImage}>
              変更する
            </Button>
            <Dialog isOpen={!!image} disablePadding onClose={handleDialogClose}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageDataUrl ?? ''}
                alt="user-upload"
                style={{
                  height: 'auto',
                  width: '100%',
                  objectFit: 'contain',
                }}
              />
              <Flex sx={{ justifyContent: 'center', width: '100%', my: 3 }}>
                <Button onClick={handleUpdateImage}>確定する</Button>
              </Flex>
            </Dialog>
          </Flex>
        </Box>
        <Form sx={{ width: '100%' }} onSubmit={handleClickSubmit}>
          <Box sx={{ width: '100%' }}>
            <Label htmlFor="name" required>
              表示名
            </Label>
            <TextField
              id="name"
              variant="outlined"
              sx={{ width: '100%' }}
              {...register('name')}
              errorMessage={errors.name?.message}
            />
          </Box>
          <Box sx={{ mt: 4 }}>
            <Label htmlFor="profile">ひとこと</Label>
            <TextField
              id="profile"
              variant="outlined"
              sx={{ width: '100%' }}
              {...register('profile')}
              errorMessage={errors.profile?.message}
            />
          </Box>
          <Flex sx={{ mt: 4, justifyContent: 'center' }}>
            <Button type="submit">更新する</Button>
          </Flex>
        </Form>
      </Flex>
    </>
  );
};
