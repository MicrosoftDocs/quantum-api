---
uid: Microsoft.Quantum.AmplitudeAmplification.ReflectionPhases
title: ReflectionPhases user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.AmplitudeAmplification
qsharp.name: ReflectionPhases
qsharp.summary: Phases for a sequence of partial reflections in amplitude amplification.
---

# ReflectionPhases user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.AmplitudeAmplification](xref:Microsoft.Quantum.AmplitudeAmplification)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Phases for a sequence of partial reflections in amplitude amplification.

```qsharp

newtype ReflectionPhases = (AboutStart : Double[], AboutTarget : Double[]);
```



## Named Items

### AboutStart : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

An array of phases for reflection about thestart state.
### AboutTarget : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

An array of phases for reflectionabout the target state.

## Remarks

Both arrays must be of equal length. Note that in many cases, the first phase about the start state and last phase about the target state introduces a global phase shift and may be set to $0$.