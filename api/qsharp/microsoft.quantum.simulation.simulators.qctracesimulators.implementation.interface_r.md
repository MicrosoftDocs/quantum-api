---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation.Interface_R
title: Interface_R operation
ms.date: 4/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation
qsharp.name: Interface_R
qsharp.summary: R gate natively supported by the machine. It is exp(-iφP/2) where P is the Pauli matrix
---

# Interface_R operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


R gate natively supported by the machine. It is exp(-iφP/2) where P is the Pauli matrix

```qsharp
operation Interface_R (axis : Pauli, angle : Double, target : Qubit) : Unit
```


## Input

### axis : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

Pauli matrix, P


### angle : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

Rotation angle, φ


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

the qubit operation is acting on



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

