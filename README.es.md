<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="150" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/cc88809b-6095-4f60-95f1-8a09e7c7ceb1/logo-mui-theme.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T200845Z&X-Amz-Expires=86400&X-Amz-Signature=3119aab2427c70b137b9f1d38e94fd3eacec7ca30bf40c77dbd333bd15f355a2&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22logo-mui-theme.png%22&x-id=GetObject" alt="MUI logo"></a>
</p>

<h1 align="center">MUI Theme Pack</h1>

**_Idioma_**

- 🇪🇸 Español
- [🇺🇸 English](https://github.com/wdavidcalsin/mui-theme-pack)

**MUI Theme Pack** Es un paquete que contiene una variedad de temas diseñados para ser utilizados en tus proyectos de Material UI. Además, puedes cambiar fácilmente el modo entre light y dark utilizando el hook proporcionado.
Cada tema ha sido cuidadosamente creado para brindar una apariencia visualmente atractiva y coherente a tu proyecto.
¡Simplifica el diseño de tu proyecto con este conjunto de temas preestablecidos y dale un toque profesional a tu aplicación!

## Instalación

Para instalar el paquete, simplemente ejecuta:

### npm:

```sh
npm install mui-theme-pack
```

### yarn:

```sh
yarn add mui-theme-pack
```

## Uso

### Agregar tema

Para utilizar los temas en tu proyecto, primero debes importar el ThemeContextProvider:

```jsx
import { ThemeContextProvider } from 'mui-theme-pack';
```

Luego, selecciona tu tema de preferencia:

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

### Cambiar modo

Cada tema viene con dos modos: claro y oscuro. Puedes cambiar el modo de tu aplicación utilizando el hook useColorMode():

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

## Temas disponibles

El paquete actualmente incluye los siguientes temas:

- **navy-blue**: Es una variante personalizada con colores entre azul oscuro y blanco.

<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/1893237c-9f44-437d-862a-2da24bba78a6/navy-blue-color.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T200955Z&X-Amz-Expires=86400&X-Amz-Signature=609f43a85ed58dce2f0469dda53885f66c55e883148a32babc78b20710b9fedc&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22navy-blue-color.png%22&x-id=GetObject" alt="Svg navy blue"></a>
</p>

- **light-orange**: Es una variante personalizada con colores entre amarillo y naranja.

<p align="center">
  <a href="#" rel="noopener" target="_blank"><img width="500" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e9b9815-d187-4856-adb9-ad3200c0a47c/light-orange-color.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230216T201039Z&X-Amz-Expires=86400&X-Amz-Signature=ee2e9027fe7d43e47bd87c30ef407b4c8c4309793f24602b1994b7ba7fd58c74&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22light-orange-color.png%22&x-id=GetObject" alt="Svg navy blue"></a>
</p>

## Contribución

¡Bienvenido a contribuir! Si deseas agregar un nuevo tema, sigue estos pasos:

Crea una nueva rama.
Agrega el nuevo tema en src/themes.
Actualiza el archivo README.md con información sobre el nuevo tema.
Haz un Pull Request.

## Licencia

Este paquete está bajo la Licencia MIT.
