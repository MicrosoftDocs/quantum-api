---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.ControlledOnBitStringImpl
title: ControlledOnBitStringImpl operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics
qsharp.name: ControlledOnBitStringImpl
qsharp.summary: ''
---

# ControlledOnBitStringImpl operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics](xref:Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation ControlledOnBitStringImpl<'T> (bits : Bool[], oracle : ('T => Unit is Adj + Ctl), controlRegister : Qubit[], targetRegister : 'T) : Unit is Adj + Ctl
```


## Input

### bits : [Bool](xref:microsoft.quantum.lang-ref.bool)[]




### oracle : 'T => [Unit](xref:microsoft.quantum.lang-ref.unit)  is Adj + Ctl




### controlRegister : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[]




### targetRegister : 'T





## Output : [Unit](xref:microsoft.quantum.lang-ref.unit)



## Type Parameters

### 'T

