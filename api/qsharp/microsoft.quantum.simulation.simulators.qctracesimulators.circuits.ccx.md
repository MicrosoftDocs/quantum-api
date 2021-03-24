---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.CCX
title: CCX operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: CCX
qsharp.summary: >-
  Doubly-controlled X. Maps qubits in computational state |a,b,c⟩ to
  |a,b,(c⊕(a∧b)⟩
---

# CCX operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Doubly-controlled X. Maps qubits in computational state |a,b,c⟩ to|a,b,(c⊕(a∧b)⟩

```qsharp
operation CCX (control1 : Qubit, control2 : Qubit, target : Qubit) : Unit is Adj
```


## Input

### control1 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

qubit corresponding to 'a' above


### control2 : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

qubit corresponding to 'b' above


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

qubit corresponding to 'c' above



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

