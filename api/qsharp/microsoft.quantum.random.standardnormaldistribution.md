---
uid: Microsoft.Quantum.Random.StandardNormalDistribution
title: StandardNormalDistribution function
ms.date: 09/13/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: Returns a normal distribution with mean 0 and variance 1.
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: StandardNormalDistribution
qsharp.summary: Returns a normal distribution with mean 0 and variance 1.
---

# StandardNormalDistribution function

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