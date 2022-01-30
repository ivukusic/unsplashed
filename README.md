# EUDoctor app

[Link to RULEBOOK](RULEBOOK.md) - basic rules and branching strategy for application

## Included

- [React](https://github.com/facebook/react)
- [React Native](https://github.com/facebook/react-native)
- [Typescript](https://github.com/microsoft/TypeScript)
- [React Navigation](https://github.com/react-community/react-navigation)

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

Run command to open iOS simulator and run app:

```bash
$ npx react-native run-ios
```

#### Android

Open Android emulator (recommended [Genymotion](https://www.genymotion.com)) and
run command: (Or connect real device via USB)

```bash
$ npx react-native start
$ npx react-native run-android
```
