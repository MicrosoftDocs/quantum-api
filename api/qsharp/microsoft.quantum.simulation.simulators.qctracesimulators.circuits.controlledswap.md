---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledSWAP
title: ControlledSWAP operation
ms.date: 4/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledSWAP
qsharp.summary: ''
---

# ControlledSWAP operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)




```qsharp
operation ControlledSWAP (control : Qubit, target1 : Qubit, target2 : Qubit) : Unit is Adj
```


## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)




### target1 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)




### target2 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

We use a usual identity SWAP = C₁X₂ C₂X₁ C₁X₂ and control the middle gate