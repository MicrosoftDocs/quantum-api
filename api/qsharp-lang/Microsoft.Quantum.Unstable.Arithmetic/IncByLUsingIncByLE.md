---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByLUsingIncByLE
title: IncByLUsingIncByLE operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: IncByLUsingIncByLE
qsharp.summary: "Increments a little-endian register ys by a BigInt number c using provided adder."
---

# IncByLUsingIncByLE operation

Fully qualified name: Microsoft.Quantum.Unstable.Arithmetic.IncByLUsingIncByLE

```qsharp
operation IncByLUsingIncByLE(adder : ((Qubit[], Qubit[]) => Unit is Adj + Ctl), c : BigInt, ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a BigInt number c
using provided adder.

## Description
Computes ys += c modulo 2ⁿ, where ys is a little-endian register
Length(ys) = n > 0, c is a BigInt number, 0 ≤ c < 2ⁿ.
