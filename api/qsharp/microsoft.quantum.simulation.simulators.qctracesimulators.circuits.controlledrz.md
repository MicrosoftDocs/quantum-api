---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRZ
title: ControlledRZ operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledRZ
qsharp.summary: ControlledRZ is exp( iφ|1⟩⟨1|⊗Z)
---

# ControlledRZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ControlledRZ is exp( iφ|1⟩⟨1|⊗Z)

```qsharp
operation ControlledRZ (angle : Double, control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### angle : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

φ


### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

first qubit operation acts on


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

second qubit operation acts on



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

