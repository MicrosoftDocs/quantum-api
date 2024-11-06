---
uid: Qdk.Std.Convert.DoubleAsStringWithPrecision
title: DoubleAsStringWithPrecision function
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Convert
qsharp.name: DoubleAsStringWithPrecision
qsharp.summary: "Converts a given double-precision floating-point number to a string representation with desired precision, rounding if required."
---

# DoubleAsStringWithPrecision function

Fully qualified name: Std.Convert.DoubleAsStringWithPrecision

```qsharp
function DoubleAsStringWithPrecision(input : Double, precision : Int) : String
```

## Summary
Converts a given double-precision floating-point number to a string representation with desired precision, rounding if required.

## Input
### input
Double to be converted.
### precision
Non-negative number of digits after the decimal point.

## Example
```qsharp
Message($"{DoubleAsStringWithPrecision(0.354, 2)}"); // Prints 0.35
Message($"{DoubleAsStringWithPrecision(0.485, 1)}"); // Prints 0.5
Message($"{DoubleAsStringWithPrecision(5.6, 4)}"); // Prints 5.6000
Message($"{DoubleAsStringWithPrecision(2.268, 0)}"); // Prints 2
```
