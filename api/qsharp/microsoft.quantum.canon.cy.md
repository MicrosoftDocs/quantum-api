---
uid: Microsoft.Quantum.Canon.CY
title: CY operation
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: CY
qsharp.summary: Applies the controlled-Y (CY) gate to a pair of qubits.
---

# CY operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the controlled-Y (CY) gate to a pair of qubits.

```qsharp
operation CY (control : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Description

This operation can be simulated by the unitary matrix$$\begin{align}1 & 0 & 0 & 0 \\\\0 & 1 & 0 & 0 \\\\0 & 0 & 0 & -i \\\\0 & 0 & i & 0\end{align},$$where rows and columns are organized as in the quantum concepts guide.

## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Control qubit for the CY gate.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Target qubit for the CY gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharpControlled Y([control], target);```