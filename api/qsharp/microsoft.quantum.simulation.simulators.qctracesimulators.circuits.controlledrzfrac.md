---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledRZFrac
title: ControlledRZFrac operation
ms.date: 3/26/2021 12:00:00 AM
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

### numerator : [Int](xref:microsoft.quantum.lang-ref.int)

k


### power : [Int](xref:microsoft.quantum.lang-ref.int)

n


### control : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

first qubit operation acts on


### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)

second qubit operation acts on



## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Remarks

exp( i πk/2ⁿ|1⟩⟨1|⊗Z) = exp( iπk/2ⁿ(I-Z)/2⊗Z ) == exp( iπk/2ⁿ (I-Z)/2⊗Z )= exp( iπk/2ⁿ⁺¹ I⊗Z) exp( -iπk/2ⁿ⁺¹ Z⊗Z)