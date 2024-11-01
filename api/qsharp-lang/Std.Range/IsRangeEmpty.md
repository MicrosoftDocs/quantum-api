---
uid: Qdk.Microsoft.Quantum.Core.IsRangeEmpty
title: IsRangeEmpty function
ms.date: 02/23/2024 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Core
qsharp.name: IsRangeEmpty
qsharp.summary: Returns true if and only if the input range is empty.
---

# IsRangeEmpty function

Namespace: Microsoft.Quantum.Core

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
