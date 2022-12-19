# This is a socialwell web design system

## Introduction

The socialwell editor is a powerful and easy-to-use rich text editor for React/NextJs. It allows users to easily format text, add links, insert images, and more, all with a simple and intuitive interface. Whether you are building a blog, an online forum, or any other type of web application, the socialwell editor is a great tool for adding rich text editing capabilities.

The socialwell editor is built on top of the popular Quill.js library, which provides the underlying rich text editing capabilities. This means that you can use all of the features and functionality of Quill.js, along with the added convenience of a React-based interface.

In this documentation, we will provide detailed instructions on how to install and use the socialwell editor in your React/NextJs project. We will also cover how to customize the editor to meet your specific needs, as well as troubleshooting common issues that may arise. By the end of this documentation, you will have a solid understanding of how to use the socialwell editor to add rich text editing capabilities to your web application.

## Installation

Install the @socialwell-design/editor by running the following command in your terminal

```bash

yarn add @socialwell-design/editor react-quill

or

npm i @socialwell-design/editor react-quill

```

## How to use the socialwell editor

Import the @socialwell-design/editor editor into your React component by adding the following line at the top of your component file

```javascript
import { Editor } from "@socialwell-design/editor";
```

Add the @socialwell-design/editor to your component, using the Editor component imported in the previous step

```javascript
<Editor handleChange={handleChange} />
```

The `handleChange` method is often used in @socialwell-design/editor to handle changes to the editor's content. This method is called whenever the user makes a change to the editor, such as by typing or formatting text.

## Example

```javascript
import React from "react";
import { Editor } from "@socialwell-design/editor";

const SocialWellEditor = () => {
  const handleChange = (content, delta, source, editor) => {
    console.log(editor.getContents());
  };

  return <Editor handleChange={handleChange} />;
};

export default SocialWellEditor;
```

The `handleChange` event handler in the `@socialwell-design/editor` is called with four arguments: `content`, `delta`, `source`, and `editor`. These arguments provide information about the change that was made to the editor.

- The `content` argument contains the new HTML content of the editor, after the change was made. This can be used to update the editor's value in the component's state.

- The `delta` argument contains detailed information about the change that was made to the editor. This includes information about the type of change (e.g. insertion, deletion), the affected range, and the new content that was inserted.

- The `source` argument contains the source of the change, which can be either user, api, or silent. This can be used to determine if the change was made by the user, or if it was triggered programmatically by the editor's API.

- The `editor` argument is a reference to the editor instance. This can be used to access the editor's API, which allows you to programmatically control the editor's behavior.

## Customizing the editor

To customize the `@socialwell-design/editor`, you can pass props to the ReactQuill component when rendering it in your component. These props allow you to control various aspects of the editor, such as its appearance, behavior, and functionality.

Here are some examples of props that you can use to customize the `@socialwell-design/editor`:

- `value`: This prop allows you to set the default value of the editor. This can be either a string containing the initial HTML content of the editor, or a function that returns the initial value.

- `placeholder`: This prop allows you to set a placeholder text that will be displayed in the editor when it is empty.
