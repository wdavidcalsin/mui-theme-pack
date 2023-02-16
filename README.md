<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="150" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cc88809b-6095-4f60-95f1-8a09e7c7ceb1/logo-mui-theme.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T200845Z&X-Amz-Expires=86400&X-Amz-Signature=3119aab2427c70b137b9f1d38e94fd3eacec7ca30bf40c77dbd333bd15f355a2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo-mui-theme.png%22&x-id=GetObject" alt="MUI logo"></a>
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
  <a href="#" rel="noopener" target="_blank"><img width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1893237c-9f44-437d-862a-2da24bba78a6/navy-blue-color.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T200955Z&X-Amz-Expires=86400&X-Amz-Signature=609f43a85ed58dce2f0469dda53885f66c55e883148a32babc78b20710b9fedc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22navy-blue-color.png%22&x-id=GetObject" alt="Svg navy blue"></a>
</p>

- **light-orange**: This is a custom variant with colors ranging from yellow to orange.

<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e9b9815-d187-4856-adb9-ad3200c0a47c/light-orange-color.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T201039Z&X-Amz-Expires=86400&X-Amz-Signature=ee2e9027fe7d43e47bd87c30ef407b4c8c4309793f24602b1994b7ba7fd58c74&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22light-orange-color.png%22&x-id=GetObject" alt="Svg navy blue"></a>
</p>

## Contribution

Welcome to contribute! If you wish to add a new theme, please follow these steps:

Create a new branch.
Add the new theme in src/styles/theme.
Update the README.md file with information about the new theme.
Make a pull request.

## License

This package is licensed under the MIT License.
