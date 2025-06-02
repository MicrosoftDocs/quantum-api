---
uid: Qdk.Std.Arithmetic.IncByLEUsingAddLE
title: IncByLEUsingAddLE operation
description: "Q# IncByLEUsingAddLE operation: Generic operation to turn two out-place adders into one in-place adder"
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: IncByLEUsingAddLE
qsharp.summary: "Generic operation to turn two out-place adders into one in-place adder"
---

# IncByLEUsingAddLE operation

Fully qualified name: Std.Arithmetic.IncByLEUsingAddLE

```qsharp
operation IncByLEUsingAddLE(forwardAdder : ((Qubit[], Qubit[], Qubit[]) => Unit is Adj), backwardAdder : ((Qubit[], Qubit[], Qubit[]) => Unit is Adj), xs : Qubit[], ys : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Generic operation to turn two out-place adders into one in-place adder

## Description
This implementation allows to specify two distinct adders for forward
and backward direction.  The forward adder is always applied in its
body variant, whereas the backward adder is always applied in its adjoint
variant.  Therefore, it's possible to, for example, use the ripple-carry
out-of-place adder in backwards direction to require no T gates.

The controlled variant is also optimized in a way that everything but
the adders is controlled,

## Reference
- [arXiv:2012.01624](https://arxiv.org/abs/2012.01624)
  "Quantum block lookahead adders and the wait for magic states",
  Craig Gidney.
