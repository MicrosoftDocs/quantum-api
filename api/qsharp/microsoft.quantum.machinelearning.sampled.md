---
uid: Microsoft.Quantum.MachineLearning.Sampled
title: Sampled function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: Sampled
qsharp.summary: Samples a given array, using the given schedule.
---

# Sampled function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Samples a given array, using the given schedule.

```qsharp
function Sampled<'T> (schedule : Microsoft.Quantum.MachineLearning.SamplingSchedule, values : 'T[]) : 'T[]
```


## Input

### schedule : [SamplingSchedule](xref:Microsoft.Quantum.MachineLearning.SamplingSchedule)

A schedule to use in sampling values.


### values : 'T[]

An array of values to be sampled.



## Output : 'T[]

An array of elements from values, following the given schedule.

## Type Parameters

### 'T

