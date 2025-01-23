---
uid: Qdk.Std.Diagnostics.StopCountingFunction
title: StopCountingFunction operation
description: "Q# StopCountingFunction operation: Stops counting the number of times the given function is called and returns the count. Fails if the function was not being counted."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: StopCountingFunction
qsharp.summary: "Stops counting the number of times the given function is called and returns the count. Fails if the function was not being counted."
---

# StopCountingFunction operation

Fully qualified name: Std.Diagnostics.StopCountingFunction

```qsharp
operation StopCountingFunction<'In, 'Out>(callable : ('In -> 'Out)) : Int
```

## Summary
Stops counting the number of times the given function is called and returns the count. Fails
if the function was not being counted.

## Description
This operation allows you to stop counting the number of times a given function is called and returns the count.
If the function was not being counted, it triggers a runtime failure.

## Input
### callable
The function whose count will be returned.
## Output
The number of times the function was called since the last call to `StartCountingFunction`.
