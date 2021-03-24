---
uid: Microsoft.Quantum.Samples.DatabaseSearch.GroverStatePrepOracle
title: GroverStatePrepOracle function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: GroverStatePrepOracle
qsharp.summary: >-
  `StateOracle` type for the preparation of a start state that has a
  marked qubit entangled with some desired state in the database
  register.
---

# GroverStatePrepOracle function

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


`StateOracle` type for the preparation of a start state that has amarked qubit entangled with some desired state in the databaseregister.

```qsharp
function GroverStatePrepOracle (markedElements : Int[]) : Microsoft.Quantum.Oracles.StateOracle
```


## Input

### markedElements : [Int](xref:microsoft.quantum.lang-ref.int)[]

Indices to marked elements in database.



## Output : [StateOracle](xref:Microsoft.Quantum.Oracles.StateOracle)

A `StateOracle` type with signature((Int, Qubit[]) => () is Adj + Ctl).