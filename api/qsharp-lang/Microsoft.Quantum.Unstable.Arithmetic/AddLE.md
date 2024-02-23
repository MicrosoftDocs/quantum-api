---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.AddLE
title: AddLE operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: AddLE
qsharp.summary: "Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys."
---

# AddLE operation

Namespace: Microsoft.Quantum.Unstable.Arithmetic

```qsharp
operation AddLE(xs : Qubit[], ys : Qubit[], zs : Qubit[]) : Unit is Adj
```

## Summary
Sets a zero-initialized little-endian register zs to the sum of
little-endian registers xs and ys

## Description
Computes zs := xs + ys modulo 2ⁿ, where xs, ys, and zs are little-endian registers,
Length(xs) = Length(ys) ≤ Length(zs) = n, assuming zs is 0-initialized.
NOTE: Use operations like RippleCarryCGAddLE directly if
the choice of implementation is important.
