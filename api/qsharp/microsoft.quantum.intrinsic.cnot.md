---
uid: Microsoft.Quantum.Intrinsic.CNOT
title: CNOT operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: CNOT
qsharp.summary: Applies the controlled-NOT (CNOT) gate to a pair of qubits.
---

# CNOT operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Applies the controlled-NOT (CNOT) gate to a pair of qubits.

```qsharp
operation CNOT (control : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Description

\begin{align}\operatorname{CNOT} \mathrel{:=}\begin{bmatrix}1 & 0 & 0 & 0 \\\\0 & 1 & 0 & 0 \\\\0 & 0 & 0 & 1 \\\\0 & 0 & 1 & 0\end{bmatrix},\end{align}where rows and columns are ordered as in the quantum concepts guide.

## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Control qubit for the CNOT gate.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Target qubit for the CNOT gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharpControlled X([control], target);```