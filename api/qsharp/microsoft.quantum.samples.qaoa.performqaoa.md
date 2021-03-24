---
uid: Microsoft.Quantum.Samples.QAOA.PerformQAOA
title: PerformQAOA operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: PerformQAOA
qsharp.summary: Perform the QAOA algorithm for this Ising Hamiltonian
---

# PerformQAOA operation

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


Perform the QAOA algorithm for this Ising Hamiltonian

```qsharp
operation PerformQAOA (numSegments : Int, weights : Double[], couplings : Double[], timeX : Double[], timeZ : Double[]) : Bool[]
```


## Input

### numSegments : [Int](xref:microsoft.quantum.lang-ref.int)

Number of segments in graph


### weights : [Double](xref:microsoft.quantum.lang-ref.double)[]

Instance Hamiltonian parameters or "weights" as an array where eachelement corresponds to a parameter h_j for qubit state j.


### couplings : [Double](xref:microsoft.quantum.lang-ref.double)[]

Instance Hamiltonian coupling parameters as an array, where eachelement corresponds to a parameter J_ij between qubit states i and j.


### timeX : [Double](xref:microsoft.quantum.lang-ref.double)[]

Time evolution for PauliX operations


### timeZ : [Double](xref:microsoft.quantum.lang-ref.double)[]

Time evolution for PauliX operations



## Output : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

