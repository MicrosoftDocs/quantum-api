---
uid: Qdk.Std.Math.InverseModI
title: InverseModI function
description: "Q# InverseModI function: Returns the multiplicative inverse of a modular integer."
ms.date: 05/29/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: InverseModI
qsharp.summary: "Returns the multiplicative inverse of a modular integer."
---

# InverseModI function

Fully qualified name: Std.Math.InverseModI

```qsharp
function InverseModI(a : Int, modulus : Int) : Int
```

## Summary
Returns the multiplicative inverse of a modular integer.

## Description
This will calculate the multiplicative inverse of a
modular integer `b` such that `a • b = 1 (mod modulus)`.
