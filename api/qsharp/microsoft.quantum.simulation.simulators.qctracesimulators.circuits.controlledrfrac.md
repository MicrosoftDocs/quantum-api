---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRFrac
title: ControlledRFrac operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledRFrac
qsharp.summary: ControlledR is exp( iφ|1⟩⟨1|⊗P) on qubits 1 and 2
---

# ControlledRFrac operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ControlledR is exp( iφ|1⟩⟨1|⊗P) on qubits 1 and 2

```qsharp
operation ControlledRFrac (pauli : Pauli, numerator : Int, power : Int, control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### pauli : [Pauli](xref:microsoft.quantum.qsharp.valueliterals#pauli-literals)

φ


### numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

P


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)




### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

qubit 1, the rotation is applied when this qubit is in state |1⟩


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

qubit 2, the rotation is applied to this qubit



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

