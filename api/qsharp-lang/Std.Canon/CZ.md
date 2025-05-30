---
uid: Qdk.Std.Canon.CZ
title: CZ operation
description: "Q# CZ operation: Applies the controlled-Z (CZ) gate to a pair of qubits."
ms.date: 05/29/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: CZ
qsharp.summary: "Applies the controlled-Z (CZ) gate to a pair of qubits."
---

# CZ operation

Fully qualified name: Std.Canon.CZ

```qsharp
operation CZ(control : Qubit, target : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the controlled-Z (CZ) gate to a pair of qubits.

## Input
### control
Control qubit for the CZ gate.
### target
Target qubit for the CZ gate.

## Remarks
This operation can be simulated by the unitary matrix
$$
\begin{align}
    \left(\begin{matrix}
        1 & 0 & 0 & 0 \\\\
        0 & 1 & 0 & 0 \\\\
        0 & 0 & 1 & 0 \\\\
        0 & 0 & 0 & -1
    \end{matrix}\right)
\end{align},
$$
where rows and columns are organized as in the quantum concepts guide.

Equivalent to:
```qsharp
Controlled Z([control], target);
```
