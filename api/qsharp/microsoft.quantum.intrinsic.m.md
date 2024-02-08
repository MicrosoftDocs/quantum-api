---
uid: Microsoft.Quantum.Intrinsic.M
title: M operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: M
qsharp.summary: >-
  Performs a measurement of a single qubit in the
  Pauli $Z$ basis.
---

# M operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Performs a measurement of a single qubit in thePauli $Z$ basis.

```qsharp
operation M (qubit : Qubit) : Result
```


## Description

The output result is given bythe distribution\begin{align}\Pr(\texttt{Zero} | \ket{\psi}) =\braket{\psi | 0} \braket{0 | \psi}.\end{align}

## Input

### qubit : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Qubit to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

`Zero` if the $+1$ eigenvalue is observed, and `One` ifthe $-1$ eigenvalue is observed.

## Remarks

Equivalent to:```qsharpMeasure([PauliZ], [qubit]);```