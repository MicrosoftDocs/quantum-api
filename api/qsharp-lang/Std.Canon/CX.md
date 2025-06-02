---
uid: Qdk.Std.Canon.CX
title: CX operation
description: "Q# CX operation: Applies the controlled-X (CX) gate to a pair of qubits."
ms.date: 06/02/2025
qsharp.kind: operation
qsharp.package: __Std__
qsharp.namespace: Std.Canon
qsharp.name: CX
qsharp.summary: "Applies the controlled-X (CX) gate to a pair of qubits."
---

# CX operation

Fully qualified name: Std.Canon.CX

```qsharp
operation CX(control : Qubit, target : Qubit) : Unit is Adj + Ctl
```

## Summary
Applies the controlled-X (CX) gate to a pair of qubits.

## Input
### control
Control qubit for the CX gate.
### target
Target qubit for the CX gate.

## Remarks
This operation can be simulated by the unitary matrix
$$
\begin{align}
    \left(\begin{matrix}
        1 & 0 & 0 & 0 \\\\
        0 & 1 & 0 & 0 \\\\
        0 & 0 & 0 & 1 \\\\
        0 & 0 & 1 & 0
     \end{matrix}\right)
\end{align},
$$
where rows and columns are organized as in the quantum concepts guide.

Equivalent to:
```qsharp
Controlled X([control], target);
```
and to:
```qsharp
CNOT(control, target);
```
