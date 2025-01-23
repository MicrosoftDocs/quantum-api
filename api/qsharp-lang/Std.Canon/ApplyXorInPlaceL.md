---
uid: Qdk.Std.Canon.ApplyXorInPlaceL
title: ApplyXorInPlaceL operation
description: "Q# ApplyXorInPlaceL operation: Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyXorInPlaceL
qsharp.summary: "Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits."
---

# ApplyXorInPlaceL operation

Fully qualified name: Std.Canon.ApplyXorInPlaceL

```qsharp
operation ApplyXorInPlaceL(value : BigInt, target : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Applies a bitwise-XOR operation between a classical integer and an
integer represented by a register of qubits.

## Description
Applies `X` operations to qubits in a little-endian register based on
1 bits in an integer.

Let us denote `value` by a and let y be an unsigned integer encoded in `target`,
then `ApplyXorInPlace` performs an operation given by the following map:
|y⟩ ↦ |y ⊕ a⟩, where ⊕ is the bitwise exclusive OR operator.
