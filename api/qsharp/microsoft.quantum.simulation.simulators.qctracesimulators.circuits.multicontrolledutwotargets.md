---
uid: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits.MultiControlledUTwoTargets
title: MultiControlledUTwoTargets operation
ms.date: 4/23/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits
qsharp.name: MultiControlledUTwoTargets
qsharp.summary: Applies multiply controlled unitary given a singly controlled one
---

# MultiControlledUTwoTargets operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits](xref:Microsoft.Quantum.Simulation.Simulators.QCTraceSimulators.Circuits)

Package: [Microsoft.Quantum.Simulators](https://nuget.org/packages/Microsoft.Quantum.Simulators)


Applies multiply controlled unitary given a singly controlled one

```qsharp
operation MultiControlledUTwoTargets (controlledU : ((Qubit, Qubit, Qubit) => Unit is Adj), controls : Qubit[], target1 : Qubit, target2 : Qubit) : Unit is Adj
```


## Input

### controlledU : ([Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj

Singly controlled unitary to turn into multiply-controlled.First argument is control, second and third are targets


### controls : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]




### target1 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)




### target2 : [Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)

