import { useColorMode } from '@/hooks';
import { Stack, TextField } from '@mui/material';

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

      <button onClick={toggleColorMode}>Change Theme</button>
    </Stack>
  );
};
export default FormCustom;
