---
uid: Qdk.Std.Arithmetic.ReflectAboutInteger
title: ReflectAboutInteger operation
description: "Q# ReflectAboutInteger operation: Reflects a quantum register about a given classical integer."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: ReflectAboutInteger
qsharp.summary: "Reflects a quantum register about a given classical integer."
---

# ReflectAboutInteger operation

Fully qualified name: Std.Arithmetic.ReflectAboutInteger

```qsharp
operation ReflectAboutInteger(index : Int, reg : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Reflects a quantum register about a given classical integer.

## Description
Given a quantum register initially in the state ∑ᵢ(αᵢ|i⟩),
where each |i⟩ is a basis state representing an integer i,
reflects the state of the register about the basis state |j⟩
for a given integer j: ∑ᵢ(-1)^(δᵢⱼ)(αᵢ|i⟩)
This operation is implemented in-place, without explicit allocation of
additional auxiliary qubits.

## Input
### index
The classical integer j indexing the basis state about which to reflect.
### reg
Little-endian quantum register to reflect.
