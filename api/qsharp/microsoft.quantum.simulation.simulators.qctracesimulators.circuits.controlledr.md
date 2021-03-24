---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledR
title: ControlledR operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledR
qsharp.summary: ControlledR is exp( iφ|1⟩⟨1|⊗P) on qubits 1 and 2
---

# ControlledR operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ControlledR is exp( iφ|1⟩⟨1|⊗P) on qubits 1 and 2

```qsharp
operation ControlledR (pauli : Pauli, angle : Double, control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

φ


### angle : [Double](xref:microsoft.quantum.lang-ref.double)

P


### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

qubit 1, the rotation is applied when this qubit is in state |1⟩


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

qubit 2, the rotation is applied to this qubit



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

