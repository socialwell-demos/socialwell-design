# This is a socialwell web design system

## Installation

```bash
yarn add @socialwell-design/form-control

or

npm i @socialwell-design/form-control
```

## How to use

```JSX
import { FormControl } from "@socialwell-design/form-control";

<FormControl
  label="Label"
  onChange={() => {}}
  type="text"
/>

or

<FormControl
  label="Label"
  onChange={() => {}}
  type="select"
>
  <option value="1">
    one
  </option>
  <option value="2">
    two
  </option>
</FormControl>

or

<FormControl
  label="description"
  onChange={() => {}}
  type="textarea"
/>

```
