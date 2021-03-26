---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.Repeat
title: Repeat operation
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics
qsharp.name: Repeat
qsharp.summary: ''
---

# Repeat operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics](xref:Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation Repeat<'T> (callback : ('T => Unit is Adj + Ctl), bodyCount : Int, adjointCount : Int, controlledCount : Int, source : 'T) : Unit is Adj
```


## Input

### callback : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### bodyCount : [Int](xref:microsoft.quantum.lang-ref.int)




### adjointCount : [Int](xref:microsoft.quantum.lang-ref.int)




### controlledCount : [Int](xref:microsoft.quantum.lang-ref.int)




### source : 'T





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T

