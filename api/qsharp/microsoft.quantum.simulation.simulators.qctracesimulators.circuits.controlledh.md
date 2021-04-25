---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.ControlledH
title: ControlledH operation
ms.date: 4/25/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: ControlledH
qsharp.summary: ''
---

# ControlledH operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)




```qsharp
operation ControlledH (control : Qubit, target : Qubit) : Unit is Adj
```


## Input

### control : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)




### target : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Remarks

Here is Mathematica code to check the correctness of ControlledH implementation:```H = {{1, 1}, {1, -1}}/Sqrt[2];T = DiagonalMatrix[{1, Exp[I Pi/4]}];S = DiagonalMatrix[{1, I}];Z = DiagonalMatrix[{1, -1}];Dagger = ConjugateTranspose;Ty = S.H.T.Dagger[ S.H];Ty.Z.Dagger[Ty] == H // Simplify```