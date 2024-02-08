---
uid: Microsoft.Quantum.Random.DrawRandomBool
title: DrawRandomBool operation
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Random
qsharp.name: DrawRandomBool
qsharp.summary: >-
  Given a success probability, returns a single Bernoulli trial that
  is true with the given probability.
---

# DrawRandomBool operation

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Random](xref:Microsoft.Quantum.Random)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Given a success probability, returns a single Bernoulli trial thatis true with the given probability.

```qsharp
operation DrawRandomBool (successProbability : Double) : Bool
```


## Input

### successProbability : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The probability with which `true` should be returned.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` with probability `successProbability` and `false` withprobability `1.0 - successProbability`.

## Example

The following Q# snippet samples flips from a biased coin:```qsharplet flips = DrawMany(DrawRandomBool, 10, 0.6);```