---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ApplyDatabaseOracleFromInts
title: ApplyDatabaseOracleFromInts operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ApplyDatabaseOracleFromInts
qsharp.summary: Database oracle `D` constructed from classical database.
---

# ApplyDatabaseOracleFromInts operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Database oracle `D` constructed from classical database.

```qsharp
operation ApplyDatabaseOracleFromInts (markedElements : Int[], markedQubit : Qubit, databaseRegister : Qubit[]) : Unit is Adj + Ctl
```


## Input

### markedElements : [Int](xref:microsoft.quantum.lang-ref.int)[]

Indices to marked elements in database.


### markedQubit : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

Qubit that indicated whether database element is marked.


### databaseRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

A register of n qubits initially in the |00…0〉 state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

This implements the oracle D |z〉 |k〉 = |z ⊕ xₖ〉 |k〉 used in the Groversearch algorithm. Given a database with N = 2^n elements, n is thesize of the database qubit register. Let x = x₀x₁...x_{N-1} be abinary string of N elements. Then xₖ is 1 if k is in "markedElements"and 0 otherwise.