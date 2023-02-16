import { ThemeContextProvider } from '@/context';
import FormCustom from './form-custom';

const FormWithEntries = () => {
  return (
    <ThemeContextProvider nameTheme="navy-blue">
      <FormCustom />
    </ThemeContextProvider>
  );
};

export default FormWithEntries;
