---
uid: Qdk.Std.Math.SmallestFixedPoint
title: SmallestFixedPoint function
description: "Q# SmallestFixedPoint function: Returns the smallest representable number for specific fixed point dimensions."
ms.date: 05/29/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: SmallestFixedPoint
qsharp.summary: "Returns the smallest representable number for specific fixed point dimensions."
---

# SmallestFixedPoint function

Fully qualified name: Std.Math.SmallestFixedPoint

```qsharp
function SmallestFixedPoint(integerBits : Int, fractionalBits : Int) : Double
```

## Summary
Returns the smallest representable number for specific fixed point dimensions.

## Input
### integerBits
Number of integer bits (including the sign bit).
### fractionalBits
Number of fractional bits.

## Remark
The value can be computed as -2^(p-1), where p is the number of integer bits.
