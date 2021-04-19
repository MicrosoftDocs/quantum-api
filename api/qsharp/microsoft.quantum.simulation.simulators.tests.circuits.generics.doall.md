---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.DoAll
title: DoAll operation
ms.date: 4/19/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics
qsharp.name: DoAll
qsharp.summary: ''
---

# DoAll operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics](xref:Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation DoAll<'T> (lookup : (Int -> ('T => Unit is Adj + Ctl)), range : Range, target : 'T) : Unit is Adj + Ctl
```


## Input

### lookup : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals) -> 'T => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl




### range : [Range](xref:microsoft.quantum.qsharp.valueliterals#range-literals)




### target : 'T





## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Type Parameters

### 'T

