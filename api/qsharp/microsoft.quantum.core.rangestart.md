---
uid: Microsoft.Quantum.Core.RangeStart
title: RangeStart function
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Core
qsharp.name: RangeStart
qsharp.summary: Returns the defined start value of the given range.
---

# RangeStart function

Namespace: [Microsoft.Quantum.Core](xref:Microsoft.Quantum.Core)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns the defined start value of the given range.

```qsharp
function RangeStart (range : Range) : Int
```


## Input

### range : [Range](xref:microsoft.quantum.qsharp.valueliterals#range-literals)

Input range.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The defined start value of the given range.

## Remarks

A range expression's first element is `start`,its second element is `start+step`, third element is `start+step+step`, etc.,until `end` is passed.Note that the defined start value of a range is the same as the first element of the sequence,unless the range specifies an empty sequence (for example, 2 .. 1).