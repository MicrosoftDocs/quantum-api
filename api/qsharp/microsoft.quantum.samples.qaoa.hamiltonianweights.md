---
uid: Microsoft.Quantum.Samples.QAOA.HamiltonianWeights
title: HamiltonianWeights function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: HamiltonianWeights
qsharp.summary: Calculate Hamiltonian parameters based on the given costs and penalty.
---

# HamiltonianWeights function

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


Calculate Hamiltonian parameters based on the given costs and penalty.

```qsharp
function HamiltonianWeights (segmentCosts : Double[], penalty : Double, numSegments : Int) : Double[]
```


## Input

### segmentCosts : [Double](xref:microsoft.quantum.lang-ref.double)[]

Cost values of each segment.


### penalty : [Double](xref:microsoft.quantum.lang-ref.double)

Penalty for cases that don't meet constraints.


### numSegments : [Int](xref:microsoft.quantum.lang-ref.int)





## Output : [Double](xref:microsoft.quantum.lang-ref.double)[]

## weightsHamiltonian parameters or "weights" as an array where each element correspondsto a parameter h_j for qubit state j.## numSegmentsNumber of segments in the graph that describes possible paths.