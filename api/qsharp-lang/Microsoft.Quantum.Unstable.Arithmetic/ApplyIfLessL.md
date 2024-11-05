---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfLessL
title: ApplyIfLessL operation
ms.date: 11/01/2024
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: ApplyIfLessL
qsharp.summary: "Computes `if (c < x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less than the little-endian qubit register `x`"
---

# ApplyIfLessL operation

Fully qualified name: Microsoft.Quantum.Unstable.Arithmetic.ApplyIfLessL

```qsharp
operation ApplyIfLessL<'T>(action : ('T => Unit is Adj + Ctl), c : BigInt, x : Qubit[], target : 'T) : Unit is Adj + Ctl
```

## Summary
Computes `if (c < x) { action(target) }`, that is, applies `action` to `target`
if a BigInt value `c` is less than the little-endian qubit register `x`
