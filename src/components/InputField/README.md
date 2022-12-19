# This is a socialwell web design system

## Installation

```bash
yarn add @socialwell-design/input-field

or

npm i @socialwell-design/input-field
```

## How to use

```JSX
import { TextField,SelectField,TextAreaField } from "@socialwell-design/input-field";

<TextField onChange={() => {}} /> // type="text"

<TextField
  onChange={() => {}}
  type="number"
/>

<SelectField onChange={() => {}}>
  <option value="1">
    one
  </option>
  <option value="2">
    two
  </option>
</SelectField>

<TextAreaField onChange={() => {}} />

```
