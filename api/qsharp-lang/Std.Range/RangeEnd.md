---
uid: Qdk.Std.Range.RangeEnd
title: RangeEnd function
description: "Q# RangeEnd function: Returns the defined end value of the given range, which is not necessarily the last element in the sequence."
ms.date: 01/24/2025
ms.topic: generated-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Range
qsharp.name: RangeEnd
qsharp.summary: "Returns the defined end value of the given range, which is not necessarily the last element in the sequence."
---

# RangeEnd function

Fully qualified name: Std.Range.RangeEnd

```qsharp
function RangeEnd(r : Range) : Int
```

## Summary
Returns the defined end value of the given range,
which is not necessarily the last element in the sequence.

## Input
### r
Input range.

## Output
The defined end value of the given range.

## Remarks
A range expression's first element is `start`,
its second element is `start+step`, third element is `start+step+step`, etc.,
until `end` is passed.

Note that the defined end value of a range can differ from the last element in the sequence specified by the range;
for example, in a range 0 .. 2 .. 5 the last element is 4 but the end value is 5.
