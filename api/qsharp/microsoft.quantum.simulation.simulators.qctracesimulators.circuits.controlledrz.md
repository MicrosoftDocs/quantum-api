---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRZ
title: ControlledRZ operation
ms.date: 3/26/2021 12:00:00 AM
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

### angle : [Double](xref:microsoft.quantum.lang-ref.double)

φ


### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

first qubit operation acts on


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

second qubit operation acts on



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

