---
uid: Qdk.Std.Canon.ApplyXorInPlace
title: ApplyXorInPlace operation
description: "Q# ApplyXorInPlace operation: Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyXorInPlace
qsharp.summary: "Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits."
---

# ApplyXorInPlace operation

Fully qualified name: Std.Canon.ApplyXorInPlace

```qsharp
operation ApplyXorInPlace(value : Int, target : Qubit[]) : Unit is Adj + Ctl
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
