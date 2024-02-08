---
uid: Microsoft.Quantum.Preparation.MixedStatePreparation
title: MixedStatePreparation user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: MixedStatePreparation
qsharp.summary: >-
  Represents a particular mixed state that can be prepared on an index
  and a garbage register.
---

# MixedStatePreparation user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a particular mixed state that can be prepared on an indexand a garbage register.

```qsharp

newtype MixedStatePreparation = (Requirements : Microsoft.Quantum.Preparation.MixedStatePreparationRequirements, Norm : Double, Prepare : ((Microsoft.Quantum.Arithmetic.LittleEndian, Qubit[], Qubit[]) => Unit is Adj + Ctl));
```



## Named Items

### Requirements : [MixedStatePreparationRequirements](xref:Microsoft.Quantum.Preparation.MixedStatePreparationRequirements)


### Norm : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)


### Prepare : ([LittleEndian](xref:Microsoft.Quantum.Arithmetic.LittleEndian),[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[],[Qubit](xref:microsoft.quantum.qsharp.valueliterals#qubit-literals)[]) => [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)  is Adj + Ctl



## See Also

- [Microsoft.Quantum.PurifiedMixedState](xref:Microsoft.Quantum.PurifiedMixedState)