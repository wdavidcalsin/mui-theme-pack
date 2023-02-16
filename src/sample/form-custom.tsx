import { useColorMode } from '@/hooks';
import { Button, Stack, TextField } from '@mui/material';

const FormCustom = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        paddingY: '2rem',
        paddingX: '3rem',
        bgcolor: 'secondary.main',
      }}
    >
      <TextField label="Your name" />

      <Button onClick={toggleColorMode}>Change Theme</Button>
    </Stack>
  );
};
export default FormCustom;
