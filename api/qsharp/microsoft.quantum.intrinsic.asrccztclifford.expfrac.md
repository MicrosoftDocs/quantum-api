---
uid: Microsoft.Quantum.Intrinsic.AsRCczTClifford.ExpFrac
title: ExpFrac operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Intrinsic.AsRCczTClifford
qsharp.name: ExpFrac
qsharp.summary: >-
  Applies the exponential of a multi-qubit Pauli operator
  with an argument given by a dyadic fraction.

  \begin{align}
  e^{i \pi k [P_0 \otimes P_1 \cdots P_{N-1}] / 2^n},
  \end{align}
  where $P_i$ is the $i$th element of `paulis`, and where
  $N = $`Length(paulis)`.
---

# ExpFrac operation

Namespace: [Microsoft.Quantum.Intrinsic.AsRCczTClifford](xref:Microsoft.Quantum.Intrinsic.AsRCczTClifford)

Package: [FaultTolerantDecompositionsTests](https://nuget.org/packages/FaultTolerantDecompositionsTests)


Applies the exponential of a multi-qubit Pauli operatorwith an argument given by a dyadic fraction.\begin{align}e^{i \pi k [P_0 \otimes P_1 \cdots P_{N-1}] / 2^n},\end{align}where $P_i$ is the $i$th element of `paulis`, and where$N = $`Length(paulis)`.

```qsharp
operation ExpFrac (paulis : Pauli[], numerator : Int, power : Int, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### paulis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

Array of single-qubit Pauli values indicating the tensor productfactors on each qubit.


### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

Numerator ($k$) in the dyadic fraction representation of the angleby which the qubit register is to be rotated.


### power : [Int](xref:microsoft.quantum.lang-ref.int)

Power of two ($n$) specifying the denominator of the angle by whichthe qubit register is to be rotated.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Register to apply the given rotation to.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

