---
uid: Qdk.Std.Intrinsic.CCNOT
title: CCNOT operation
description: "Q# CCNOT operation: Applies the doubly controlled–NOT (CCNOT) gate to three qubits."
ms.date: 01/24/2025
ms.topic: managed-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: CCNOT
qsharp.summary: "Applies the doubly controlled–NOT (CCNOT) gate to three qubits."
---

# CCNOT operation

Fully qualified name: Std.Intrinsic.CCNOT

```qsharp
operation CCNOT(control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the doubly controlled–NOT (CCNOT) gate to three qubits.

## Input
### control1
First control qubit for the CCNOT gate.
### control2
Second control qubit for the CCNOT gate.
### target
Target qubit for the CCNOT gate.

## Remarks
Equivalent to:
```qsharp
Controlled X([control1, control2], target);
```
