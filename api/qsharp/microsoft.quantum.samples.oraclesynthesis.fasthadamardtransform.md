---
uid: Microsoft.Quantum.Samples.OracleSynthesis.FastHadamardTransform
title: FastHadamardTransform function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.OracleSynthesis
qsharp.name: FastHadamardTransform
qsharp.summary: >-
  Computes Hadamard transform of a Boolean function in {-1,1} encoding
  using Yates's method
---

# FastHadamardTransform function

Namespace: [Microsoft.Quantum.Samples.OracleSynthesis](xref:Microsoft.Quantum.Samples.OracleSynthesis)

Package: [OracleSynthesis](https://nuget.org/packages/OracleSynthesis)


Computes Hadamard transform of a Boolean function in {-1,1} encodingusing Yates's method

```qsharp
function FastHadamardTransform (func : Int[]) : Int[]
```


## Input

### func : [Int](xref:microsoft.quantum.lang-ref.int)[]

Truth table in {-1,1} encoding



## Output : [Int](xref:microsoft.quantum.lang-ref.int)[]

Spectral coefficients of the function

## Example

```Q#FastHadamardTransform([1, 1, 1, -1]); // [2, 2, 2, -2]```