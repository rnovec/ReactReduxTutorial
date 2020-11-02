# State Management

In the previous module we built a **Contact Manager** app, which stores the state in the parent component, and passes it down to the corresponding child components.

In the real world with larger scale applications, this can get far more complex. We might have to pass down the state data multiple levels to get to the desired component.

Having to pass down data to multiple levels of nested components would make it hard to understand what caused a change to the state, as there might be multiple potential components that can change the state.

This would also cause a lot of redundant code, make it hard to maintain and debug the code.

## Introducing Redux

**Redux** was created to make state management predictable, providing a single state container and strict rules on how state can be changed.

**Redux** is a small JavaScript library and can be used with any front-end framework, such as React, Angular, jQuery.

It employs the "**single source of truth**" pattern.
In short, **single source of truth** just refers to relocating the application state and all associated logic outside of the application, allowing ANY component to access the data it needs.

> Having a single state container makes it easier to manage the state of your application, as you can access and change the data from any component that needs it, without having to pass down the data.
