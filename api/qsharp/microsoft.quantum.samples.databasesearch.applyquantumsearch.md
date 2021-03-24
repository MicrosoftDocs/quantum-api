---
uid: Microsoft.Quantum.Samples.DatabaseSearch.ApplyQuantumSearch
title: ApplyQuantumSearch operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: ApplyQuantumSearch
qsharp.summary: >-
  Performs quantum search for the marked element and returns an index
  to the found element in binary format. Finds the marked element with
  probability sin²((2*nIterations+1) sin⁻¹(1/√N)).
---

# ApplyQuantumSearch operation

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Performs quantum search for the marked element and returns an indexto the found element in binary format. Finds the marked element withprobability sin²((2*nIterations+1) sin⁻¹(1/√N)).

```qsharp
operation ApplyQuantumSearch (nIterations : Int, nDatabaseQubits : Int) : (Result, Result[])
```


## Input

### nIterations : [Int](xref:microsoft.quantum.lang-ref.int)

Number of applications of the Grover iterate (RS · RM).


### nDatabaseQubits : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits in the database register.



## Output : (__invalid<Result>__,__invalid<Result>__[])

Measurement outcome of marked Qubit and measurement outcomes ofthe database register.