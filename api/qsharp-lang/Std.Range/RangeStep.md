---
uid: Qdk.Std.Range.RangeStep
title: RangeStep function
description: "Q# RangeStep function: Returns the integer that specifies how the next value of a range is calculated."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Range
qsharp.name: RangeStep
qsharp.summary: "Returns the integer that specifies how the next value of a range is calculated."
---

# RangeStep function

Fully qualified name: Std.Range.RangeStep

```qsharp
function RangeStep(r : Range) : Int
```

## Summary
Returns the integer that specifies how the next value of a range is calculated.

## Input
### r
Input range.

## Output
The defined step value of the given range.

## Remarks
A range expression's first element is `start`,
its second element is `start+step`, third element is `start+step+step`, etc.,
until `end` is passed.
