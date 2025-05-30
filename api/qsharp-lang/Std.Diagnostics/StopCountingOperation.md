---
uid: Qdk.Std.Diagnostics.StopCountingOperation
title: StopCountingOperation operation
description: "Q# StopCountingOperation operation: Stops counting the number of times the given operation is called and returns the count. Fails if the operation was not being counted."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: StopCountingOperation
qsharp.summary: "Stops counting the number of times the given operation is called and returns the count. Fails if the operation was not being counted."
---

# StopCountingOperation operation

Fully qualified name: Std.Diagnostics.StopCountingOperation

```qsharp
operation StopCountingOperation<'In, 'Out>(callable : ('In => 'Out)) : Int
```

## Summary
Stops counting the number of times the given operation is called and returns the count. Fails
if the operation was not being counted.

## Description
This operation allows you to stop counting the number of times a given operation is called and returns the count.
If the operation was not being counted, it triggers a runtime failure.

## Input
### callable
The operation whose count will be returned.
## Output
The number of times the operation was called since the last call to `StartCountingOperation`.
