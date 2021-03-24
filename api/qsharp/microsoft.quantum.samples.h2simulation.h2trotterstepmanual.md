---
uid: Microsoft.Quantum.Samples.H2Simulation.H2TrotterStepManual
title: H2TrotterStepManual function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.H2Simulation
qsharp.name: H2TrotterStepManual
qsharp.summary: >-
  Uses the DecomposeIntoTimeSteps flow control library
  to express the above decomposition.
---

# H2TrotterStepManual function

Namespace: [Microsoft.Quantum.Samples.H2Simulation](xref:Microsoft.Quantum.Samples.H2Simulation)

Package: [H2SimulationSampleCmdLine](https://nuget.org/packages/H2SimulationSampleCmdLine)


Uses the DecomposeIntoTimeSteps flow control libraryto express the above decomposition.

```qsharp
function H2TrotterStepManual (idxBondLength : Int, trotterOrder : Int, trotterStepSize : Double) : (Qubit[] => Unit is Adj + Ctl)
```


## Input

### idxBondLength : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterOrder : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)





## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl



## Remarks

This is a function, such that the user can call this as flow controland be guaranteed that there will be no side effects until theyact on a particular register.