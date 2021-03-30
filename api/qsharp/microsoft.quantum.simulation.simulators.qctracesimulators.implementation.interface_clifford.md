---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation.Interface_Clifford
title: Interface_Clifford operation
ms.date: 3/30/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation
qsharp.name: Interface_Clifford
qsharp.summary: >-
  Applies Clifford multiplied by a pauli matrix
  given by 'pauli' to the qubit given by 'target'
---

# Interface_Clifford operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Implementation)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Applies Clifford multiplied by a pauli matrix

```qsharp
operation Interface_Clifford (cliffordId : Int, pauli : Pauli, target : Qubit) : Unit
```


## Input

### cliffordId : [Int](xref:microsoft.quantum.lang-ref.int)

Id of the single qubit unitary to apply. See remarks


### pauli : [Pauli](xref:microsoft.quantum.lang-ref.pauli)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

The list of id's corresponding to Cliffords is given by: