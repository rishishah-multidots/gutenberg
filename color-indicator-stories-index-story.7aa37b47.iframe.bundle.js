"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[2363],{"./packages/components/src/color-indicator/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),_wordpress_element__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnforwardedColorIndicator(props,forwardedRef){const{className,colorValue,...additionalProps}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:(0,clsx__WEBPACK_IMPORTED_MODULE_1__.A)("component-color-indicator",className),style:{background:colorValue},ref:forwardedRef,...additionalProps})}UnforwardedColorIndicator.displayName="UnforwardedColorIndicator";const ColorIndicator=(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(UnforwardedColorIndicator),__WEBPACK_DEFAULT_EXPORT__=ColorIndicator;try{ColorIndicator.displayName="ColorIndicator",ColorIndicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"ColorIndicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#ColorIndicator"]={docgenInfo:ColorIndicator.__docgenInfo,name:"ColorIndicator",path:"packages/components/src/color-indicator/index.tsx#ColorIndicator"})}catch(__react_docgen_typescript_loader_error){}try{colorindicator.displayName="colorindicator",colorindicator.__docgenInfo={description:"ColorIndicator is a React component that renders a specific color in a\ncircle. It's often used to summarize a collection of used colors in a child\ncomponent.\n\n```jsx\nimport { ColorIndicator } from '@wordpress/components';\n\nconst MyColorIndicator = () => <ColorIndicator colorValue=\"#0073aa\" />;\n```",displayName:"colorindicator",props:{colorValue:{defaultValue:null,description:"The color of the indicator. Any value from the CSS `background` property\nis supported.",name:"colorValue",required:!0,type:{name:"Background<string | number>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/color-indicator/index.tsx#colorindicator"]={docgenInfo:colorindicator.__docgenInfo,name:"colorindicator",path:"packages/components/src/color-indicator/index.tsx#colorindicator"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/color-indicator/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/color-indicator/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:___WEBPACK_IMPORTED_MODULE_1__.A,title:"Components/ColorIndicator",argTypes:{colorValue:{control:{type:"color"}}},parameters:{sourceLink:"packages/components/src/color-indicator",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Template=({...args})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.A,{...args});Template.displayName="Template";const Default=Template.bind({});Default.args={colorValue:"#0073aa"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <ColorIndicator {...args} />",...Default.parameters?.docs?.source}}}}}]);