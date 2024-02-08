---
uid: Microsoft.Quantum.Simulation.GeneratorSystem
title: GeneratorSystem user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Simulation
qsharp.name: GeneratorSystem
qsharp.summary: >-
  Represents a collection of `GeneratorIndex`es.

  We iterate over this
  collection using a single-index integer, and the size of the
  collection is assumed to be known.
---

# GeneratorSystem user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Simulation](xref:Microsoft.Quantum.Simulation)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a collection of `GeneratorIndex`es.We iterate over thiscollection using a single-index integer, and the size of thecollection is assumed to be known.

```qsharp

newtype GeneratorSystem = (Int, (Int -> Microsoft.Quantum.Simulation.GeneratorIndex));
```



## Remarks

Instances of `GeneratorSystem` can be defined easily using the<xref:Microsoft.Quantum.Arrays.LookupFunction> function.

## See Also

- [Microsoft.Quantum.Arrays.LookupFunction](xref:Microsoft.Quantum.Arrays.LookupFunction)