---
uid: Microsoft.Quantum.Intrinsic.Measure
title: Measure operation
ms.date: 9/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Measure
qsharp.summary: >-
  Performs a joint measurement of one or more qubits in the
  specified Pauli bases.
---

# Measure operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.QSharp.Core](https://nuget.org/packages/Microsoft.Quantum.QSharp.Core)


Performs a joint measurement of one or more qubits in thespecified Pauli bases.

```qsharp
operation Measure (bases : Pauli[], qubits : Qubit[]) : Result
```


## Description

The output result is given by the distribution:\begin{align}\Pr(\texttt{Zero} | \ket{\psi}) =\frac12 \braket{\psi \mid|\left(\boldone + P_0 \otimes P_1 \otimes \cdots \otimes P_{N-1}\right) \mid|\psi},\end{align}where $P_i$ is the $i$th element of `bases`, and where$N = \texttt{Length}(\texttt{bases})$.That is, measurement returns a `Result` $d$ such that the eigenvalue of theobserved measurement effect is $(-1)^d$.

## Input

### bases : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[]

Array of single-qubit Pauli values indicating the tensor productfactors on each qubit.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register of qubits to be measured.



## Output : [Result](xref:microsoft.quantum.qsharp.valueliterals#result-literal)

`Zero` if the $+1$ eigenvalue is observed, and `One` ifthe $-1$ eigenvalue is observed.

## Remarks

If the basis array and qubit array are different lengths, then theoperation will fail.