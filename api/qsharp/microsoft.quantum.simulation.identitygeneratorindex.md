---
uid: Microsoft.Quantum.Simulation.IdentityGeneratorIndex
title: IdentityGeneratorIndex function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: IdentityGeneratorIndex
qsharp.summary: >-
  Returns a generator index consistent with the zero
  Hamiltonian, `H = 0`, which corresponds to the identity evolution operation.
---

# IdentityGeneratorIndex function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Returns a generator index consistent with the zeroHamiltonian, `H = 0`, which corresponds to the identity evolution operation.

```qsharp
function IdentityGeneratorIndex (idxTerm : Int) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### idxTerm : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

This input is ignored, and is defined for consistency with the<xref:Microsoft.Quantum.Simulation.GeneratorSystem> user-defined type.



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A generator index representing evolution under the Hamiltonian$H = 0$.