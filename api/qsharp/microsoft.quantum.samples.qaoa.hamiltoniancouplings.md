---
uid: Microsoft.Quantum.Samples.QAOA.HamiltonianCouplings
title: HamiltonianCouplings function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: HamiltonianCouplings
qsharp.summary: Calculate Hamiltonian coupling parameters based on the given penalty.
---

# HamiltonianCouplings function

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


Calculate Hamiltonian coupling parameters based on the given penalty.

```qsharp
function HamiltonianCouplings (penalty : Double, numSegments : Int) : Double[]
```


## Input

### penalty : [Double](xref:microsoft.quantum.lang-ref.double)

Penalty for cases that don't meet constraints.


### numSegments : [Int](xref:microsoft.quantum.lang-ref.int)

Number of segments in the graph that describes possible paths.



## Output : [Double](xref:microsoft.quantum.lang-ref.double)[]

## couplingHamiltonian coupling parameters as an array, where each element correspondsto a parameter J_ij between qubit states i and j.