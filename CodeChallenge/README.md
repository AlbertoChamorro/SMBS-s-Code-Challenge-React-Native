## SMBS's Code Challenge React Native

Este es un proyecto de desafío hecho en react native, la cúal nos permite tener bajo una misma base de código aplicaciones móviles multi plataforma.

### Tecnologias Usadas

- [React Native](https://reactnative.dev/)
- [Yarn](https://yarnpkg.com/)

### Requerimientos

Basado en la plataforma ya sea Mac OSX o Windows que te encuentres sigue la guía descripta por la comunidad [acá](https://reactnative.dev/docs/0.60/getting-started)

1. Xcode [Descarga](https://developer.apple.com/xcode/downloads/)
2. Android Studio [Descarga](https://developer.android.com/studio)
3. NodeJS [Descarga](https://nodejs.org/es/) ó `brew install node` para Mac OSX
4. Watchman [Descarga](https://facebook.github.io/watchman/docs/install.html) ó `brew install watchman` para Mac OSX

### Dependencias utilizadas

El proyecto utiliza las siguientes dependencias

1. Axios Http Client [Doc](https://github.com/axios/axios)
2. Props Types [Doc](https://github.com/facebook/prop-types)
3. React Navigation [Doc](https://reactnavigation.org/docs/getting-started/)
4. React Native Elements [Doc](https://react-native-elements.github.io/react-native-elements/docs/)
5. MomentJs [Doc](https://momentjs.com/)

### Inicio

Para correr la app sigue los siguientes pasos:

1. Instala las dependencias necesarias del proyecto incluidas en el package.json:

```
yarn install
ó
npm run init
```

2. Ejecuta el comando `npm run ios` ó `npm run android` según la plataforma a probar.
3. Verifica que tengas el emulador ejecutandose según la plataforma. En caso de ser necesario puedes usar el comando `npm run start`

## Testing

Corre las pruebas unitarias para verificar el buen funcionamiento del proyecto:

```
npm run test
```

Al ejecutar las tests se genera un coverage automático para un análisis de pruebas, analizar flujos de tus pruebas, y ver el alcance de pruebas en tu proyecto, lo que da pautas de refactorizaciones en el instante o futuras
ver archivo `/coverage/Icov-report/index.html`

## Análisis de código fuente

Corre este comando para aplicar pautas y guidelines de codificación en el proyecto:

```
npm run lint
```

El proyecto se ha configurado con el guardado automático para aplicar las reglas de codificación en cuanto aplique ctrl + s
ver archivo `/.vscode/settings.json`
