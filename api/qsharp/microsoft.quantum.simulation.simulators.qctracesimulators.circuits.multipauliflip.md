---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiPauliFlip
title: MultiPauliFlip operation
ms.date: 3/30/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: MultiPauliFlip
qsharp.summary: Applies Clifford that maps Zₖ to P₁ ⊗ … ⊗ Pₙ by conjugation
---

# MultiPauliFlip operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Applies Clifford that maps Zₖ to P₁ ⊗ … ⊗ Pₙ by conjugation

```qsharp
operation MultiPauliFlip (paulis : Pauli[], target : Qubit[], k : Int) : Unit is Adj
```


## Input

### paulis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

P₁ , … , Pₙ


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Qubits to which apply the Clifford


### k : [Int](xref:microsoft.quantum.lang-ref.int)

k above, number of qubit in array of target qubits on which Z operator acts



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

