---
uid: Qdk.Std.Arrays.Reversed
title: Reversed function
description: "Q# Reversed function: Create an array that contains the same elements as an input array but in reversed order."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Arrays
qsharp.name: Reversed
qsharp.summary: "Create an array that contains the same elements as an input array but in reversed order."
---

# Reversed function

Fully qualified name: Std.Arrays.Reversed

```qsharp
function Reversed<'T>(array : 'T[]) : 'T[]
```

## Summary
Create an array that contains the same elements as an input array but in reversed
order.

## Type Parameters
### 'T
The type of the array elements.

## Input
### array
An array whose elements are to be copied in reversed order.

## Output
An array containing the elements `array[Length(array) - 1]` .. `array[0]`.
