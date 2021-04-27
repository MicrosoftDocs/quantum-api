---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFracZZZ
title: ExpFracZZZ operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ExpFracZZZ
qsharp.summary: ExpFracZZZ is exp( i pi k/2ⁿ Z⊗Z⊗Z )
---

# ExpFracZZZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ExpFracZZZ is exp( i pi k/2ⁿ Z⊗Z⊗Z )

```qsharp
operation ExpFracZZZ (numerator : Int, power : Int, a : Qubit, b : Qubit, c : Qubit) : Unit is Adj
```


## Input

### numerator : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

k


### power : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

n


### a : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

first target qubit


### b : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

second target qubit


### c : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

third target qubit



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Using the fact that C₁X₂ (I⊗Z) C₁X₂ = Z⊗Zexp( i pi k/2ⁿ Z⊗Z⊗Z ) = C₁X₂ exp( i pi k/2ⁿ I⊗Z⊗Z ) C₁X₂.Note that ExpFracZZZ is symmetric with respect to all of its qubit arguments.