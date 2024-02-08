---
uid: Microsoft.Quantum.Preparation.MixedStatePreparationRequirements
title: MixedStatePreparationRequirements user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: MixedStatePreparationRequirements
qsharp.summary: >-
  Represents the number of qubits required in order to prepare a given
  mixed state.
---

# MixedStatePreparationRequirements user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents the number of qubits required in order to prepare a givenmixed state.

```qsharp

newtype MixedStatePreparationRequirements = (NTotalQubits : Int, (NIndexQubits : Int, NGarbageQubits : Int));
```



## Named Items

### NTotalQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### NIndexQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)


### NGarbageQubits : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)



## See Also

- [Microsoft.Quantum.PurifiedMixedState](xref:Microsoft.Quantum.PurifiedMixedState)