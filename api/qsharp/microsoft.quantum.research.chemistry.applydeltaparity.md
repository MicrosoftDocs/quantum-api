---
uid: Microsoft.Quantum.Research.Chemistry.ApplyDeltaParity
title: ApplyDeltaParity operation
ms.date: 6/25/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Research.Chemistry
qsharp.name: ApplyDeltaParity
qsharp.summary: >-
  Computes difference in parity between a previous PQRS... terms
  and the next PQRS... term. This difference is computed on a auxiliary
  qubit.
---

# ApplyDeltaParity operation

Namespace: [Microsoft.Quantum.Research.Chemistry](xref:Microsoft.Quantum.Research.Chemistry)

Package: [Microsoft.Quantum.Research.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Research.Chemistry)


Computes difference in parity between a previous PQRS... termsand the next PQRS... term. This difference is computed on a auxiliaryqubit.

```qsharp
operation ApplyDeltaParity (prevFermionicTerm : Int[], nextFermionicTerm : Int[], aux : Qubit, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### prevFermionicTerm : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

List of indices to previous PQRS... terms.


### nextFermionicTerm : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

List of indices to next PQRS... terms.


### aux : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

Auxiliary qubit onto which parity computation results are stored.


### qubits : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]

Qubit acted on by all PQRS... terms.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

This assumes that indices of P < Q < R < S < ... for both prevPQ and nextPQ.