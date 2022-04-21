---
uid: Microsoft.Quantum.Intrinsic.ExpFrac
title: ExpFrac operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: ExpFrac
qsharp.summary: >-
  Applies the exponential of a multi-qubit Pauli operator
  with an argument given by a dyadic fraction.
---

# ExpFrac operation

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.Type2.Core](https://nuget.org/packages/Microsoft.Quantum.Type2.Core)


Applies the exponential of a multi-qubit Pauli operatorwith an argument given by a dyadic fraction.

```qsharp
operation ExpFrac (paulis : Pauli[], numerator : Int, power : Int, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Description

\begin{align}e^{i \pi k [P_0 \otimes P_1 \cdots P_{N-1}] / 2^n},\end{align}where $P_i$ is the $i$th element of `paulis`, and where$N = $`Length(paulis)`.

## Input

### paulis : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)[]

Array of single-qubit Pauli values indicating the tensor productfactors on each qubit.


### numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Numerator ($k$) in the dyadic fraction representation of the angleby which the qubit register is to be rotated.


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Power of two ($n$) specifying the denominator of the angle by whichthe qubit register is to be rotated.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Register to apply the given rotation to.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

