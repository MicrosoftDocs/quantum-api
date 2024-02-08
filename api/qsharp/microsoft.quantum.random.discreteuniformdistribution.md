---
uid: Microsoft.Quantum.Random.DiscreteUniformDistribution
title: DiscreteUniformDistribution function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: DiscreteUniformDistribution
qsharp.summary: Returns a uniform distribution over a given inclusive range.
---

# DiscreteUniformDistribution function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Random](xref:Microsoft.Quantum.Random)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns a uniform distribution over a given inclusive range.

```qsharp
function DiscreteUniformDistribution (min : Int, max : Int) : Microsoft.Quantum.Random.DiscreteDistribution
```


## Input

### min : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The smallest integer to be drawn.


### max : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The largest integer to be drawn.



## Output : [DiscreteDistribution](xref:Microsoft.Quantum.Random.DiscreteDistribution)

A distribution whose random variates are integers in the inclusiverange from `min` to `max` with uniform probability.

## Example

The following Q# snippet randomly rolls a six-sided die:```qsharplet dieDistribution = DiscreteUniformDistribution(1, 6);let dieRoll = dieDistribution::Sample();```

## Remarks

Fails if `max < min`.

## See Also

- [Microsoft.Quantum.DrawRandomDouble](xref:Microsoft.Quantum.DrawRandomDouble)