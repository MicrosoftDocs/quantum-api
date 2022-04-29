---
uid: Microsoft.Quantum.Arithmetic.SquareSI
title: SquareSI operation
ms.date: 4/28/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: SquareSI
qsharp.summary: >-
  Square signed integer `xs` and store
  the result in `result`, which must be zero initially.
---

# SquareSI operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Square signed integer `xs` and storethe result in `result`, which must be zero initially.

```qsharp
operation SquareSI (xs : Microsoft.Quantum.Arithmetic.SignedLittleEndian, result : Microsoft.Quantum.Arithmetic.SignedLittleEndian) : Unit is Adj + Ctl
```


## Input

### xs : [SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian)

𝑛-bit integer to square


### result : [SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian)

2𝑛-bit result, must be in state |0⟩initially.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

The implementation relies on `SquareI`.