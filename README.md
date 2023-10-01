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

>1. To improve the Card components markup, I started by adding BEM class names to each element of the Card. This included adding a class to represent a Card's selected state. 
>
>2. After that, I updated the HTML elements being used (both in the Card component and in the styled components). This helps screen readers and humans better understand the purpose of the markup by using elements that accurately describe the content within them.
>
>3. Furthermore, for typography's sake, using HTML elements like h4 and p will allow text styles to be styled once, rather than on a component-by-component basis, which will support consistency.

### 2. Styling
Using your design from the Figma task, style this component to match. 

>1. To style the component, I began the same way I did when designing the component in Figma. I first created all the necessary variables in a styles/utilities folder so that colours could be reused throughout the design system. Initially, I put typography in the utilities folder as well, but then decided they should exist as their own styled components to be reused throughout the system
>
>2. In the Card styled component, I began by nesting all the class names appropriately and applying the styles, using variables where possible. 
>
>3. I added transitions and transformations to the hover state that mimic those found on the oev website.
>
>4. The Figma did not have the Button component, so I just styled the Button to match the one in the Mosaic design system.

### 3. Storybook
Currently this component has one story, think about capturing other potential use cases of this component.

>1. With the Figma component not having a Button, and the component in this application having one, the "isSelected" was something to grapple with. It would make sense that a Card component can either be selectable OR have a call to action button. For this reason, I separated those two versions of the Card component into different stories. 
>
>2. The default Card has no button and is selectable. This includes a hover state on the card where the background changes colors and the card moves as you hover over it.
>
>3. You then have the option to create a Card with a Button, which will not change styles when hovered over. Only the button itself is clickable. This was all achieved via BEM class modifiers and css selection. 

### 4. Organisation
If you have time, think about the structure of the app. There is no right or wrong here, we're just interested to know how you would structure your components/stories/styles

>1. As I styled the Card component, I began to mess around with the file structure. Firstly, I created a Button component to live separately from the Card component. I also created styled components for the Header and Body text, so that those can be styled once and used throughout the design system. 
>
>2. In the styles folder, I added a utilities folder for any reusable variables. In this case, all of the colours used for this Card and Button components. I tried to match these variable names semantically to the colour styles I created in Figma.
>
>3. In this application, files are organised by their file type where all the styles are found in one directory, all the components are found in another, and all the stories are found in another. When building the design system with Songtust, we organised our files by app, which meant all the files associated with, let's say, a Card component (styles, stories, React component) were found in one directory. This was helpful because when working on the design system we were usually working on one component at a time and it was useful to have all the files associated with that component in one place. However, global styling was still necessary, which did require a separate styles folder that was agnostic to a particular component anyway. For this reason, it might be useful to have them separated by file type in the first place so that you're not duplicating where styles can be found.  
>
>4. I am a big fan of object-oriented css because it allows us to think about our styles in the same way we do our React components. This helps when building applications because the file structures can mirror each other, which makes the application more accessible to fellow developers. Furthermore, styles become reusable and easily digestible. I've tried to implement object-oriented css while styling the Card component as best I can. 

## Suggested Time
We appreciate your time is valuable and we suggest you don't spend more than a couple of hours on these tasks. Please provide notes for anything else you would have done given more time
