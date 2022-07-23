---
uid: Microsoft.Quantum.Arithmetic.MultiplySI
title: MultiplySI operation
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Arithmetic
qsharp.name: MultiplySI
qsharp.summary: >-
  Multiply signed integer `xs` by signed integer `ys` and store
  the result in `result`, which must be zero initially.
---

# MultiplySI operation

Namespace: [Microsoft.Quantum.Arithmetic](xref:Microsoft.Quantum.Arithmetic)

Package: [Microsoft.Quantum.Numerics](https://nuget.org/packages/Microsoft.Quantum.Numerics)


Multiply signed integer `xs` by signed integer `ys` and storethe result in `result`, which must be zero initially.

```qsharp
operation MultiplySI (xs : Microsoft.Quantum.Arithmetic.SignedLittleEndian, ys : Microsoft.Quantum.Arithmetic.SignedLittleEndian, result : Microsoft.Quantum.Arithmetic.SignedLittleEndian) : Unit is Adj + Ctl
```


## Input

### xs : [SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian)

𝑛₁-bit multiplicand


### ys : [SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian)

𝑛₂-bit multiplier


### result : [SignedLittleEndian](xref:Microsoft.Quantum.Arithmetic.SignedLittleEndian)

(𝑛₁+𝑛₂)-bit result, must be in state |0⟩initially.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

