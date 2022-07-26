---
uid: Microsoft.Quantum.Core.RangeReverse
title: RangeReverse function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Core
qsharp.name: RangeReverse
qsharp.summary: Returns a new range which is the reverse of the input range.
---

# RangeReverse function

Namespace: [Microsoft.Quantum.Core](xref:Microsoft.Quantum.Core)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns a new range which is the reverse of the input range.

```qsharp
function RangeReverse (range : Range) : Range
```


## Input

### range : [Range](xref:microsoft.quantum.qsharp.valueliterals#range-literals)

Input range.



## Output : [Range](xref:microsoft.quantum.qsharp.valueliterals#range-literals)

A new range that is the reverse of the given range.

## Remarks

Note that the reverse of a range is not simply `end`..`-step`..`start`, becausethe actual last element of a range may not be the same as `end`.