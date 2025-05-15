---
uid: Qdk.Std.Arithmetic.IncByLUsingIncByLE
title: IncByLUsingIncByLE operation
description: "Q# IncByLUsingIncByLE operation: Increments a little-endian register ys by a BigInt number c using provided adder."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: IncByLUsingIncByLE
qsharp.summary: "Increments a little-endian register ys by a BigInt number c using provided adder."
---

# IncByLUsingIncByLE operation

Fully qualified name: Std.Arithmetic.IncByLUsingIncByLE

```qsharp
operation IncByLUsingIncByLE(adder : ((Qubit[], Qubit[]) => Unit is Adj + Ctl), c : BigInt, ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a BigInt number c
using provided adder.

## Description
Computes ys += c modulo 2ⁿ, where ys is a little-endian register
Length(ys) = n > 0, c is a BigInt number, 0 ≤ c < 2ⁿ.
