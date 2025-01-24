---
uid: Qdk.Std.Math.IsCoprimeL
title: IsCoprimeL function
description: "Q# IsCoprimeL function: Returns if two integers are co-prime."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: IsCoprimeL
qsharp.summary: "Returns if two integers are co-prime."
---

# IsCoprimeL function

Fully qualified name: Std.Math.IsCoprimeL

```qsharp
function IsCoprimeL(a : BigInt, b : BigInt) : Bool
```

## Summary
Returns if two integers are co-prime.

## Description
Returns true if a and b are co-prime and false otherwise.

## Input
### a
the first number of which co-primality is being tested
### b
the second number of which co-primality is being tested

## Output
True, if a and b are co-prime (e.g. their greatest common divisor is 1),
and false otherwise
