---
uid: Microsoft.Quantum.Chemistry.HTermsToGenSys
title: HTermsToGenSys function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Chemistry
qsharp.name: HTermsToGenSys
qsharp.summary: Converts a Hamiltonian in `HTerm[]` data format to a GeneratorSystem.
---

# HTermsToGenSys function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry](xref:Microsoft.Quantum.Chemistry)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Converts a Hamiltonian in `HTerm[]` data format to a GeneratorSystem.

```qsharp
function HTermsToGenSys (data : Microsoft.Quantum.Chemistry.HTerm[], termType : Int[]) : Microsoft.Quantum.Simulation.GeneratorSystem
```


## Input

### data : [HTerm](xref:Microsoft.Quantum.Chemistry.HTerm)[]

Input data in `HTerm[]` format.


### termType : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

Additional information added to GeneratorIndex.



## Output : [GeneratorSystem](xref:Microsoft.Quantum.Simulation.GeneratorSystem)

A GeneratorSystem representing a Hamiltonian represented by the input `data`.