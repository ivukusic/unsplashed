# Unsplashed

## Included

- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [React Navigation](https://github.com/react-community/react-navigation)
- [Styled components](https://github.com/styled-components/styled-components)
- [Typescript](https://github.com/microsoft/TypeScript)
- [Jest](https://github.com/facebook/jest)

---

## Prerequisites

Make sure to have the following installed:

- Xcode (download from apple store)
- [Android Studio](https://developer.android.com/studio)

You can use brew install for the following:

```bash
brew install yarn
brew install cocoapods
brew install node
brew install watchman
```

---

## Installation

See
[Getting Started](https://facebook.github.io/react-native/docs/getting-started.html)
to install requirement tools.

```bash
$ yarn install
$ cd ios/ && pod install
```

---

## Development

#### iOS

Run command to open iOS simulator and start the app:

```bash
npx react-native run-ios
```

#### Android

Open Android emulator or connect real device via USB
Run command to start the app:

```bash
react-native run-android
```

---

## Testing

Run unit tests

```bash
yarn test
```

Run unit tests in watch mode

```bash
yarn test_watch
```

Run unit tests and collect coverage

```bash
yarn test_coverage
```
