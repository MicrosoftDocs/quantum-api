---
uid: Qdk.Std.Arithmetic.IncByIUsingIncByLE
title: IncByIUsingIncByLE operation
description: "Q# IncByIUsingIncByLE operation: Increments a little-endian register ys by an Int number c using provided adder."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: IncByIUsingIncByLE
qsharp.summary: "Increments a little-endian register ys by an Int number c using provided adder."
---

# IncByIUsingIncByLE operation

Fully qualified name: Std.Arithmetic.IncByIUsingIncByLE

```qsharp
operation IncByIUsingIncByLE(adder : ((Qubit[], Qubit[]) => Unit is Adj + Ctl), c : Int, ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by an Int number c
using provided adder.

## Description
Computes ys += c modulo 2ⁿ, where ys is a little-endian register
Length(ys) = n > 0, c is an Int number, 0 ≤ c < 2ⁿ.
