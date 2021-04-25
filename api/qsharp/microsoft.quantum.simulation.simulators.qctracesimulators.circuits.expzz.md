---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ExpZZ
title: ExpZZ operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ExpZZ
qsharp.summary: ExpFracZZ is exp( i φ Z⊗Z )
---

# ExpZZ operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


ExpFracZZ is exp( i φ Z⊗Z )

```qsharp
operation ExpZZ (angle : Double, a : Qubit, b : Qubit) : Unit is Adj
```


## Input

### angle : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

φ


### a : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

first target qubit


### b : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)

second target qubitRemarksWe use notation C₁X₂ for CNOT gate with the targeton the second qubit and control on the first qubit.Using the fact that C₁X₂ (I⊗Z) C₁X₂ = Z⊗Zexp( i pi k/2ⁿ Z⊗Z ) = C₁X₂ exp( i pi k/2ⁿ I⊗Z ) C₁X₂.Note that ExpFracZZ is symmetric with respect to the first and second arguments.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

