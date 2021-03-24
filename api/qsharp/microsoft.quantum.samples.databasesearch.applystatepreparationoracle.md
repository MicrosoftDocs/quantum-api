---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ApplyStatePreparationOracle
title: ApplyStatePreparationOracle operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ApplyStatePreparationOracle
qsharp.summary: >-
  Given a register of qubits initially in the state |00…0〉, prepares
  the start state |1〉|N-1〉/√N + |0〉(|0〉+|1〉+...+|N-2〉)/√N.
---

# ApplyStatePreparationOracle operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Given a register of qubits initially in the state |00…0〉, preparesthe start state |1〉|N-1〉/√N + |0〉(|0〉+|1〉+...+|N-2〉)/√N.

```qsharp
operation ApplyStatePreparationOracle (markedQubit : Qubit, databaseRegister : Qubit[]) : Unit is Adj + Ctl
```


## Input

### markedQubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit that indicates whether database element is marked.


### databaseRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register of n qubits initially in the |00…0〉 state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

