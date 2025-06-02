---
uid: Qdk.Std.Diagnostics.Fact
title: Fact function
description: "Q# Fact function: Checks whether a given condition is true, failing with a message if it is not."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Diagnostics
qsharp.name: Fact
qsharp.summary: "Checks whether a given condition is true, failing with a message if it is not."
---

# Fact function

Fully qualified name: Std.Diagnostics.Fact

```qsharp
function Fact(actual : Bool, message : String) : Unit
```

## Summary
Checks whether a given condition is true, failing with a message if it is not.

## Description
This function checks whether a given condition is true. If the condition is false, the operation fails with the given message,
terminating the program.

## Input
### actual
The condition to check.
### message
The message to use in the failure if the condition is false.
