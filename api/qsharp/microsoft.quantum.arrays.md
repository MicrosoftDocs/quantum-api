---
uid: Microsoft.Quantum.Arrays
title: Microsoft.Quantum.Arrays namespace
ms.date: 6/27/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Arrays
qsharp.summary: >-
  This namespace contains functions for creating and manipulating arrays of
  data.
---

# Microsoft.Quantum.Arrays namespace

This namespace contains functions for creating and manipulating arrays of
data.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[DrawMany](xref:Microsoft.Quantum.Arrays.DrawMany) |Repeats an operation for a given number of samples, collecting its outputs in an array. |
|[ForEach](xref:Microsoft.Quantum.Arrays.ForEach) |Given an array and an operation that is defined for the elements of the array, returns a new array that consists of the images of the original array under the operation. |

## Functions

| Name | Summary |
|------|---------|
|[All](xref:Microsoft.Quantum.Arrays.All) |Given an array and a predicate that is defined for the elements of the array, and checks if all elements of the array satisfy the predicate. |
|[Any](xref:Microsoft.Quantum.Arrays.Any) |Given an array and a predicate that is defined for the elements of the array, checks if at least one element of the array satisfies the predicate. |
|[Chunks](xref:Microsoft.Quantum.Arrays.Chunks) |Splits an array into multiple parts of equal length. |
|[ColumnAt](xref:Microsoft.Quantum.Arrays.ColumnAt) |Extracts a column from a matrix. |
|[ConstantArray](xref:Microsoft.Quantum.Arrays.ConstantArray) |Creates an array of given length with all elements equal to given value. |
|[Count](xref:Microsoft.Quantum.Arrays.Count) |Given an array and a predicate that is defined for the elements of the array, returns the number of elements an array that consists of those elements that satisfy the predicate. |
|[CumulativeFolded](xref:Microsoft.Quantum.Arrays.CumulativeFolded) |Combines Mapped and Fold into a single function |
|[Diagonal](xref:Microsoft.Quantum.Arrays.Diagonal) |Returns an array of diagonal elements of a 2-dimensional array |
|[ElementAt](xref:Microsoft.Quantum.Arrays.ElementAt) |Returns the at the given index of an array. |
|[ElementsAt](xref:Microsoft.Quantum.Arrays.ElementsAt) |Returns the array's elements at a given range of indices. |
|[EmptyArray](xref:Microsoft.Quantum.Arrays.EmptyArray) |Returns the empty array of a given type. |
|[Enumerated](xref:Microsoft.Quantum.Arrays.Enumerated) |Given an array, returns a new array containing elements of the original array along with the indices of each element. |
|[EqualA](xref:Microsoft.Quantum.Arrays.EqualA) |Given two arrays of the same type and a predicate that is defined for pairs of elements of the arrays, checks whether the arrays are equal. |
|[Exclude](xref:Microsoft.Quantum.Arrays.Exclude) |Returns an array containing the elements of another array, excluding elements at a given list of indices. |
|[Excluding](xref:Microsoft.Quantum.Arrays.Excluding) |Returns an array containing the elements of another array, excluding elements at a given list of indices. |
|[Filtered](xref:Microsoft.Quantum.Arrays.Filtered) |Given an array and a predicate that is defined for the elements of the array, returns an array that consists of those elements that satisfy the predicate. |
|[FlatMapped](xref:Microsoft.Quantum.Arrays.FlatMapped) |Given an array and a function that maps an array element to some output array, returns the concatenated output arrays for each array element. |
|[Flattened](xref:Microsoft.Quantum.Arrays.Flattened) |Given an array of arrays, returns the concatenation of all arrays. |
|[Fold](xref:Microsoft.Quantum.Arrays.Fold) |Iterates a function `f` through an array `array`, returning `f(...f(f(initialState, array[0]), array[1]), ...)`. |
|[Head](xref:Microsoft.Quantum.Arrays.Head) |Returns the first element of the array. |
|[HeadAndRest](xref:Microsoft.Quantum.Arrays.HeadAndRest) |Returns a tuple of first and all remaining elements of the array. |
|[IndexOf](xref:Microsoft.Quantum.Arrays.IndexOf) |Returns the first index of the first element in an array that satisfies a given predicate. If no such element exists, returns -1. |
|[IndexRange](xref:Microsoft.Quantum.Arrays.IndexRange) |Given an array, returns a range over the indices of that array, suitable for use in a for loop. |
|[Interleaved](xref:Microsoft.Quantum.Arrays.Interleaved) |Interleaves two arrays of (almost) same size. |
|[IsEmpty](xref:Microsoft.Quantum.Arrays.IsEmpty) |Returns true if and only if an array is empty. |
|[IsPermutation](xref:Microsoft.Quantum.Arrays.IsPermutation) |Outputs true if and only if a given array represents a permutation. |
|[IsSorted](xref:Microsoft.Quantum.Arrays.IsSorted) |Given an array, returns whether that array is sorted as defined by a given comparison function. |
|[LookupFunction](xref:Microsoft.Quantum.Arrays.LookupFunction) |Given an array, returns a function which returns elements of that array. |
|[Mapped](xref:Microsoft.Quantum.Arrays.Mapped) |Given an array and a function that is defined for the elements of the array, returns a new array that consists of the images of the original array under the function. |
|[MappedByIndex](xref:Microsoft.Quantum.Arrays.MappedByIndex) |Given an array and a function that is defined for the indexed elements of the array, returns a new array that consists of the images of the original array under the function. |
|[MappedOverRange](xref:Microsoft.Quantum.Arrays.MappedOverRange) |Given a range and a function that takes an integer as input, returns a new array that consists of the images of the range values under the function. |
|[Most](xref:Microsoft.Quantum.Arrays.Most) |Creates an array that is equal to an input array except that the last array element is dropped. |
|[MostAndTail](xref:Microsoft.Quantum.Arrays.MostAndTail) |Returns a tuple of all but one and the last element of the array. |
|[Padded](xref:Microsoft.Quantum.Arrays.Padded) |Returns an array padded at with specified values up to a specified length. |
|[Partitioned](xref:Microsoft.Quantum.Arrays.Partitioned) |Splits an array into multiple parts. |
|[Prefixes](xref:Microsoft.Quantum.Arrays.Prefixes) |Given an array, returns all its prefixes. |
|[RectangularArrayFact](xref:Microsoft.Quantum.Arrays.RectangularArrayFact) |Represents a condition that a 2-dimensional array has a rectangular shape |
|[Rest](xref:Microsoft.Quantum.Arrays.Rest) |Creates an array that is equal to an input array except that the first array element is dropped. |
|[Reversed](xref:Microsoft.Quantum.Arrays.Reversed) |Create an array that contains the same elements as an input array but in Reversed order. |
|[SequenceI](xref:Microsoft.Quantum.Arrays.SequenceI) |Get an array of integers in a given interval. |
|[SequenceL](xref:Microsoft.Quantum.Arrays.SequenceL) |Get an array of integers in a given interval. |
|[Sorted](xref:Microsoft.Quantum.Arrays.Sorted) |Given an array, returns the elements of that array sorted by a given comparison function. |
|[SquareArrayFact](xref:Microsoft.Quantum.Arrays.SquareArrayFact) |Represents a condition that a 2-dimensional array has a square shape |
|[Subarray](xref:Microsoft.Quantum.Arrays.Subarray) |Takes an array and a list of locations and produces a new array formed from the elements of the original array that match the given locations. |
|[Swapped](xref:Microsoft.Quantum.Arrays.Swapped) |Applies a swap of two elements in an array. |
|[Tail](xref:Microsoft.Quantum.Arrays.Tail) |Returns the last element of the array. |
|[Transposed](xref:Microsoft.Quantum.Arrays.Transposed) |Returns the transpose of a matrix represented as an array of arrays. |
|[TupleArrayAsNestedArray](xref:Microsoft.Quantum.Arrays.TupleArrayAsNestedArray) |Turns a list of 2-tuples into a nested array. |
|[Unique](xref:Microsoft.Quantum.Arrays.Unique) |Returns a new array that has no equal adjacent elements. |
|[Unzipped](xref:Microsoft.Quantum.Arrays.Unzipped) |Given an array of 2-tuples, returns a tuple of two arrays, each containing the elements of the tuples of the input array. |
|[Where](xref:Microsoft.Quantum.Arrays.Where) |Given a predicate and an array, returns the indices of that array where the predicate is true. |
|[Windows](xref:Microsoft.Quantum.Arrays.Windows) |Returns all consecutive subarrays of length `size`. |
|[Zip](xref:Microsoft.Quantum.Arrays.Zip) |> [!WARNING] |
|[Zip3](xref:Microsoft.Quantum.Arrays.Zip3) |> [!WARNING] |
|[Zip4](xref:Microsoft.Quantum.Arrays.Zip4) |> [!WARNING] |
|[Zipped](xref:Microsoft.Quantum.Arrays.Zipped) |Given two arrays, returns a new array of pairs such that each pair contains an element from each original array. |
|[Zipped3](xref:Microsoft.Quantum.Arrays.Zipped3) |Given three arrays, returns a new array of 3-tuples such that each 3-tuple contains an element from each original array. |
|[Zipped4](xref:Microsoft.Quantum.Arrays.Zipped4) |Given four arrays, returns a new array of 4-tuples such that each 4-tuple contains an element from each original array. |
|[_SwapOrderToPermuteArray](xref:Microsoft.Quantum.Arrays._SwapOrderToPermuteArray) |Returns the order elements in an array need to be swapped to produce an ordered array. Assumes swaps occur in place. |

<!-- /summaries -->
