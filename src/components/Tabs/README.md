# This is a socialwell web design system

## Installation

```bash
yarn add @socialwell-design/tabs

or

npm i @socialwell-design/tabs
```

## How to use

```JSX
import { Tabs } from "@socialwell-design/tabs";

<Tabs
  data={[
    {
      isActive: true,
      name: 'filter'
    },
    {
      isActive: false,
      name: 'book'
    },
    {
      isActive: false,
      name: 'article'
    }
  ]}
 />

```
