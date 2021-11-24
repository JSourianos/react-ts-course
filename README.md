# React - TypeScript Udemy Course


## Types Around Props and State (firstproject)
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