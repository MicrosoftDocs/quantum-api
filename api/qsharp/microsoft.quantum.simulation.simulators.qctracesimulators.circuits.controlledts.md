---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledTS
title: ControlledTS operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledTS
qsharp.summary: ''
---

# ControlledTS operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)




```qsharp
operation ControlledTS (control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)




### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Based on Remark 3.2 in https://arxiv.org/pdf/1210.0974.pdfThis is a small refinement of a swap trick