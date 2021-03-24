---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.Exp
title: Exp operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: Exp
qsharp.summary: Performs exp( i φ P₁ ⊗ … ⊗ Pₙ )
---

# Exp operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Performs exp( i φ P₁ ⊗ … ⊗ Pₙ )

```qsharp
operation Exp (pauli : Pauli[], angle : Double, target : Qubit[]) : Unit is Adj + Ctl
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)[]

P₁,...,Pₙ


### angle : [Double](xref:microsoft.quantum.lang-ref.double)

φ


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Array of qubits on which exponent acts



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

