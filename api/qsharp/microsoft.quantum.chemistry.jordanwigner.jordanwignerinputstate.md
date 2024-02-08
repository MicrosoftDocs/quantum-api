---
uid: Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerInputState
title: JordanWignerInputState user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Chemistry.JordanWigner
qsharp.name: JordanWignerInputState
qsharp.summary: >-
  Format of data passed from C# to Q# to represent preparation of the initial state
  The meaning of the data represented is determined by the algorithm that receives it.
---

# JordanWignerInputState user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Chemistry.JordanWigner](xref:Microsoft.Quantum.Chemistry.JordanWigner)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Format of data passed from C# to Q# to represent preparation of the initial stateThe meaning of the data represented is determined by the algorithm that receives it.

```qsharp

newtype JordanWignerInputState = ((Double, Double), Int[]);
```

