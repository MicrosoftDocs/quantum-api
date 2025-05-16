---
uid: Qdk.Std.Math.InverseModL
title: InverseModL function
description: "Q# InverseModL function: Returns the multiplicative inverse of a modular integer."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: InverseModL
qsharp.summary: "Returns the multiplicative inverse of a modular integer."
---

# InverseModL function

Fully qualified name: Std.Math.InverseModL

```qsharp
function InverseModL(a : BigInt, modulus : BigInt) : BigInt
```

## Summary
Returns the multiplicative inverse of a modular integer.

## Description
This will calculate the multiplicative inverse of a
modular integer `b` such that `a • b = 1 (mod modulus)`.
