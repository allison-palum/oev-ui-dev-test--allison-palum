# OctopusEV UI Technical Test

Welcome to OctopusEV's technical task for the UI/UX Developer role. This test focuses on accessibility, semantic markup, and styling.

### System requirements
- Node.js 18+
- Typescript 5+

## Getting Started

This repo is a default installation of [Next.js](https://nextjs.org/) with Storybook and styled-components already installed and configured.

- Fork the repo and run `yarn install`
- `yarn storybook` will run Storybook

After this, a new tab will open with Storybook running on `http://localhost:6006/`

### Note
- This is a standard installation of Next.js. You shouldn't need to make any changes to get Storybook running.
- Feel free to modify and install whatever code you feel is necessary.

## Tasks

### 1. Markup
Think about how this component could be improved semantically, is there better markup that could be used for the content. From an accessibility point of view, think about how this could be improved.

> To improve the Card components markup, I started by adding BEM class names to each element of the Card. This included adding a class to represent a Cards selected state. After that, I updated the HTML elements being used (both in the Card component and in the styled components). This helps screen readers and humans better understand the purpose of the markup by using elements that accurately describe the content within them. Furthermore, for typography's sake, using HTML elements like h4 and p will allow text styles to be styled once, rather than on a component-by-component basis, which will support consistency.

### 2. Styling
Using your design from the Figma task, style this component to match. 

### 3. Storybook
Currently this component has one story, think about capturing other potential use cases of this component.

### 4. Organisation
If you have time, think about the structure of the app. There is no right or wrong here, we're just interested to know how you would structure your components/stories/styles

## Suggested Time
We appreciate your time is valuable and we suggest you don't spend more than a couple of hours on these tasks. Please provide notes for anything else you would have done given more time