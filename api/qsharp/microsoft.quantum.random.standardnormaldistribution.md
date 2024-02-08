---
uid: Microsoft.Quantum.Random.StandardNormalDistribution
title: StandardNormalDistribution function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: StandardNormalDistribution
qsharp.summary: Returns a normal distribution with mean 0 and variance 1.
---

# StandardNormalDistribution function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Random](xref:Microsoft.Quantum.Random)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns a normal distribution with mean 0 and variance 1.

```qsharp
function StandardNormalDistribution () : Microsoft.Quantum.Random.ContinuousDistribution
```


## Output : [ContinuousDistribution](xref:Microsoft.Quantum.Random.ContinuousDistribution)



## Example

The following draws 10 samples from the standard normal distribution:```qsharplet samples = DrawMany((StandardNormalDistribution())::Sample, 10, ());```

## See Also

- [Microsoft.Quantum.Random.NormalDistribution](xref:Microsoft.Quantum.Random.NormalDistribution)