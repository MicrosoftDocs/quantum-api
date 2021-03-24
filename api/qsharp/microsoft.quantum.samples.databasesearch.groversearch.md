---
uid: Microsoft.Quantum.Samples.DatabaseSearch.GroverSearch
title: GroverSearch function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.DatabaseSearch
qsharp.name: GroverSearch
qsharp.summary: Grover's search algorithm using library functions.
---

# GroverSearch function

Namespace: [Microsoft.Quantum.Samples.DatabaseSearch](xref:Microsoft.Quantum.Samples.DatabaseSearch)

Package: [DatabaseSearchSample](https://nuget.org/packages/DatabaseSearchSample)


Grover's search algorithm using library functions.

```qsharp
function GroverSearch (markedElements : Int[], nIterations : Int, idxMarkedQubit : Int) : (Qubit[] => Unit is Adj + Ctl)
```


## Input

### markedElements : [Int](xref:microsoft.quantum.lang-ref.int)[]

Indices to marked elements in database.


### nIterations : [Int](xref:microsoft.quantum.lang-ref.int)

Number of iterations of the Grover iteration to apply.


### idxMarkedQubit : [Int](xref:microsoft.quantum.lang-ref.int)

Index to `MarkedQubit`.



## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

Unitary implementing Grover's search algorithm.

## Remarks

On input |0〉|0〉, this prepares the state |1〉|marked〉 with amplitudeSin((2*nIterations + 1) ArcSin(Sqrt(M/N))).