---
uid: Microsoft.Quantum.AmplitudeAmplification.RotationPhases
title: RotationPhases user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.AmplitudeAmplification
qsharp.name: RotationPhases
qsharp.summary: Phases for a sequence of single-qubit rotations in amplitude amplification.
---

# RotationPhases user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.AmplitudeAmplification](xref:Microsoft.Quantum.AmplitudeAmplification)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Phases for a sequence of single-qubit rotations in amplitude amplification.

```qsharp

newtype RotationPhases = (Double[]);
```



## Remarks

The first parameter is an array of phases for reflections, expressed as a product of single-qubit rotations.[ G.H. Low, I. L. Chuang, https://arxiv.org/abs/1707.05391].