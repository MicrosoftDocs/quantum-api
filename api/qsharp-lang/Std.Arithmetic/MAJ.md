---
uid: Qdk.Std.Arithmetic.MAJ
title: MAJ operation
description: "Q# MAJ operation: This applies the in-place majority operation to 3 qubits."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Arithmetic
qsharp.name: MAJ
qsharp.summary: "This applies the in-place majority operation to 3 qubits."
---

# MAJ operation

Fully qualified name: Std.Arithmetic.MAJ

```qsharp
operation MAJ(x : Qubit, y : Qubit, z : Qubit) : Unit is Adj + Ctl
```

## Summary
This applies the in-place majority operation to 3 qubits.

## Description
Assuming the state of the input qubits are |x⟩, |y⟩ and |z⟩, then
this operation performs the following transformation:
|x⟩|y⟩|z⟩ ↦ |x ⊕ z⟩|y ⊕ z⟩MAJ(x, y, z).

## Input
### x
The first input qubit.
### y
The second input qubit.
### z
A qubit onto which the majority function will be applied.
