---
uid: Microsoft.Quantum.MachineLearning.ScheduleLength
title: ScheduleLength function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: ScheduleLength
qsharp.summary: Returns the number of elements in a given sampling schedule.
---

# ScheduleLength function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Returns the number of elements in a given sampling schedule.

```qsharp
function ScheduleLength (schedule : Microsoft.Quantum.MachineLearning.SamplingSchedule) : Int
```


## Input

### schedule : [SamplingSchedule](xref:Microsoft.Quantum.MachineLearning.SamplingSchedule)

A sampling schedule whose length is to be returned.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of elements in the given sampling schedule.