---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRZFrac
title: ControlledRZFrac operation
ms.date: 4/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledRZFrac
qsharp.summary: ControlledRZFrac is exp( i πk/2ⁿ|1⟩⟨1|⊗Z)
---

# ControlledRZFrac operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ControlledRZFrac is exp( i πk/2ⁿ|1⟩⟨1|⊗Z)

```qsharp
operation ControlledRZFrac (numerator : Int, power : Int, control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

k


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

n


### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

first qubit operation acts on


### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

second qubit operation acts on



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

exp( i πk/2ⁿ|1⟩⟨1|⊗Z) = exp( iπk/2ⁿ(I-Z)/2⊗Z ) == exp( iπk/2ⁿ (I-Z)/2⊗Z )= exp( iπk/2ⁿ⁺¹ I⊗Z) exp( -iπk/2ⁿ⁺¹ Z⊗Z)