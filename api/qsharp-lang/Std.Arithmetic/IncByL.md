---
uid: Qdk.Std.Arithmetic.IncByL
title: IncByL operation
description: "Q# IncByL operation: Increments a little-endian register ys by a BigInt number c"
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: IncByL
qsharp.summary: "Increments a little-endian register ys by a BigInt number c"
---

# IncByL operation

Fully qualified name: Std.Arithmetic.IncByL

```qsharp
operation IncByL(c : BigInt, ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a BigInt number c

## Description
Computes ys += c modulo 2ⁿ, where ys is a little-endian register,
Length(ys) = n > 0, c is a BigInt number, 0 ≤ c < 2ⁿ.
NOTE: Use IncByLUsingIncByLE directly if the choice of implementation
is important.
