---
uid: Qdk.Std.Range.IsRangeEmpty
title: IsRangeEmpty function
description: "Q# IsRangeEmpty function: Returns true if and only if the input range is empty."
ms.date: 01/22/2025
ms.topic: managed-reference
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Range
qsharp.name: IsRangeEmpty
qsharp.summary: "Returns true if and only if the input range is empty."
---

# IsRangeEmpty function

Fully qualified name: Std.Range.IsRangeEmpty

```qsharp
function IsRangeEmpty(rng : Range) : Bool
```

## Summary
Returns true if and only if the input range is empty.

## Input
### rng
Any range

## Output
True, if and only if `rng` is empty

## Remark
This function needs to check at most one range index
to determine whether the range is empty.
