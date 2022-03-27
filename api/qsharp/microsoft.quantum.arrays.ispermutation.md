---
uid: Microsoft.Quantum.Arrays.IsPermutation
title: IsPermutation function
ms.date: 3/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: IsPermutation
qsharp.summary: Outputs true if and only if a given array represents a permutation.
---

# IsPermutation function

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Outputs true if and only if a given array represents a permutation.

```qsharp
function IsPermutation (permutation : Int[]) : Bool
```


## Description

Given an array `array` of length `n`, returns true if and only ifeach integer from `0` to `n - 1` appears exactly once in `array`, suchthat `array` can be interpreted as a permutation on `n` elements.

## Input

### permutation : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

An array that may or may not represent a permutation.



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` if and only if the array is a permutation.

## Example

The following Q# code prints the message "All diagnostics completedsuccessfully":```qsharpFact(IsPermutation([2, 0, 1], "");Contradiction(IsPermutation([5, 0, 1], "[5, 0, 1] isn't a permutation");Message("All diagnostics completed successfully.");```

## Remarks

An array of length zero is trivially a permutation.