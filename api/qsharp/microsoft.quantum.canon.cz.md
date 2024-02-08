---
uid: Microsoft.Quantum.Canon.CZ
title: CZ operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: CZ
qsharp.summary: Applies the controlled-Z (CZ) gate to a pair of qubits.
---

# CZ operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Type3.Core](https://nuget.org/packages/Microsoft.Quantum.Type3.Core)


Applies the controlled-Z (CZ) gate to a pair of qubits.

```qsharp
operation CZ (control : Qubit, target : Qubit) : Unit is Adj + Ctl
```


## Description

This operation can be simulated by the unitary matrix$$\begin{align}1 & 0 & 0 & 0 \\\\0 & 1 & 0 & 0 \\\\0 & 0 & 1 & 0 \\\\0 & 0 & 0 & -1\end{align},$$where rows and columns are organized as in the quantum concepts guide.

## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Control qubit for the CZ gate.


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Target qubit for the CZ gate.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Equivalent to:```qsharpControlled Z([control], target);```