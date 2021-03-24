---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ApplyGroverSearch
title: ApplyGroverSearch operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ApplyGroverSearch
qsharp.summary: >-
  Performs quantum search for the marked elements and returns an index
  to the found element in integer format.
---

# ApplyGroverSearch operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Performs quantum search for the marked elements and returns an indexto the found element in integer format.

```qsharp
operation ApplyGroverSearch (markedElements : Int[], nIterations : Int, nDatabaseQubits : Int) : (Result, Int)
```


## Input

### markedElements : [Int](xref:microsoft.quantum.lang-ref.int)[]

Indices to marked elements in database.


### nIterations : [Int](xref:microsoft.quantum.lang-ref.int)

Number of applications of the Grover iterate (RS · RM).


### nDatabaseQubits : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits in the database register.



## Output : (__invalid<Result>__,[Int](xref:microsoft.quantum.lang-ref.int))

Measurement outcome of marked Qubit and measurement outcomes ofthe database register converted to an integer.