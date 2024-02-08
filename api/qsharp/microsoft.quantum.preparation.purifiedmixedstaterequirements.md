---
uid: Microsoft.Quantum.Preparation.PurifiedMixedStateRequirements
title: PurifiedMixedStateRequirements function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Preparation
qsharp.name: PurifiedMixedStateRequirements
qsharp.summary: >-
  Returns the total number of qubits that must be allocated
  in order to apply the operation returned by
  @"Microsoft.Quantum.Preparation.PurifiedMixedState".
---

# PurifiedMixedStateRequirements function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Preparation](xref:Microsoft.Quantum.Preparation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns the total number of qubits that must be allocatedin order to apply the operation returned by@"Microsoft.Quantum.Preparation.PurifiedMixedState".

```qsharp
function PurifiedMixedStateRequirements (targetError : Double, nCoefficients : Int) : Microsoft.Quantum.Preparation.MixedStatePreparationRequirements
```


## Input

### targetError : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The target error $\epsilon$.


### nCoefficients : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of coefficients to be specified in preparing a mixed state.



## Output : [MixedStatePreparationRequirements](xref:Microsoft.Quantum.Preparation.MixedStatePreparationRequirements)

A description of how many qubits are required in total, and for each ofthe index and garbage registers used by the@"Microsoft.Quantum.Preparation.PurifiedMixedState" function.

## See Also

- [Microsoft.Quantum.Preparation.PurifiedMixedState](xref:Microsoft.Quantum.Preparation.PurifiedMixedState)