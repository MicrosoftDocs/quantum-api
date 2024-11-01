---
uid: Qdk.Std.Range.RangeReverse
title: RangeReverse function
ms.date: 11/01/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Range
qsharp.name: RangeReverse
qsharp.summary: "Returns a new range which is the reverse of the input range."
---

# RangeReverse function

Fully qualified name: Std.Range.RangeReverse

```qsharp
function RangeReverse(r : Range) : Range
```

## Summary
Returns a new range which is the reverse of the input range.

## Input
### r
Input range.

## Output
A new range that is the reverse of the given range.

## Remarks
Note that the reverse of a range is not simply `end`..`-step`..`start`, because
the actual last element of a range may not be the same as `end`.
