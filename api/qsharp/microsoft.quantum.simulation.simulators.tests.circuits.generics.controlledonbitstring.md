---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.ControlledOnBitString
title: ControlledOnBitString function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics
qsharp.name: ControlledOnBitString
qsharp.summary: ''
---

# ControlledOnBitString function

Namespace: [Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics](xref:Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
function ControlledOnBitString<'T> (bits : Bool[], oracle : ('T => Unit is Adj + Ctl)) : ((Qubit[], 'T) => Unit is Adj + Ctl)
```


## Input

### bits : [Bool](xref:microsoft.quantum.lang-ref.bool)[]




### oracle : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl





## Output : ([Qubit](xref:microsoft.quantum.lang-ref.qubit)[],'T) => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl



## Type Parameters

### 'T

