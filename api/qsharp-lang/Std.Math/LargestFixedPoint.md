---
uid: Qdk.Std.Math.LargestFixedPoint
title: LargestFixedPoint function
description: "Q# LargestFixedPoint function: Returns the largest representable number for specific fixed point dimensions."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: LargestFixedPoint
qsharp.summary: "Returns the largest representable number for specific fixed point dimensions."
---

# LargestFixedPoint function

Fully qualified name: Std.Math.LargestFixedPoint

```qsharp
function LargestFixedPoint(integerBits : Int, fractionalBits : Int) : Double
```

## Summary
Returns the largest representable number for specific fixed point dimensions.

## Input
### integerBits
Number of integer bits (including the sign bit).
### fractionalBits
Number of fractional bits.

## Remark
The value can be computed as 2^(p-1) - 2^(-q), where p
is the number of integer bits and q is the number of fractional bits.
