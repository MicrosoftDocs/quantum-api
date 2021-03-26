---
uid: Microsoft.Quantum.Simulation.TestSuite.MultiControlledTestHelper
title: MultiControlledTestHelper operation
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.TestSuite
qsharp.name: MultiControlledTestHelper
qsharp.summary: ''
---

# MultiControlledTestHelper operation

Namespace: [Microsoft.Quantum.Simulation.TestSuite](xref:Microsoft.Quantum.Simulation.TestSuite)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation MultiControlledTestHelper (testOperation : (Qubit[] => Unit is Ctl + Adj), controlsCount : Int, targetCount : Int, target : Qubit[]) : Unit is Adj + Ctl
```


## Input

### testOperation : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### controlsCount : [Int](xref:microsoft.quantum.lang-ref.int)




### targetCount : [Int](xref:microsoft.quantum.lang-ref.int)




### target : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)

