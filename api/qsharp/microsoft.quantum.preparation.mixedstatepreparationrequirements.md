---
uid: Microsoft.Quantum.Preparation.MixedStatePreparationRequirements
title: MixedStatePreparationRequirements user defined type
ms.date: 09/13/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: >-
  Represents the number of qubits required in order to prepare a given
  mixed state.
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: MixedStatePreparationRequirements
qsharp.summary: >-
  Represents the number of qubits required in order to prepare a given
  mixed state.
---

# MixedStatePreparationRequirements user defined type

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