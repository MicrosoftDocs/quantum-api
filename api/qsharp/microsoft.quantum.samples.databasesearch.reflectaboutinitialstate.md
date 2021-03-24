---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ReflectAboutInitialState
title: ReflectAboutInitialState operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ReflectAboutInitialState
qsharp.summary: Performs a reflection around the initial state, given by DU|0〉|0〉.
---

# ReflectAboutInitialState operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Performs a reflection around the initial state, given by DU|0〉|0〉.

```qsharp
operation ReflectAboutInitialState (markedQubit : Qubit, databaseRegister : Qubit[]) : Unit
```


## Input

### markedQubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit that indicated whether database element is marked.


### databaseRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register of n qubits initially in the |00…0〉 state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

