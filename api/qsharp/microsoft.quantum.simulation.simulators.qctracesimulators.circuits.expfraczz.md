---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpFracZZ
title: ExpFracZZ operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ExpFracZZ
qsharp.summary: ExpFracZZ is exp( i π k/2ⁿ Z⊗Z )
---

# ExpFracZZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ExpFracZZ is exp( i π k/2ⁿ Z⊗Z )

```qsharp
operation ExpFracZZ (numerator : Int, power : Int, a : Qubit, b : Qubit) : Unit is Adj
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



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

We use notation C₁X₂ for CNOT gate with the targeton the second qubit and control on the first qubit.Using the fact that C₁X₂ (I⊗Z) C₁X₂ = Z⊗Zexp( i pi k/2ⁿ Z⊗Z ) = C₁X₂ exp( i pi k/2ⁿ I⊗Z ) C₁X₂.Note that ExpFracZZ is symmetric with respect to the first and second arguments.