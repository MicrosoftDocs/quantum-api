---
uid: Microsoft.Quantum.Simulation.MultiplyGeneratorIndex
title: MultiplyGeneratorIndex function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: MultiplyGeneratorIndex
qsharp.summary: Multiplies the coefficient in a `GeneratorIndex`.
---

# MultiplyGeneratorIndex function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Multiplies the coefficient in a `GeneratorIndex`.

```qsharp
function MultiplyGeneratorIndex (multiplier : Double, generatorIndex : Microsoft.Quantum.Simulation.GeneratorIndex) : Microsoft.Quantum.Simulation.GeneratorIndex
```


## Input

### multiplier : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The multiplier on the coefficient.


### generatorIndex : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

The `GeneratorIndex` to be multiplied.



## Output : [GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)

A `GeneratorIndex` representing a term with coefficient a factor`multiplier` larger.

## Example

```qsharplet gen = GeneratorIndex(([1,2,3],[coeff]),[1,2,3]);let ((idxPaulis, idxDoubles), idxQubits) = MultiplyGeneratorIndex(multiplier, gen);// idxDoubles[0] == multiplier * coeff;```

## See Also

- [Microsoft.Quantum.Simulation.GeneratorIndex](xref:Microsoft.Quantum.Simulation.GeneratorIndex)