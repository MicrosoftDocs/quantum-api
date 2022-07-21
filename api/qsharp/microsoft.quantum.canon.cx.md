---
uid: Microsoft.Quantum.Canon.CX
title: CX operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: CX
qsharp.summary: Applies the controlled-X (CX) gate to a pair of qubits.
---

# CX operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies the controlled-X (CX) gate to a pair of qubits.

```qsharp
operation CX (control : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Description

This operation can be simulated by the unitary matrix$$\begin{align}\left(\begin{matrix}1 & 0 & 0 & 0 \\\\0 & 1 & 0 & 0 \\\\0 & 0 & 0 & 1 \\\\0 & 0 & 1 & 0\end{matrix}\right)\end{align},$$where rows and columns are organized as in the quantum concepts guide.

## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Control qubit for the CX gate.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Target qubit for the CX gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharpControlled X([control], target);```and to:```qsharpCNOT(control, target);```