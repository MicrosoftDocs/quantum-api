---
uid: Microsoft.Quantum.Samples.DatabaseSearch.SearchForMarkedState
title: SearchForMarkedState operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: SearchForMarkedState
qsharp.summary: >-
  Prepares the start state and boosts the amplitude of the marked
  subspace by a sequence of reflections about the marked state and the
  start state.
---

# SearchForMarkedState operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Prepares the start state and boosts the amplitude of the markedsubspace by a sequence of reflections about the marked state and thestart state.

```qsharp
operation SearchForMarkedState (nIterations : Int, markedQubit : Qubit, databaseRegister : Qubit[]) : Unit
```


## Input

### nIterations : [Int](xref:microsoft.quantum.lang-ref.int)

Number of applications of the Grover iterate (RS · RM).


### markedQubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit that indicated whether database element is marked.


### databaseRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register of n qubits initially in the |00…0〉 state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

