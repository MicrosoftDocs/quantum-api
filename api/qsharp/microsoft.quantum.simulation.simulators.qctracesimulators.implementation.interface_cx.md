---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation.Interface_CX
title: Interface_CX operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation
qsharp.name: Interface_CX
qsharp.summary: Controlled-X gate natively supported by the machine
---

# Interface_CX operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Controlled-X gate natively supported by the machine

```qsharp
operation Interface_CX (control : Qubit, target : Qubit) : Unit
```


## Input

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

the qubit used to control the application of X gate


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

the qubit to which Pauli X is applied when control qubit is in state |1⟩



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

Controlled-X gate with target on qubit 2 and control on qubit 1is C₁X₂ = [ [1,0,0,0], [0,1,0,0], [0,0,0,1], [0,0,1,0] ]