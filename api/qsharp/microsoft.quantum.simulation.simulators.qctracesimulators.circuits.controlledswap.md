---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledSWAP
title: ControlledSWAP operation
ms.date: 3/26/2021 12:00:00 AM
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

### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)




### target2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

We use a usual identity SWAP = C₁X₂ C₂X₁ C₁X₂ and control the middle gate