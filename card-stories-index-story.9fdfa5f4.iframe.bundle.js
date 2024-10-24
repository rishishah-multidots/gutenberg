"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[810],{"./packages/components/src/heading/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>heading_component});var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/text/hook.ts"),font_size=__webpack_require__("./packages/components/src/utils/font-size.ts"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedHeading(props,forwardedRef){const headerProps=function useHeading(props){const{as:asProp,level=2,color=colors_values.l.gray[900],isBlock=!0,weight=config_values.A.fontWeightHeading,...otherProps}=(0,use_context_system.A)(props,"Heading"),as=asProp||`h${level}`,a11yProps={};return"string"==typeof as&&"h"!==as[0]&&(a11yProps.role="heading",a11yProps["aria-level"]="string"==typeof level?parseInt(level):level),{...(0,hook.A)({color,isBlock,weight,size:(0,font_size.fM)(level),...otherProps}),...a11yProps,as}}(props);return(0,jsx_runtime.jsx)(component.A,{...headerProps,ref:forwardedRef})}UnconnectedHeading.displayName="UnconnectedHeading";const Heading=(0,context_connect.KZ)(UnconnectedHeading,"Heading"),heading_component=Heading;try{Heading.displayName="Heading",Heading.__docgenInfo={description:'`Heading` renders headings and titles using the library\'s typography system.\n\n```jsx\nimport { __experimentalHeading as Heading } from "@wordpress/components";\n\nfunction Example() {\n  return <Heading>Code is Poetry</Heading>;\n}\n```',displayName:"Heading",props:{children:{defaultValue:null,description:"The children elements.\n\nNote: text truncation will be attempted only if the `children` are either\nof type `string` or `number`. In any other scenarios, the component will\nnot attempt to truncate the text, and will pass through the `children`.",name:"children",required:!0,type:{name:"ReactNode"}},display:{defaultValue:null,description:"Adjusts the CSS display.",name:"display",required:!1,type:{name:"Display"}},letterSpacing:{defaultValue:null,description:"Adjusts letter-spacing of the text.",name:"letterSpacing",required:!1,type:{name:"LetterSpacing<string | number>"}},size:{defaultValue:null,description:"Adjusts text size based on the typography system. `Text` can render a wide range of font sizes, which are automatically calculated and adapted to the typography system. The `size` value can be a system preset, a `number`, or a custom unit value (`string`) such as `30em`.",name:"size",required:!1,type:{name:"string | number | (string & {})"}},align:{defaultValue:null,description:"Adjusts the text alignment.",name:"align",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"inherit"'},{value:'"end"'},{value:'"start"'},{value:'"initial"'},{value:'"left"'},{value:'"right"'},{value:'"justify"'},{value:'"-moz-initial"'},{value:'"revert"'},{value:'"revert-layer"'},{value:'"unset"'},{value:'"match-parent"'}]}},ellipsis:{defaultValue:{value:"'…'"},description:"The ellipsis string when truncating the text by the `limit` prop's value.",name:"ellipsis",required:!1,type:{name:"string"}},ellipsizeMode:{defaultValue:{value:"'auto'"},description:"Determines where to truncate.  For example, we can truncate text right in\nthe middle. To do this, we need to set `ellipsizeMode` to `middle` and a\ntext `limit`.\n\n* `auto`: Trims content at the end automatically without a `limit`.\n* `head`: Trims content at the beginning. Requires a `limit`.\n* `middle`: Trims content in the middle. Requires a `limit`.\n* `tail`: Trims content at the end. Requires a `limit`.",name:"ellipsizeMode",required:!1,type:{name:"enum",value:[{value:'"head"'},{value:'"none"'},{value:'"auto"'},{value:'"middle"'},{value:'"tail"'}]}},limit:{defaultValue:{value:"0"},description:"Determines the max number of characters to be displayed before the rest\nof the text gets truncated. Requires `ellipsizeMode` to assume values\ndifferent from `auto` and `none`.",name:"limit",required:!1,type:{name:"number"}},numberOfLines:{defaultValue:{value:"0"},description:"Clamps the text content to the specified `numberOfLines`, adding an\nellipsis at the end. Note: this feature ignores the value of the\n`ellipsis` prop and always displays the default `…` ellipsis.",name:"numberOfLines",required:!1,type:{name:"number"}},variant:{defaultValue:null,description:"Adjusts style variation of the text.",name:"variant",required:!1,type:{name:'"muted"'}},adjustLineHeightForInnerControls:{defaultValue:null,description:"Automatically calculate the appropriate line-height value for contents that render text and Control elements (e.g. `TextInput`).",name:"adjustLineHeightForInnerControls",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'}]}},isDestructive:{defaultValue:{value:"false"},description:"Renders a destructive color.",name:"isDestructive",required:!1,type:{name:"boolean"}},highlightEscape:{defaultValue:{value:"false"},description:"Escape characters in `highlightWords` which are meaningful in regular expressions.",name:"highlightEscape",required:!1,type:{name:"boolean"}},highlightCaseSensitive:{defaultValue:{value:"false"},description:"Determines if `highlightWords` should be case sensitive.",name:"highlightCaseSensitive",required:!1,type:{name:"boolean"}},highlightSanitize:{defaultValue:null,description:"Array of search words. String search terms are automatically cast to RegExps unless `highlightEscape` is true.",name:"highlightSanitize",required:!1,type:{name:"(text: string) => string"}},lineHeight:{defaultValue:null,description:"Adjusts all text line-height based on the typography system.",name:"lineHeight",required:!1,type:{name:"LineHeight<string | number>"}},optimizeReadabilityFor:{defaultValue:null,description:"The `Text` color can be adapted to a background color for optimal readability. `optimizeReadabilityFor` can accept CSS variables, in addition to standard CSS color values (e.g. Hex, RGB, HSL, etc...).",name:"optimizeReadabilityFor",required:!1,type:{name:"Color"}},truncate:{defaultValue:{value:"false"},description:"Enables text truncation. When `truncate` is set, we are able to truncate the long text in a variety of ways. Note: text truncation won't work if the `isBlock` property is set to `true`",name:"truncate",required:!1,type:{name:"boolean"}},upperCase:{defaultValue:{value:"false"},description:"Uppercases the text content.",name:"upperCase",required:!1,type:{name:"boolean"}},highlightWords:{defaultValue:null,description:"Letters or words within `Text` can be highlighted using `highlightWords`.",name:"highlightWords",required:!1,type:{name:"string[]"}},level:{defaultValue:{value:"2"},description:"Passing any of the heading levels to `level` will both render the correct\ntypographic text size as well as the semantic element corresponding to\nthe level (`h1` for `1` for example).",name:"level",required:!1,type:{name:"enum",value:[{value:"1"},{value:"2"},{value:'"1"'},{value:"3"},{value:"4"},{value:"5"},{value:"6"},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},isBlock:{defaultValue:{value:"true"},description:"Sets `Heading` to have `display: block`. Note: text truncation only works\nwhen `isBlock` is `false`.",name:"isBlock",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"'#1e1e1e'"},description:"Adjusts the text color.",name:"color",required:!1,type:{name:"Color"}},weight:{defaultValue:{value:"'600'"},description:"Adjusts font-weight of the text.",name:"weight",required:!1,type:{name:"FontWeight | TextWeight"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/heading/component.tsx#Heading"]={docgenInfo:Heading.__docgenInfo,name:"Heading",path:"packages/components/src/heading/component.tsx#Heading"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/scrollable/component.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>scrollable_component});var context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/view/component.tsx"),react=__webpack_require__("./node_modules/react/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js");const scrollableScrollbar=(0,emotion_react_browser_esm.AH)("@media only screen and ( min-device-width: 40em ){&::-webkit-scrollbar{height:12px;width:12px;}&::-webkit-scrollbar-track{background-color:transparent;}&::-webkit-scrollbar-track{background:",config_values.A.colorScrollbarTrack,";border-radius:8px;}&::-webkit-scrollbar-thumb{background-clip:padding-box;background-color:",config_values.A.colorScrollbarThumb,";border:2px solid rgba( 0, 0, 0, 0 );border-radius:7px;}&:hover::-webkit-scrollbar-thumb{background-color:",config_values.A.colorScrollbarThumbHover,";}}",""),Scrollable={name:"13udsys",styles:"height:100%"},styles_smoothScroll={name:"7zq9w",styles:"scroll-behavior:smooth"},scrollX={name:"q33xhg",styles:"overflow-x:auto;overflow-y:hidden"},scrollY={name:"103x71s",styles:"overflow-x:hidden;overflow-y:auto"},scrollAuto={name:"umwchj",styles:"overflow-y:auto"};var use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedScrollable(props,forwardedRef){const scrollableProps=function useScrollable(props){const{className,scrollDirection="y",smoothScroll=!1,...otherProps}=(0,use_context_system.A)(props,"Scrollable"),cx=(0,use_cx.l)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Scrollable,scrollableScrollbar,smoothScroll&&styles_smoothScroll,"x"===scrollDirection&&scrollX,"y"===scrollDirection&&scrollY,"auto"===scrollDirection&&scrollAuto,className)),[className,cx,scrollDirection,smoothScroll])}}(props);return(0,jsx_runtime.jsx)(component.A,{...scrollableProps,ref:forwardedRef})}UnconnectedScrollable.displayName="UnconnectedScrollable";const component_Scrollable=(0,context_connect.KZ)(UnconnectedScrollable,"Scrollable"),scrollable_component=component_Scrollable;try{component_Scrollable.displayName="Scrollable",component_Scrollable.__docgenInfo={description:"`Scrollable` is a layout component that content in a scrollable container.\n\n```jsx\nimport { __experimentalScrollable as Scrollable } from `@wordpress/components`;\n\nfunction Example() {\n\treturn (\n\t\t<Scrollable style={ { maxHeight: 200 } }>\n\t\t\t<div style={ { height: 500 } }>...</div>\n\t\t</Scrollable>\n\t);\n}\n```",displayName:"Scrollable",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},scrollDirection:{defaultValue:{value:"'y'"},description:"Renders a scrollbar for a specific axis when content overflows.",name:"scrollDirection",required:!1,type:{name:"enum",value:[{value:'"x"'},{value:'"y"'},{value:'"auto"'}]}},smoothScroll:{defaultValue:{value:"false"},description:"Enables (CSS) smooth scrolling.",name:"smoothScroll",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/scrollable/component.tsx#Scrollable"]={docgenInfo:component_Scrollable.__docgenInfo,name:"Scrollable",path:"packages/components/src/scrollable/component.tsx#Scrollable"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/card/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FullBleedContent:()=>FullBleedContent,default:()=>index_story});var emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),context_system_provider=__webpack_require__("./packages/components/src/context/context-system-provider.js"),context_connect=__webpack_require__("./packages/components/src/context/context-connect.ts"),component=__webpack_require__("./packages/components/src/elevation/component.tsx"),view_component=__webpack_require__("./packages/components/src/view/component.tsx"),config_values=__webpack_require__("./packages/components/src/utils/config-values.js"),colors_values=__webpack_require__("./packages/components/src/utils/colors-values.js");const adjustedBorderRadius=`calc(${config_values.A.radiusLarge} - 1px)`,Card=(0,emotion_react_browser_esm.AH)("box-shadow:0 0 0 1px ",config_values.A.surfaceBorderColor,";outline:none;",""),Header={name:"1showjb",styles:"border-bottom:1px solid;box-sizing:border-box;&:last-child{border-bottom:none;}"},Footer={name:"14n5oej",styles:"border-top:1px solid;box-sizing:border-box;&:first-of-type{border-top:none;}"},Content={name:"13udsys",styles:"height:100%"},Body={name:"6ywzd",styles:"box-sizing:border-box;height:auto;max-height:100%"},Media={name:"dq805e",styles:"box-sizing:border-box;overflow:hidden;&>img,&>iframe{display:block;height:auto;max-width:100%;width:100%;}"},Divider={name:"c990dr",styles:"box-sizing:border-box;display:block;width:100%"},borderRadius=(0,emotion_react_browser_esm.AH)("&:first-of-type{border-top-left-radius:",adjustedBorderRadius,";border-top-right-radius:",adjustedBorderRadius,";}&:last-of-type{border-bottom-left-radius:",adjustedBorderRadius,";border-bottom-right-radius:",adjustedBorderRadius,";}",""),borderColor=(0,emotion_react_browser_esm.AH)("border-color:",config_values.A.colorDivider,";",""),boxShadowless={name:"1t90u8d",styles:"box-shadow:none"},borderless={name:"1e1ncky",styles:"border:none"},rounded=(0,emotion_react_browser_esm.AH)("border-radius:",adjustedBorderRadius,";",""),xSmallCardPadding=(0,emotion_react_browser_esm.AH)("padding:",config_values.A.cardPaddingXSmall,";",""),cardPaddings={large:(0,emotion_react_browser_esm.AH)("padding:",config_values.A.cardPaddingLarge,";",""),medium:(0,emotion_react_browser_esm.AH)("padding:",config_values.A.cardPaddingMedium,";",""),small:(0,emotion_react_browser_esm.AH)("padding:",config_values.A.cardPaddingSmall,";",""),xSmall:xSmallCardPadding,extraSmall:xSmallCardPadding},shady=(0,emotion_react_browser_esm.AH)("background-color:",colors_values.l.ui.backgroundDisabled,";","");var build_module=__webpack_require__("./packages/deprecated/build-module/index.js"),use_context_system=__webpack_require__("./packages/components/src/context/use-context-system.js"),hook=__webpack_require__("./packages/components/src/surface/hook.ts"),use_cx=__webpack_require__("./packages/components/src/utils/hooks/use-cx.ts");function useCard(props){const{className,elevation=0,isBorderless=!1,isRounded=!0,size="medium",...otherProps}=(0,use_context_system.A)(function useDeprecatedProps({elevation,isElevated,...otherProps}){const propsToReturn={...otherProps};let computedElevation=elevation;var _computedElevation;return isElevated&&((0,build_module.A)("Card isElevated prop",{since:"5.9",alternative:"elevation"}),null!==(_computedElevation=computedElevation)&&void 0!==_computedElevation||(computedElevation=2)),void 0!==computedElevation&&(propsToReturn.elevation=computedElevation),propsToReturn}(props),"Card"),cx=(0,use_cx.l)(),classes=(0,react.useMemo)((()=>cx(Card,isBorderless&&boxShadowless,isRounded&&rounded,className)),[className,cx,isBorderless,isRounded]);return{...(0,hook.f)({...otherProps,className:classes}),elevation,isBorderless,isRounded,size}}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function UnconnectedCard(props,forwardedRef){const{children,elevation,isBorderless,isRounded,size,...otherProps}=useCard(props),elevationBorderRadius=isRounded?config_values.A.radiusLarge:0,cx=(0,use_cx.l)(),elevationClassName=(0,react.useMemo)((()=>cx((0,emotion_react_browser_esm.AH)({borderRadius:elevationBorderRadius},"",""))),[cx,elevationBorderRadius]),contextProviderValue=(0,react.useMemo)((()=>{const contextProps={size,isBorderless};return{CardBody:contextProps,CardHeader:contextProps,CardFooter:contextProps}}),[isBorderless,size]);return(0,jsx_runtime.jsx)(context_system_provider.c7,{value:contextProviderValue,children:(0,jsx_runtime.jsxs)(view_component.A,{...otherProps,ref:forwardedRef,children:[(0,jsx_runtime.jsx)(view_component.A,{className:cx(Content),children}),(0,jsx_runtime.jsx)(component.A,{className:elevationClassName,isInteractive:!1,value:elevation?1:0}),(0,jsx_runtime.jsx)(component.A,{className:elevationClassName,isInteractive:!1,value:elevation})]})})}UnconnectedCard.displayName="UnconnectedCard";const component_Card=(0,context_connect.KZ)(UnconnectedCard,"Card"),card_component=component_Card;try{component_Card.displayName="Card",component_Card.__docgenInfo={description:"`Card` provides a flexible and extensible content container.\n`Card` also provides a convenient set of sub-components such as `CardBody`,\n`CardHeader`, `CardFooter`, and more.\n\n```jsx\nimport {\n  Card,\n  CardHeader,\n  CardBody,\n  CardFooter,\n  __experimentalText as Text,\n  __experimentalHeading as Heading,\n} from `@wordpress/components`;\n\nfunction Example() {\n  return (\n    <Card>\n      <CardHeader>\n        <Heading level={ 4 }>Card Title</Heading>\n      </CardHeader>\n      <CardBody>\n        <Text>Card Content</Text>\n      </CardBody>\n      <CardFooter>\n        <Text>Card Footer</Text>\n      </CardFooter>\n    </Card>\n  );\n}\n```",displayName:"Card",props:{backgroundSize:{defaultValue:{value:"12"},description:'Determines the grid size for "dotted" and "grid" variants.',name:"backgroundSize",required:!1,type:{name:"number"}},borderBottom:{defaultValue:{value:"false"},description:"Renders a bottom border.",name:"borderBottom",required:!1,type:{name:"boolean"}},borderLeft:{defaultValue:{value:"false"},description:"Renders a left border.",name:"borderLeft",required:!1,type:{name:"boolean"}},borderRight:{defaultValue:{value:"false"},description:"Renders a right border.",name:"borderRight",required:!1,type:{name:"boolean"}},borderTop:{defaultValue:{value:"false"},description:"Renders a top border.",name:"borderTop",required:!1,type:{name:"boolean"}},variant:{defaultValue:{value:"'primary'"},description:"Modifies the background color of `Surface`.\n\n* `primary`: Used for almost all cases.\n* `secondary`: Used as a secondary background for inner `Surface` components.\n* `tertiary`: Used as the app/site wide background. Visible in **dark mode** only. Use case is rare.\n* `grid`: Used to show a grid.\n* `dotted`: Used to show a dots grid.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"grid"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"dotted"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'},{value:'"extraSmall"'}]}},elevation:{defaultValue:{value:"0"},description:"Size of the elevation shadow, based on the Style system's elevation system.\nElevating a `Card` can be done by adjusting the `elevation` prop. This may\nbe helpful in highlighting certain content. For more information, check out\n`Elevation`.",name:"elevation",required:!1,type:{name:"number"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},isRounded:{defaultValue:{value:"true"},description:"Renders with rounded corners.",name:"isRounded",required:!1,type:{name:"boolean"}},isElevated:{defaultValue:{value:"false"},description:"Renders with elevation styles (box shadow).\n@deprecated",name:"isElevated",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card/component.tsx#Card"]={docgenInfo:component_Card.__docgenInfo,name:"Card",path:"packages/components/src/card/card/component.tsx#Card"})}catch(__react_docgen_typescript_loader_error){}var flex_component=__webpack_require__("./packages/components/src/flex/flex/component.tsx");function UnconnectedCardHeader(props,forwardedRef){const headerProps=function useCardHeader(props){const{className,isBorderless=!1,isShady=!1,size="medium",...otherProps}=(0,use_context_system.A)(props,"CardHeader"),cx=(0,use_cx.l)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Header,borderRadius,borderColor,cardPaddings[size],isBorderless&&borderless,isShady&&shady,"components-card__header",className)),[className,cx,isBorderless,isShady,size])}}(props);return(0,jsx_runtime.jsx)(flex_component.A,{...headerProps,ref:forwardedRef})}UnconnectedCardHeader.displayName="UnconnectedCardHeader";const CardHeader=(0,context_connect.KZ)(UnconnectedCardHeader,"CardHeader"),card_header_component=CardHeader;try{CardHeader.displayName="CardHeader",CardHeader.__docgenInfo={description:"`CardHeader` renders an optional header within a `Card`.\n\n```jsx\nimport { Card, CardBody, CardHeader } from `@wordpress/components`;\n\n<Card>\n\t<CardHeader>...</CardHeader>\n\t<CardBody>...</CardBody>\n</Card>\n```",displayName:"CardHeader",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'},{value:'"extraSmall"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-header/component.tsx#CardHeader"]={docgenInfo:CardHeader.__docgenInfo,name:"CardHeader",path:"packages/components/src/card/card-header/component.tsx#CardHeader"})}catch(__react_docgen_typescript_loader_error){}var scrollable_component=__webpack_require__("./packages/components/src/scrollable/component.tsx");function UnconnectedCardBody(props,forwardedRef){const{isScrollable,...otherProps}=function useCardBody(props){const{className,isScrollable=!1,isShady=!1,size="medium",...otherProps}=(0,use_context_system.A)(props,"CardBody"),cx=(0,use_cx.l)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Body,borderRadius,cardPaddings[size],isShady&&shady,"components-card__body",className)),[className,cx,isShady,size]),isScrollable}}(props);return isScrollable?(0,jsx_runtime.jsx)(scrollable_component.A,{...otherProps,ref:forwardedRef}):(0,jsx_runtime.jsx)(view_component.A,{...otherProps,ref:forwardedRef})}UnconnectedCardBody.displayName="UnconnectedCardBody";const CardBody=(0,context_connect.KZ)(UnconnectedCardBody,"CardBody"),card_body_component=CardBody;try{CardBody.displayName="CardBody",CardBody.__docgenInfo={description:"`CardBody` renders an optional content area for a `Card`.\nMultiple `CardBody` components can be used within `Card` if needed.\n\n```jsx\nimport { Card, CardBody } from `@wordpress/components`;\n\n<Card>\n\t<CardBody>\n\t\t...\n\t</CardBody>\n</Card>\n```",displayName:"CardBody",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'},{value:'"extraSmall"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isScrollable:{defaultValue:{value:"false"},description:"Determines if the component is scrollable.",name:"isScrollable",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-body/component.tsx#CardBody"]={docgenInfo:CardBody.__docgenInfo,name:"CardBody",path:"packages/components/src/card/card-body/component.tsx#CardBody"})}catch(__react_docgen_typescript_loader_error){}var divider_component=__webpack_require__("./packages/components/src/divider/component.tsx");function UnconnectedCardDivider(props,forwardedRef){const dividerProps=function useCardDivider(props){const{className,...otherProps}=(0,use_context_system.A)(props,"CardDivider"),cx=(0,use_cx.l)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Divider,borderColor,"components-card__divider",className)),[className,cx])}}(props);return(0,jsx_runtime.jsx)(divider_component.A,{...dividerProps,ref:forwardedRef})}UnconnectedCardDivider.displayName="UnconnectedCardDivider";const CardDivider=(0,context_connect.KZ)(UnconnectedCardDivider,"CardDivider"),card_divider_component=CardDivider;try{CardDivider.displayName="CardDivider",CardDivider.__docgenInfo={description:"`CardDivider` renders an optional divider within a `Card`.\nIt is typically used to divide multiple `CardBody` components from each other.\n\n```jsx\nimport { Card, CardBody, CardDivider } from `@wordpress/components`;\n\n<Card>\n <CardBody>...</CardBody>\n <CardDivider />\n <CardBody>...</CardBody>\n</Card>\n```",displayName:"CardDivider",props:{ref:{defaultValue:null,description:"Allows getting a ref to the component instance.\nOnce the component unmounts, React will set `ref.current` to `null`\n(or call the ref with `null` if you passed a callback ref).\n@see {@link https://react.dev/learn/referencing-values-with-refs#refs-and-the-dom React Docs}",name:"ref",required:!1,type:{name:"Ref<HTMLHRElement> & LegacyRef<any>"}},margin:{defaultValue:null,description:"Adjusts all margins on the inline dimension.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"margin",required:!1,type:{name:"SpaceInput"}},marginEnd:{defaultValue:null,description:"Adjusts the inline-end margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"marginEnd",required:!1,type:{name:"SpaceInput"}},marginStart:{defaultValue:null,description:"Adjusts the inline-start margin.\n\nCan either be a number (which will act as a multiplier to the library's grid system base of 4px),\nor a literal CSS value string.",name:"marginStart",required:!1,type:{name:"SpaceInput"}},orientation:{defaultValue:{value:"'horizontal'"},description:"Divider's orientation. When using inside a flex container, you may need\nto make sure the divider is `stretch` aligned in order for it to be\nvisible.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"vertical"'},{value:'"horizontal"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-divider/component.tsx#CardDivider"]={docgenInfo:CardDivider.__docgenInfo,name:"CardDivider",path:"packages/components/src/card/card-divider/component.tsx#CardDivider"})}catch(__react_docgen_typescript_loader_error){}function UnconnectedCardMedia(props,forwardedRef){const cardMediaProps=function useCardMedia(props){const{className,...otherProps}=(0,use_context_system.A)(props,"CardMedia"),cx=(0,use_cx.l)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Media,borderRadius,"components-card__media",className)),[className,cx])}}(props);return(0,jsx_runtime.jsx)(view_component.A,{...cardMediaProps,ref:forwardedRef})}UnconnectedCardMedia.displayName="UnconnectedCardMedia";const CardMedia=(0,context_connect.KZ)(UnconnectedCardMedia,"CardMedia"),card_media_component=CardMedia;try{CardMedia.displayName="CardMedia",CardMedia.__docgenInfo={description:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color.",displayName:"CardMedia",props:{children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-media/component.tsx#CardMedia"]={docgenInfo:CardMedia.__docgenInfo,name:"CardMedia",path:"packages/components/src/card/card-media/component.tsx#CardMedia"})}catch(__react_docgen_typescript_loader_error){}function UnconnectedCardFooter(props,forwardedRef){const footerProps=function useCardFooter(props){const{className,justify,isBorderless=!1,isShady=!1,size="medium",...otherProps}=(0,use_context_system.A)(props,"CardFooter"),cx=(0,use_cx.l)();return{...otherProps,className:(0,react.useMemo)((()=>cx(Footer,borderRadius,borderColor,cardPaddings[size],isBorderless&&borderless,isShady&&shady,"components-card__footer",className)),[className,cx,isBorderless,isShady,size]),justify}}(props);return(0,jsx_runtime.jsx)(flex_component.A,{...footerProps,ref:forwardedRef})}UnconnectedCardFooter.displayName="UnconnectedCardFooter";const CardFooter=(0,context_connect.KZ)(UnconnectedCardFooter,"CardFooter"),card_footer_component=CardFooter;try{CardFooter.displayName="CardFooter",CardFooter.__docgenInfo={description:"`CardFooter` renders an optional footer within a `Card`.\n\n```jsx\nimport { Card, CardBody, CardFooter } from `@wordpress/components`;\n\n<Card>\n\t<CardBody>...</CardBody>\n\t<CardFooter>...</CardFooter>\n</Card>\n```",displayName:"CardFooter",props:{size:{defaultValue:{value:"'medium'"},description:"Determines the amount of padding within the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"medium"'},{value:'"xSmall"'},{value:'"extraSmall"'}]}},children:{defaultValue:null,description:"The children elements.",name:"children",required:!0,type:{name:"ReactNode"}},isShady:{defaultValue:{value:"false"},description:"Renders with a light gray background color.",name:"isShady",required:!1,type:{name:"boolean"}},isBorderless:{defaultValue:{value:"false"},description:"Renders without a border.",name:"isBorderless",required:!1,type:{name:"boolean"}},justify:{defaultValue:null,description:"",name:"justify",required:!1,type:{name:"JustifyContent"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:'"symbol" | "object" | "select" | ComponentClass<any, any> | FunctionComponent<any> | "a" | "abbr" | "address" | "area" | "article" | "aside" | ... 524 more ... | ("view" & FunctionComponent<...>)'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/card-footer/component.tsx#CardFooter"]={docgenInfo:CardFooter.__docgenInfo,name:"CardFooter",path:"packages/components/src/card/card-footer/component.tsx#CardFooter"})}catch(__react_docgen_typescript_loader_error){}var text_component=__webpack_require__("./packages/components/src/text/component.tsx"),heading_component=__webpack_require__("./packages/components/src/heading/component.tsx"),src_button=__webpack_require__("./packages/components/src/button/index.tsx");const index_story={component:card_component,subcomponents:{CardHeader:card_header_component,CardBody:card_body_component,CardDivider:card_divider_component,CardMedia:card_media_component,CardFooter:card_footer_component},title:"Components/Containers/Card",id:"components-card",argTypes:{as:{control:{type:null}},children:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/card",badges:[],controls:{expanded:!0},docs:{canvas:{sourceState:"shown"}}}},Default={args:{children:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(card_header_component,{children:(0,jsx_runtime.jsx)(heading_component.A,{children:"CardHeader"})}),(0,jsx_runtime.jsx)(card_body_component,{children:(0,jsx_runtime.jsx)(text_component.A,{children:"CardBody"})}),(0,jsx_runtime.jsx)(card_body_component,{children:(0,jsx_runtime.jsx)(text_component.A,{children:"CardBody (before CardDivider)"})}),(0,jsx_runtime.jsx)(card_divider_component,{}),(0,jsx_runtime.jsx)(card_body_component,{children:(0,jsx_runtime.jsx)(text_component.A,{children:"CardBody (after CardDivider)"})}),(0,jsx_runtime.jsx)(card_media_component,{children:(0,jsx_runtime.jsx)("img",{alt:"Card Media",src:"https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80"})}),(0,jsx_runtime.jsxs)(card_footer_component,{children:[(0,jsx_runtime.jsx)(text_component.A,{children:"CardFooter"}),(0,jsx_runtime.jsx)(src_button.Ay,{variant:"secondary",children:"Action Button"})]})]})}},FullBleedContent={...Default,args:{...Default.args,children:(0,jsx_runtime.jsx)(card_media_component,{children:(0,jsx_runtime.jsx)("div",{style:{padding:16,background:"beige"},children:"Some full bleed content"})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n                <CardHeader>\n                    <Heading>CardHeader</Heading>\n                </CardHeader>\n                <CardBody>\n                    <Text>CardBody</Text>\n                </CardBody>\n                <CardBody>\n                    <Text>CardBody (before CardDivider)</Text>\n                </CardBody>\n                <CardDivider />\n                <CardBody>\n                    <Text>CardBody (after CardDivider)</Text>\n                </CardBody>\n                <CardMedia>\n                    <img alt="Card Media" src="https://images.unsplash.com/photo-1566125882500-87e10f726cdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1867&q=80" />\n                </CardMedia>\n                <CardFooter>\n                    <Text>CardFooter</Text>\n                    <Button variant="secondary">Action Button</Button>\n                </CardFooter>\n            </>\n  }\n}',...Default.parameters?.docs?.source}}},FullBleedContent.parameters={...FullBleedContent.parameters,docs:{...FullBleedContent.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    ...Default.args,\n    children: <CardMedia>\n                <div style={{\n        padding: 16,\n        background: 'beige'\n      }}>\n                    Some full bleed content\n                </div>\n            </CardMedia>\n  }\n}",...FullBleedContent.parameters?.docs?.source},description:{story:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",...FullBleedContent.parameters?.docs?.description}}};try{FullBleedContent.displayName="FullBleedContent",FullBleedContent.__docgenInfo={description:"`CardMedia` provides a container for full-bleed content within a `Card`,\nsuch as images, video, or even just a background color. The corners will be rounded if necessary.",displayName:"FullBleedContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/card/stories/index.story.tsx#FullBleedContent"]={docgenInfo:FullBleedContent.__docgenInfo,name:"FullBleedContent",path:"packages/components/src/card/stories/index.story.tsx#FullBleedContent"})}catch(__react_docgen_typescript_loader_error){}}}]);