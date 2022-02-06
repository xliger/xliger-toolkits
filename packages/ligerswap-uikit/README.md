# 🐯 LigerSwap UIkit

[![Version](https://img.shields.io/npm/v/@xliger/ligerswap-uikit)](https://www.npmjs.com/package/@xliger/ligerswap-uikit) [![Size](https://img.shields.io/bundlephobia/min/@xliger/ligerswap-uikit)](https://www.npmjs.com/package/@xliger/ligerswap-uikit)

LigerSwap UIkit is a set of React components and hooks used to build pages on LigerSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @xliger/ligerswap-uikit`

## Setup

### Theme

Before using LigerSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@xliger/ligerswap-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@xliger/ligerswap-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://xliger.github.io/ligerswap-uikit/)
