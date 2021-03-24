---
uid: Microsoft.Quantum.Samples.QAOA.RunQAOATrials
title: RunQAOATrials operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: RunQAOATrials
qsharp.summary: >-
  Run QAOA for a given number of trials on 6 qubits. This sample is based
  on the Traveling Santa Problem outlined here:
  http://quantumalgorithmzoo.org/traveling_santa/.
  Reports on the best itinerary for the Traveling Santa Problem and how
  many of the runs resulted in the answer. This should typically return
  the optimal solution roughly 71% of the time.
---

# RunQAOATrials operation

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


Run QAOA for a given number of trials on 6 qubits. This sample is basedon the Traveling Santa Problem outlined here:http://quantumalgorithmzoo.org/traveling_santa/.Reports on the best itinerary for the Traveling Santa Problem and howmany of the runs resulted in the answer. This should typically returnthe optimal solution roughly 71% of the time.

```qsharp
operation RunQAOATrials (numTrials : Int) : Unit
```


## Input

### numTrials : [Int](xref:microsoft.quantum.lang-ref.int)

Number of trials to run the QAOA algorithm for.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

