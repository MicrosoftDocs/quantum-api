---
uid: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics.Compose
title: Compose operation
ms.date: 3/26/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics
qsharp.name: Compose
qsharp.summary: ''
---

# Compose operation

Namespace: [Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics](xref:Microsoft.Quantum.Simulation.Simulators.Tests.Circuits.Generics)

Package: [Tests.Microsoft.Quantum.Simulators](https://nuget.org/packages/Tests.Microsoft.Quantum.Simulators)




```qsharp
operation Compose<'A, 'B> (second : ('A => Unit), first : ('B => 'A)) : ('B => Unit)
```


## Input

### second : 'A => [Unit](xref:microsoft.quantum.lang-ref.unit) 




### first : 'B => 'A 





## Output : 'B => [Unit](xref:microsoft.quantum.lang-ref.unit) 



## Type Parameters

### 'A


### 'B

