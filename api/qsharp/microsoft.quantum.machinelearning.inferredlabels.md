---
uid: Microsoft.Quantum.MachineLearning.InferredLabels
title: InferredLabels function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: InferredLabels
qsharp.summary: >-
  Given an array of classification probabilities and a bias, returns the
  label inferred from each probability.
---

# InferredLabels function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Given an array of classification probabilities and a bias, returns thelabel inferred from each probability.

```qsharp
function InferredLabels (bias : Double, probabilities : Double[]) : Int[]
```


## Input

### bias : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)

The bias between two classes, typically the result of training aclassifier.


### probabilities : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

An array of classification probabilities for a set of samples, typicallyresulting from estimating classification frequencies.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

The label inferred from each classification probability.