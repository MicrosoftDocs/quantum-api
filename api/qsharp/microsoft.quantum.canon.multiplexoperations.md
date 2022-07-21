---
uid: Microsoft.Quantum.Canon.MultiplexOperations
title: MultiplexOperations operation
ms.date: 7/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Canon
qsharp.name: MultiplexOperations
qsharp.summary: >-
  Applies an array of operations controlled by an array of number states.

  That is, applies Multiply-controlled unitary operation $U$ that applies a
  unitary $V_j$ when controlled by $n$-qubit number state $\ket{j}$.

  $U = \sum^{2^n-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.
---

# MultiplexOperations operation

Namespace: [Microsoft.Quantum.Canon](xref:Microsoft.Quantum.Canon)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Applies an array of operations controlled by an array of number states.That is, applies Multiply-controlled unitary operation $U$ that applies aunitary $V_j$ when controlled by $n$-qubit number state $\ket{j}$.$U = \sum^{2^n-1}_{j=0}\ket{j}\bra{j}\otimes V_j$.

```qsharp
operation MultiplexOperations<'T> (unitaries : ('T => Unit is Adj + Ctl)[], index : Microsoft.Quantum.Arithmetic.LittleEndian, target : 'T) : Unit is Adj + Ctl
```


## Input

### unitaries : 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl[]

Array of up to $2^n$ unitary operations. The $j$th operationis indexed by the number state $\ket{j}$ encoded in little-endian format.


### index : [LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian)

$n$-qubit control register that encodes number states $\ket{j}$ inlittle-endian format.


### target : 'T

Generic qubit register that $V_j$ acts on.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T



## References

- Encoding Electronic Spectra in Quantum Circuits with Linear T Complexity  Ryan Babbush, Craig Gidney, Dominic W. Berry, Nathan Wiebe, Jarrod McClean, Alexandru Paler, Austin Fowler, Hartmut Neven  https://arxiv.org/abs/1805.03662