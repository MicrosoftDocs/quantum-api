---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ApplyByIndexAdjointableControllable
title: ApplyByIndexAdjointableControllable operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ApplyByIndexAdjointableControllable
qsharp.summary: >-
  Applies operation given by op to
  array of qubits constructed as [ target[k] : k ∈ index ]
---

# ApplyByIndexAdjointableControllable operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Applies operation given by op toarray of qubits constructed as [ target[k] : k ∈ index ]

```qsharp
operation ApplyByIndexAdjointableControllable (op : (Qubit[] => Unit is Adj + Ctl), index : Int[], target : Qubit[]) : Unit is Adj + Ctl
```


## Input

### op : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl

Operation to apply, must have an Adjoint and Controlled.


### index : [Int](xref:microsoft.quantum.lang-ref.int)[]

Array of indexes in target to apply the operation to.


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]

Array of qubits from which to select the qubits to operate on.



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

