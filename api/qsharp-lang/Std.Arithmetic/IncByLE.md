---
uid: Qdk.Std.Arithmetic.IncByLE
title: IncByLE operation
description: "Q# IncByLE operation: Increments a little-endian register ys by a little-endian register xs"
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: IncByLE
qsharp.summary: "Increments a little-endian register ys by a little-endian register xs"
---

# IncByLE operation

Fully qualified name: Std.Arithmetic.IncByLE

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
