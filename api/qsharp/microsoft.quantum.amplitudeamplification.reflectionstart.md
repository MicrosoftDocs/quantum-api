---
uid: Microsoft.Quantum.AmplitudeAmplification.ReflectionStart
title: ReflectionStart function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.AmplitudeAmplification
qsharp.name: ReflectionStart
qsharp.summary: Constructs a reflection about the all-zero string |0...0〉, which is the typical input state to amplitude amplification.
---

# ReflectionStart function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.AmplitudeAmplification](xref:Microsoft.Quantum.AmplitudeAmplification)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Constructs a reflection about the all-zero string |0...0〉, which is the typical input state to amplitude amplification.

```qsharp
function ReflectionStart () : Microsoft.Quantum.Oracles.ReflectionOracle
```


## Output : [ReflectionOracle](xref:Microsoft.Quantum.Oracles.ReflectionOracle)

A `ReflectionOracle` that reflects about the state $\ket{0\cdots 0}$.

## See Also

- [Microsoft.Quantum.AmplitudeAmplification.ReflectionOracle](xref:Microsoft.Quantum.AmplitudeAmplification.ReflectionOracle)