---
uid: Microsoft.Quantum.Research.Samples.SampleHamiltonianEvolutionByQSP
title: SampleHamiltonianEvolutionByQSP operation
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Research.Samples
qsharp.name: SampleHamiltonianEvolutionByQSP
qsharp.summary: >-
  We use quantum signal processing to implement the time evolution unitary by a Hamiltonian on two qubits.
  An initial state is evolved forward by quantum signal processing, and then backward by Trotter steps.
  The angles for quantum signal processing depends only on tau and accuracy parameter.
  If the accuracy parameter is sufficiently small, say, 1.0e-20, then
  the initial state and the final state are the same up to error that is dominated by the Trotter step size,
  which is in this case about 1.0e-3.
---

# SampleHamiltonianEvolutionByQSP operation

Namespace: [Microsoft.Quantum.Research.Samples](xref:Microsoft.Quantum.Research.Samples)

Package: [qsp](https://nuget.org/packages/qsp)


We use quantum signal processing to implement the time evolution unitary by a Hamiltonian on two qubits.An initial state is evolved forward by quantum signal processing, and then backward by Trotter steps.The angles for quantum signal processing depends only on tau and accuracy parameter.If the accuracy parameter is sufficiently small, say, 1.0e-20, thenthe initial state and the final state are the same up to error that is dominated by the Trotter step size,which is in this case about 1.0e-3.

```qsharp
operation SampleHamiltonianEvolutionByQSP (tau : Double, angles : Double[]) : Unit
```


## Input

### tau : [Double](xref:microsoft.quantum.lang-ref.double)




### angles : [Double](xref:microsoft.quantum.lang-ref.double)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

