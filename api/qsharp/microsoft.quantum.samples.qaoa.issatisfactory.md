---
uid: Microsoft.Quantum.Samples.QAOA.IsSatisfactory
title: IsSatisfactory function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: IsSatisfactory
qsharp.summary: >-
  Final check to determine if the used segments satisfy our known
  constraints. This function is implemented to consider a graph with 6
  segments and three valid connected paths.
---

# IsSatisfactory function

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


Final check to determine if the used segments satisfy our knownconstraints. This function is implemented to consider a graph with 6segments and three valid connected paths.

```qsharp
function IsSatisfactory (numSegments : Int, usedSegments : Bool[]) : Bool
```


## Input

### numSegments : [Int](xref:microsoft.quantum.lang-ref.int)

Number of segments in the graph


### usedSegments : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

Array of which segments were used



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)

## outputBoolean value whether the conditions are satisfied.