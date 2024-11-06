---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByLE
title: IncByLE operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: IncByLE
qsharp.summary: "Increments a little-endian register ys by a little-endian register xs"
---

# IncByLE operation

Fully qualified name: Microsoft.Quantum.Unstable.Arithmetic.IncByLE

```qsharp
operation IncByLE(xs : Qubit[], ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a little-endian register xs

## Description
Computes ys += xs modulo 2ⁿ, where xs and ys are little-endian registers,
and Length(xs) ≤ Length(ys) = n.
NOTE: Use operations like RippleCarryCGIncByLE directly if
the choice of implementation is important.
