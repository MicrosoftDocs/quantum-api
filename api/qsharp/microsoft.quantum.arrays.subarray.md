---
uid: Microsoft.Quantum.Arrays.Subarray
title: Subarray function
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Arrays
qsharp.name: Subarray
qsharp.summary: >-
  Takes an array and a list of locations and
  produces a new array formed from the elements of the original
  array that match the given locations.
---

# Subarray function

Namespace: [Microsoft.Quantum.Arrays](xref:Microsoft.Quantum.Arrays)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Takes an array and a list of locations andproduces a new array formed from the elements of the originalarray that match the given locations.

```qsharp
function Subarray<'T> (indices : Int[], array : 'T[]) : 'T[]
```


## Input

### indices : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)[]

A list of integers that is used to define the subarray.


### array : 'T[]

An array of elements over `'T`.



## Output : 'T[]

An array `out` of elements whose indices correspond to the subarray,such that `out[idx] == array[indices[idx]]`.

## Type Parameters

### 'T

The type of `array` elements.

## Example

```qsharpopen Microsoft.Quantum.Arrays;function SubarrayDemo() : Unit {    let array = [1, 2, 3, 4];    let permutation = Subarray([3, 0, 2, 1], array); // [4, 1, 3, 2]    let duplicates = Subarray([1, 2, 2], array);     // [2, 3, 3]}```

## Remarks

The function is defined for generic types, i.e., whenever we havean array `'T[]` and a list of locations `Int[]` defining the subarray.The construction of the subarray is a based on generating a new, deepcopy of the given array as opposed to maintaining references.If `indices` contains repeated elements, the corresponding elementsof `array` will likewise be repeated.If all elements of `indices` are unique, this function will returna subset of `array` if `Length(indices) < Length(array)`, ora permutation of `array` if `indices` and `array` are of the same length.