---
uid: Microsoft.Quantum.Chemistry.HTerm
title: HTerm user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Chemistry
qsharp.name: HTerm
qsharp.summary: >-
  Format of data passed from C# to Q# to represent a term of the Hamiltonian.
  The meaning of the data represented is determined by the algorithm that receives it.
---

# HTerm user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry](xref:Microsoft.Quantum.Chemistry)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Format of data passed from C# to Q# to represent a term of the Hamiltonian.The meaning of the data represented is determined by the algorithm that receives it.

```qsharp

newtype HTerm = (Int[], Double[]);
```

