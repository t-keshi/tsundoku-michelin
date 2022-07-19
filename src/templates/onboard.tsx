import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  FetchUserOnboardQuery,
  OnboardUserMutation,
  OnboardUserMutationVariables,
} from '../../generated/types';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Form,
  IconButton,
  Label,
  Paper,
  TextField,
  Typography,
} from '../components/ui';
import { SchemaOf, yup } from '../helpers/utils/yupExtend';
import { useImageUpload } from '../helpers/hooks/useImageUpload';

type Props = {
  user: FetchUserOnboardQuery['user'];
  onSubmit: ({
    userId,
    name,
    image,
  }: {
    userId: string;
    name: string;
    image?: File;
  }) => Promise<OnboardUserMutation>;
};

type FormValues = {
  name: OnboardUserMutationVariables['name'];
};

const schema: SchemaOf<FormValues> = yup.object().shape({
  name: yup
    .string()
    .required()
    .min(2)
    .max(30)
    .matches(/^[a-zA-Z0-9-_]+$/, '半角英数字または_, -で入力してください'),
});

export const OnboardTemplate: React.FC<Props> = ({ user, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { name: '', image: '' },
  });
  const { image, imageDataUrl, onUpload } = useImageUpload();

  const handleClickSubmti = handleSubmit(({ name }) => {
    onSubmit({ userId: user.id, name, ...(image && { image }) });
  });

  return (
    <Form onSubmit={handleClickSubmti}>
      <Paper sx={{ p: 3, width: 300 }}>
        <input hidden type="file" onChange={onUpload} />
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          Welcome!!🎉
        </Typography>
        <Flex sx={{ alignItems: 'center', justifyContent: 'center', py: 5 }}>
          <IconButton>
            <Avatar size="lg" src={imageDataUrl || user?.image || '/brand-icon.png'} priority />
          </IconButton>
        </Flex>
        <Label>表示名(半角英数字または_, -)</Label>
        <TextField
          variant="outlined"
          sx={{ width: '100%' }}
          {...register('name')}
          errorMessage={errors.name?.message}
        />
        <Box sx={{ mt: 3 }} />
        <Button variant="contained" sx={{ width: '100%' }} type="submit">
          登録完了
        </Button>
      </Paper>
    </Form>
  );
};
