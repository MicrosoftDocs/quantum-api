---
uid: Qdk.Std.Canon.ApplyP
title: ApplyP operation
description: "Q# ApplyP operation: Given a single-qubit Pauli operator, applies the corresponding operation to a single qubit."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: ApplyP
qsharp.summary: "Given a single-qubit Pauli operator, applies the corresponding operation to a single qubit."
---

# ApplyP operation

Fully qualified name: Std.Canon.ApplyP

```qsharp
operation ApplyP(pauli : Pauli, target : Qubit) : Unit is Adj + Ctl
```

## Summary
Given a single-qubit Pauli operator, applies the corresponding operation
to a single qubit.

## Input
### pauli
The Pauli operator to be applied.
### target
The qubit to which `pauli` is to be applied as an operation.

## Example
The following are equivalent:
```qsharp
ApplyP(PauliX, q);
```
and
```qsharp
X(q);
```
