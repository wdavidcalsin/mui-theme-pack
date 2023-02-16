<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="150" src="./public/logo-mui-theme.png" alt="MUI logo"></a>
</p>

<h1 align="center">MUI Theme Pack</h1>

**_Language_**

- [🇪🇸 Español](./README.es.md)
- 🇺🇸 English

**MUI Theme Pack** It is a package containing a variety of themes designed to be used in your Material UI projects. In addition, you can easily switch the mode between light and dark using the hook provided.
Each theme has been carefully created to bring a visually appealing and consistent look to your project.
Simplify your project design with this set of preset themes and give your application a professional touch!

## Installation

To install the package, simply run:

### npm:

```sh
npm install mui-theme-pack
```

### yarn:

```sh
yarn add mui-theme-pack
```

## Usage

### Agregar tema

To use the themes in your project, you must first import the ThemeContextProvider:

```jsx
import { ThemeContextProvider } from 'mui-theme-pack';
```

Then, select your preferred theme:

```jsx
import { ThemeContextProvider } from 'mui-theme-pack';
import { FormWithEntries } from './sample';

function App() {
  return (
    <ThemeContextProvider nameTheme="navy-blue">
      <FormWithEntries />
    </ThemeContextProvider>
  );
}

export default App;
```

### Change mode

Each theme comes with two modes: light and dark. You can change the mode of your application using the hook useColorMode():

```jsx
import { Stack, TextField, Button } from '@mui/material';
import { useColorMode } from 'mui-theme-pack';

const FormCustom = () => {
  const { mode, toggleColorMode } = useColorMode();

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
      <Button onClick={toggleColorMode}>Change Theme: {mode}</Button>
    </Stack>
  );
};
export default FormCustom;
```

## Available Themes

The package currently includes the following themes:

- **navy-blue**: This is a custom variant with colors ranging from dark blue to white.

<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="500" src="./public/navy-blue-color.png" alt="Svg navy blue"></a>
</p>

- **light-orange**: This is a custom variant with colors ranging from yellow to orange.

<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="500" src="./public/light-orange-color.png" alt="Svg navy blue"></a>
</p>

## Contribution

Welcome to contribute! If you wish to add a new theme, please follow these steps:

Create a new branch.
Add the new theme in src/styles/theme.
Update the README.md file with information about the new theme.
Make a pull request.

## License

This package is licensed under the MIT License.
