---
uid: Qdk.Std.Math.ArgComplex
title: ArgComplex function
description: "Q# ArgComplex function: Returns the phase of a complex number of type `Complex`."
ms.date: 06/02/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Math
qsharp.name: ArgComplex
qsharp.summary: "Returns the phase of a complex number of type `Complex`."
---

# ArgComplex function

Fully qualified name: Std.Math.ArgComplex

```qsharp
function ArgComplex(input : Complex) : Double
```

## Summary
Returns the phase of a complex number of type
`Complex`.

## Input
### input
Complex number c = x + y𝑖.

## Output
Phase Arg(c) = ArcTan(y,x) ∈ (-𝜋,𝜋].
