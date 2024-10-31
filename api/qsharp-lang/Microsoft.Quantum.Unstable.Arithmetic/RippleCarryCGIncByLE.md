---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.RippleCarryCGIncByLE
title: RippleCarryCGIncByLE operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: RippleCarryCGIncByLE
qsharp.summary: "Increments a little-endian register ys by a little-endian register xs using the ripple-carry algorithm."
---

# RippleCarryCGIncByLE operation

Fully qualified name: Microsoft.Quantum.Unstable.Arithmetic.RippleCarryCGIncByLE

```qsharp
operation RippleCarryCGIncByLE(xs : Qubit[], ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Increments a little-endian register ys by a little-endian register xs
using the ripple-carry algorithm.

## Description
Computes ys += xs modulo 2ⁿ, where xs and ys are little-endian registers,
and Length(xs) ≤ Length(ys) = n.
Note that if Length(xs) != Length(ys), xs is padded with 0-initialized
qubits to match ys's length.
This operation uses the ripple-carry algorithm.

## Reference
- [arXiv:1709.06648](https://arxiv.org/pdf/1709.06648.pdf)
  "Halving the cost of quantum addition", Craig Gidney.
