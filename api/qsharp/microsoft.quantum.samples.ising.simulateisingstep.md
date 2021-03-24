---
uid: Microsoft.Quantum.Samples.Ising.SimulateIsingStep
title: SimulateIsingStep operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Samples.Ising
qsharp.name: SimulateIsingStep
qsharp.summary: This defines the unitary on which phase estimation is performed.
---

# SimulateIsingStep operation

Namespace: [Microsoft.Quantum.Samples.Ising](xref:Microsoft.Quantum.Samples.Ising)

Package: [IsingPhaseEstimationSample](https://nuget.org/packages/IsingPhaseEstimationSample)


This defines the unitary on which phase estimation is performed.

```qsharp
operation SimulateIsingStep (nSites : Int, hXFinal : Double, jFinal : Double, qpeStepSize : Double, qubits : Qubit[]) : Unit is Adj + Ctl
```


## Input

### nSites : [Int](xref:microsoft.quantum.lang-ref.int)

Number of qubits that the represented system will act upon.


### hXFinal : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `h` at s=1.


### jFinal : [Double](xref:microsoft.quantum.lang-ref.double)

Value of the coefficient `j` at s=1.


### qpeStepSize : [Double](xref:microsoft.quantum.lang-ref.double)

Size of Trotter step in simulation algorithm.


### qubits : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubit register encoding the Ising model quantum state.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

