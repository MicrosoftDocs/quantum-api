---
uid: Qdk.Std.Diagnostics.StartCountingFunction
title: StartCountingFunction operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: StartCountingFunction
qsharp.summary: "Starts counting the number of times the given function is called. Fails if the function is already being counted."
---

# StartCountingFunction operation

Fully qualified name: Std.Diagnostics.StartCountingFunction

```qsharp
operation StartCountingFunction<'In, 'Out>(callable : ('In -> 'Out)) : Unit
```

## Summary
Starts counting the number of times the given function is called. Fails if the function is already being counted.

## Description
This operation allows you to count the number of times a given function is called. If the given function is already
being counted, calling `StartCountingFunction` again will trigger a runtime failure.

## Input
### callable
The function to be counted.

## Remarks
When counting lambdas, the symbol the lambda is bound to is used to identify the function and it is counted as a separate function. For example,
```qsharp
let myFunc = i -> AbsI(i);
StartCountingFunction(myFunc);
```
Will count specifically calls to `myFunc` and not `AbsI`. By contrast, the following code will count calls to `AbsI` itself:
```qsharp
let myFunc = AbsI;
StartCountingFunction(myFunc);
```
This is because this code does not define a lambda and instead just creates a binding to `AbsI` directly.
