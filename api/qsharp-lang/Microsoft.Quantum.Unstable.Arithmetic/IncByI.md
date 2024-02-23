---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByI
title: IncByI operation
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: IncByI
qsharp.summary: Increments a little-endian register ys by an integer number c
---

# IncByI operation

Namespace: Microsoft.Quantum.Unstable.Arithmetic

```qsharp
operation IncByI(c : Int, ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by an integer number c

## Description
Computes ys += c modulo 2ⁿ, where ys is a little-endian register,
Length(ys) = n > 0, c is a Int number, 0 ≤ c < 2ⁿ.
NOTE: Use IncByIUsingIncByLE directly if the choice of implementation
is important.
