---
uid: Microsoft.Quantum.Samples.OracleSynthesis.GrayCode
title: GrayCode function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.OracleSynthesis
qsharp.name: GrayCode
qsharp.summary: Creates Gray code sequences
---

# GrayCode function

Namespace: [Microsoft.Quantum.Samples.OracleSynthesis](xref:Microsoft.Quantum.Samples.OracleSynthesis)

Package: [OracleSynthesis](https://nuget.org/packages/OracleSynthesis)


Creates Gray code sequences

```qsharp
function GrayCode (n : Int) : (Int, Int)[]
```


## Input

### n : [Int](xref:microsoft.quantum.lang-ref.int)

Number of bits



## Output : ([Int](xref:microsoft.quantum.lang-ref.int),[Int](xref:microsoft.quantum.lang-ref.int))[]

Array of tuples. First value in tuple is value in GrayCode sequenceSecond value in tuple is position to change in current value to getnext one.

## Example

```Q#GrayCode(2); // [(0, 0);(1, 1);(3, 0);(2, 1)]```