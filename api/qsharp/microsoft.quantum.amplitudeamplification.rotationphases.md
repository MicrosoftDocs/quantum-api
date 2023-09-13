---
uid: Microsoft.Quantum.AmplitudeAmplification.RotationPhases
title: RotationPhases user defined type
ms.date: 09/13/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: Phases for a sequence of single-qubit rotations in amplitude amplification.
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.AmplitudeAmplification
qsharp.name: RotationPhases
qsharp.summary: Phases for a sequence of single-qubit rotations in amplitude amplification.
---

# RotationPhases user defined type

Namespace: [Microsoft.Quantum.AmplitudeAmplification](xref:Microsoft.Quantum.AmplitudeAmplification)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Phases for a sequence of single-qubit rotations in amplitude amplification.

```qsharp

newtype RotationPhases = (Double[]);
```



## Remarks

The first parameter is an array of phases for reflections, expressed as a product of single-qubit rotations.[ G.H. Low, I. L. Chuang, https://arxiv.org/abs/1707.05391].