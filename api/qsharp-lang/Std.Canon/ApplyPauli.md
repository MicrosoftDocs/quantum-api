---
uid: Qdk.Std.Canon.ApplyPauli
title: ApplyPauli operation
ms.date: 10/30/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyPauli
qsharp.summary: "Given a multi-qubit Pauli operator, applies the corresponding operation to a quantum register."
---

# ApplyPauli operation

Fully qualified name: Std.Canon.ApplyPauli

```qsharp
operation ApplyPauli(pauli : Pauli[], target : Qubit[]) : Unit is Adj + Ctl
```

## Summary
Given a multi-qubit Pauli operator, applies the corresponding operation
to a quantum register.

## Input
### pauli
A multi-qubit Pauli operator represented as an array of single-qubit Pauli operators.
### target
Register to apply the given Pauli operation on.

## Example
The following are equivalent:
```qsharp
ApplyPauli([PauliY, PauliZ, PauliX], target);
```
and
```qsharp
Y(target[0]);
Z(target[1]);
X(target[2]);
```
