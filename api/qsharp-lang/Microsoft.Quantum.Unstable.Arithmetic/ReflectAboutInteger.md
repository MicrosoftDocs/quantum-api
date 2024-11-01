---
uid: Qdk.Microsoft.Quantum.Unstable.Arithmetic.ReflectAboutInteger
title: ReflectAboutInteger operation
ms.date: 11/01/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Microsoft.Quantum.Unstable.Arithmetic
qsharp.name: ReflectAboutInteger
qsharp.summary: "Reflects a quantum register about a given classical integer."
---

# ReflectAboutInteger operation

Fully qualified name: Microsoft.Quantum.Unstable.Arithmetic.ReflectAboutInteger

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
