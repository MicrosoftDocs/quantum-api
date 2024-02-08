---
uid: Microsoft.Quantum.ResourceEstimation.RotationCount
title: RotationCount function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: RotationCount
qsharp.summary: >-
  Returns a tuple that can be passed to the `AccountForEstimates` operation
  to specify that the number of rotations is equal to the `amount`.
---

# RotationCount function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.ResourceEstimation](xref:Microsoft.Quantum.ResourceEstimation)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns a tuple that can be passed to the `AccountForEstimates` operationto specify that the number of rotations is equal to the `amount`.

```qsharp
function RotationCount (amount : Int) : (Int, Int)
```


## Input

### amount : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)





## Output : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),[Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals))

