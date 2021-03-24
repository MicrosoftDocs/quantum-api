---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.DoAll
title: DoAll operation
ms.date: 3/24/2021 12:00:00 AM
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

### lookup : [Int](xref:microsoft.quantum.lang-ref.int) -> 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### range : [Range](xref:microsoft.quantum.lang-ref.range)




### target : 'T





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T

