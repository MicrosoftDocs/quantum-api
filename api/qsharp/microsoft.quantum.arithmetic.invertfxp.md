---
uid: Microsoft.Quantum.Arithmetic.InvertFxP
title: InvertFxP operation
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: InvertFxP
qsharp.summary: Computes the additive inverse of `fp`.
---

# InvertFxP operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Computes the additive inverse of `fp`.

```qsharp
operation InvertFxP (fp : Microsoft.Quantum.Arithmetic.FixedPoint) : Unit is Adj + Ctl
```


## Input

### fp : [FixedPoint](xref:Microsoft.Quantum.Arithmetic.FixedPoint)

Fixed-point number to invert.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Numerical inaccuracies may occur depending on thebit-precision of the fixed-point number.