---
uid: Microsoft.Quantum.MachineLearning.InferredLabel
title: InferredLabel function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: InferredLabel
qsharp.summary: >-
  Given a of classification probability and a bias, returns the
  label inferred from that probability.
---

# InferredLabel function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Given a of classification probability and a bias, returns thelabel inferred from that probability.

```qsharp
function InferredLabel (bias : Double, probability : Double) : Int
```


## Input

### bias : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The bias between two classes, typically the result of training aclassifier.


### probability : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

A classification probabilities for a particular sample, typicallyresulting from estimating its classification frequency.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The label inferred from the given classification probability.