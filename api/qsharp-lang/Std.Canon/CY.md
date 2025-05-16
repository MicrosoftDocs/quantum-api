---
uid: Qdk.Std.Canon.CY
title: CY operation
description: "Q# CY operation: Applies the controlled-Y (CY) gate to a pair of qubits."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: CY
qsharp.summary: "Applies the controlled-Y (CY) gate to a pair of qubits."
---

# CY operation

Fully qualified name: Std.Canon.CY

```qsharp
operation CY(control : Qubit, target : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the controlled-Y (CY) gate to a pair of qubits.

## Input
### control
Control qubit for the CY gate.
### target
Target qubit for the CY gate.

## Remarks
This operation can be simulated by the unitary matrix
$$
\begin{align}
    \left(\begin{matrix}
        1 & 0 & 0 & 0 \\\\
        0 & 1 & 0 & 0 \\\\
        0 & 0 & 0 & -i \\\\
        0 & 0 & i & 0
     \end{matrix}\right)
\end{align},
$$
where rows and columns are organized as in the quantum concepts guide.

Equivalent to:
```qsharp
Controlled Y([control], target);
```
