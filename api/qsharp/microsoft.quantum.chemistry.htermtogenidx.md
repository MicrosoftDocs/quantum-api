---
uid: Microsoft.Quantum.Chemistry.HTermToGenIdx
title: HTermToGenIdx function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Chemistry
qsharp.name: HTermToGenIdx
qsharp.summary: Converts a Hamiltonian term in `HTerm` data format to a GeneratorIndex.
---

# HTermToGenIdx function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry](xref:Microsoft.Quantum.Chemistry)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Converts a Hamiltonian term in `HTerm` data format to a GeneratorIndex.

```qsharp
function HTermToGenIdx (term : Microsoft.Quantum.Chemistry.HTerm, termType : Int[]) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### term : [HTerm](xref:Microsoft.Quantum.Chemistry.HTerm)

Input data in `HTerm` format.


### termType : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

Additional information added to GeneratorIndex.



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A GeneratorIndex representing a Hamiltonian term represented by `term`,together with additional information added by `termType`.