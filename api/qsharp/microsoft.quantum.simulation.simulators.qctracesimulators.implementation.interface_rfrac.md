---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation.Interface_RFrac
title: Interface_RFrac operation
ms.date: 3/30/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation
qsharp.name: Interface_RFrac
qsharp.summary: RzFrac gate natively supported by the machine. It is exp(iπkP/2ⁿ) where P is the Pauli matrix
---

# Interface_RFrac operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


RzFrac gate natively supported by the machine. It is exp(iπkP/2ⁿ) where P is the Pauli matrix

```qsharp
operation Interface_RFrac (axis : Pauli, numerator : Int, power : Int, target : Qubit) : Unit
```


## Input

### axis : [Pauli](xref:microsoft.quantum.lang-ref.pauli)

Pauli matrix, P


### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

k


### power : [Int](xref:microsoft.quantum.lang-ref.int)

n


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

the qubit operation is acting on



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

When power is 3 or less the operation is guaranteed to use S and T and Z gates to perform rotation