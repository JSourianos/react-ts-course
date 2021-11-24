# React - TypeScript Udemy Course

## Types Around Props and State 
- **Interface** or **Type** to define what props the child component expects to receive.
    - Are we providing the correct props to Child when we show it in the Parent?
    - Are we using the correctly named + types props in Child?
    
- TypeScript won't know by default that we are creating a React Component
  - So a common way to define a component is as follows:
    - `const Component: React.FC = () => {}`
  - If you have defined an interface for the prop types for the component, you can do as follows:
    - `const Component: React.FC<PropOrInterfaceType> = ({propOne, propTwo}) => {}`  
  - The third way of defining the props on a child component is as follows:
    - `const Component = ({propOne, propTwo}: PropOrInterfaceType) => {}`
    - **Note: The "recommended" way of defining an functional component is the two first methods defined above.**
  
## Types around Events and Refs 
- **Events** should have its own type.
  - A onChange event has the following type:
    - `const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {}`
  - A onDragStart event has the following type:
    - `const onDragStart = (event: React.DragEvent<HTMLInputElement>) => {}`
- Most IDEs will allow you to hover over the event in ex. an HTML tag, so most of the time you can find what type your current event has, by simply hovering over the HTML-property.

### **Refs**
#### useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.
There are 2 rules to remember about references (refs):
  1. The value of the reference is persisted between component re-renderings,
  2. Updating a reference dosen't trigger a component re-rendering

- useRef() gives you access to the special property `current`, which is a property stored on the current referenced element.
  - In our case, the ref is associated with the `<Input />` element, so through the `current` property we can write:
    - `inputRef.current.focus()`, which will focus the input tag when the component is loaded. It gives us the current ref element, and we can access its properties.

- Defining a ref with TypeScript:
  - `const inputRef = useRef<HTMLInputElement | null>(null);`
  - **NOTE: Unless you specify the null, we will have errors in the code. This is because refs might be null when the App loads(?)**

## TypeScript with Redux