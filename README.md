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

-To improve the Card components markup, I started by adding BEM class names to each element of the Card. This included adding a class to represent a Cards selected state. 
-After that, I updated the HTML elements being used (both in the Card component and in the styled components). This helps screen readers and humans better understand the purpose of the markup by using elements that accurately describe the content within them. Furthermore, for typography's sake, using HTML elements like h4 and p will allow text styles to be styled once, rather than on a component-by-component basis, which will support consistency.

### 2. Styling
Using your design from the Figma task, style this component to match. 

-To style the component, I began the same way I did when designing it in Figma. I first created all the necessary variables in a styles/utilities folder so that colours could be reused throughout the design system. Originally, I put typography in the utilities folder as well, but then decided they should instead exist as their own styled components to be reused throughout the system
-In the Card styled component, I began by nesting all the class names appropriately and applying the styles, using variables where possible. 
-The Figma did not have the Button component, so I just styled the Button to match the one in the Mosaic design system.

### 3. Storybook
Currently this component has one story, think about capturing other potential use cases of this component.

-With the Figma component not having a Button, and the component in this application having one, the "isSelected" was something to grapple with. It would make sense that a Card component can either be selectable OR have a call to action button. For this reason, I separated those two versions of the Card component into different stories. The default Card has no button and is selectable. You then have the option to create a Card with a Button.  

### 4. Organisation
If you have time, think about the structure of the app. There is no right or wrong here, we're just interested to know how you would structure your components/stories/styles

-As I styled the Card component, I began to mess around with the file strucutre. Firstly, I created a Button component so that it could live separately from the Card component. I also created styled components for the Header and Body text, so that those can be styled once and used throughout the design system. 
-In the styles folder, I added a utilities folder for any reusable variables. In this case, all of the colours used for this Card and Button components
-I am a big fan of object oriented css because it allows us to think about our styles in the same way we do our React components. This helps when building applications because the file structures can mirror each other, which makes the application more accessible to fellow developers. Furthermore, styles become reusable and easily digestable. I've tried to implement OOCSS while styling the Card component as best I can. 

## Suggested Time
We appreciate your time is valuable and we suggest you don't spend more than a couple of hours on these tasks. Please provide notes for anything else you would have done given more time