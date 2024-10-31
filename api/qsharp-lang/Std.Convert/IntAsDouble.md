---
uid: Qdk.Std.Convert.IntAsDouble
title: IntAsDouble function
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Convert
qsharp.name: IntAsDouble
qsharp.summary: "Converts a given integer `number` to an equivalent double-precision floating-point number."
---

# IntAsDouble function

Fully qualified name: Std.Convert.IntAsDouble

```qsharp
function IntAsDouble(number : Int) : Double
```

## Summary
Converts a given integer `number` to an equivalent
double-precision floating-point number.

## Description
Converts a given integer to a double-precision floating point number.
Please note that the double-precision representation may have fewer
bits allocated to represent [significant digits](https://en.wikipedia.org/wiki/Significand)
so the conversion may be approximate for large numbers. For example,
the current simulator converts 4,611,686,018,427,387,919 = 2^64+15
to 4,611,686,018,427,387,904.0 = 2^64.

## Example
```qsharp
Message($"{IntAsDouble(1)}"); // Prints 1.0 rather than 1
```
