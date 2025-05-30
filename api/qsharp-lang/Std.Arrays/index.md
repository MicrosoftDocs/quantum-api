---
uid: Qdk.Std.Arrays-toc
title: Std.Arrays namespace
description: Table of contents for the Q# Arrays namespace
author: {AUTHOR}
ms.author: {MS_AUTHOR}
ms.date: 05/29/2025
ms.topic: landing-page
---

# Std.Arrays

The Std.Arrays namespace contains the following items:

| Name | Description |
|------|-------------|
| [All](xref:Qdk.Std.Arrays.All) | Given an array and a predicate that is defined for the elements of the array, and checks if all elements of the array satisfy the predicate. |
| [Any](xref:Qdk.Std.Arrays.Any) | Given an array and a predicate that is defined for the elements of the array, checks if at least one element of the array satisfies the predicate. |
| [Chunks](xref:Qdk.Std.Arrays.Chunks) | Splits an array into multiple parts of equal length. |
| [CircularlyShifted](xref:Qdk.Std.Arrays.CircularlyShifted) | Shift an array circularly left or right by a specific step size. |
| [ColumnAt](xref:Qdk.Std.Arrays.ColumnAt) | Extracts a column from a matrix. |
| [Count](xref:Qdk.Std.Arrays.Count) | Given an array and a predicate that is defined for the elements of the array, returns the number of elements an array that consists of those elements that satisfy the predicate. |
| [Diagonal](xref:Qdk.Std.Arrays.Diagonal) | Returns an array of diagonal elements of a 2-dimensional array |
| [DrawMany](xref:Qdk.Std.Arrays.DrawMany) | Repeats an operation for a given number of samples, collecting its outputs in an array. |
| [Enumerated](xref:Qdk.Std.Arrays.Enumerated) | Given an array, returns a new array containing elements of the original array along with the indices of each element. |
| [Excluding](xref:Qdk.Std.Arrays.Excluding) | Returns an array containing the elements of another array, excluding elements at a given list of indices. |
| [Filtered](xref:Qdk.Std.Arrays.Filtered) | Given an array and a predicate that is defined for the elements of the array, returns an array that consists of those elements that satisfy the predicate. |
| [FlatMapped](xref:Qdk.Std.Arrays.FlatMapped) | Given an array and a function that maps an array element to some output array, returns the concatenated output arrays for each array element. |
| [Flattened](xref:Qdk.Std.Arrays.Flattened) | Given an array of arrays, returns the concatenation of all arrays. |
| [Fold](xref:Qdk.Std.Arrays.Fold) | Iterates a function `f` through an array `array`, returning `f(...f(f(initialState, array[0]), array[1]), ...)`. |
| [ForEach](xref:Qdk.Std.Arrays.ForEach) | Given an array and an operation that is defined for the elements of the array, returns a new array that consists of the images of the original array under the operation. |
| [Head](xref:Qdk.Std.Arrays.Head) | Returns the first element of the array. |
| [HeadAndRest](xref:Qdk.Std.Arrays.HeadAndRest) | Returns a tuple of first and all remaining elements of the array. |
| [IndexOf](xref:Qdk.Std.Arrays.IndexOf) | Returns the first index of the first element in an array that satisfies a given predicate. If no such element exists, returns -1. |
| [IndexRange](xref:Qdk.Std.Arrays.IndexRange) | Given an array, returns a range over the indices of that array, suitable for use in a for loop. |
| [Interleaved](xref:Qdk.Std.Arrays.Interleaved) | Interleaves two arrays of (almost) same size. |
| [IsEmpty](xref:Qdk.Std.Arrays.IsEmpty) | Returns true if and only if an array is empty. |
| [IsRectangularArray](xref:Qdk.Std.Arrays.IsRectangularArray) | Returns whether a 2-dimensional array has a rectangular shape |
| [IsSorted](xref:Qdk.Std.Arrays.IsSorted) | Given an array, returns whether that array is sorted as defined by a given comparison function. |
| [IsSquareArray](xref:Qdk.Std.Arrays.IsSquareArray) | Returns whether a 2-dimensional array has a square shape |
| [Mapped](xref:Qdk.Std.Arrays.Mapped) | Given an array and a function that is defined for the elements of the array, returns a new array that consists of the images of the original array under the function. |
| [MappedByIndex](xref:Qdk.Std.Arrays.MappedByIndex) | Given an array and a function that is defined for the indexed elements of the array, returns a new array that consists of the images of the original array under the function. |
| [MappedOverRange](xref:Qdk.Std.Arrays.MappedOverRange) | Given a range and a function that takes an integer as input, returns a new array that consists of the images of the range values under the function. |
| [Most](xref:Qdk.Std.Arrays.Most) | Creates an array that is equal to an input array except that the last array element is dropped. |
| [MostAndTail](xref:Qdk.Std.Arrays.MostAndTail) | Returns a tuple of all but one and the last element of the array. |
| [Padded](xref:Qdk.Std.Arrays.Padded) | Returns an array padded at with specified values up to a specified length. |
| [Partitioned](xref:Qdk.Std.Arrays.Partitioned) | Splits an array into multiple parts. |
| [Rest](xref:Qdk.Std.Arrays.Rest) | Creates an array that is equal to an input array except that the first array element is dropped. |
| [Reversed](xref:Qdk.Std.Arrays.Reversed) | Create an array that contains the same elements as an input array but in reversed order. |
| [SequenceI](xref:Qdk.Std.Arrays.SequenceI) | Get an array of integers in a given interval. |
| [SequenceL](xref:Qdk.Std.Arrays.SequenceL) | Get an array of integers in a given interval. |
| [Sorted](xref:Qdk.Std.Arrays.Sorted) | Given an array, returns the elements of that array sorted by a given comparison function. |
| [Subarray](xref:Qdk.Std.Arrays.Subarray) | Takes an array and a list of locations and produces a new array formed from the elements of the original array that match the given locations. |
| [Swapped](xref:Qdk.Std.Arrays.Swapped) | Applies a swap of two elements in an array. |
| [Tail](xref:Qdk.Std.Arrays.Tail) | Returns the last element of the array. |
| [Transposed](xref:Qdk.Std.Arrays.Transposed) | Returns the transpose of a matrix represented as an array of arrays. |
| [Unzipped](xref:Qdk.Std.Arrays.Unzipped) | Given an array of 2-tuples, returns a tuple of two arrays, each containing the elements of the tuples of the input array. |
| [Where](xref:Qdk.Std.Arrays.Where) | Given a predicate and an array, returns the indices of that array where the predicate is true. |
| [Windows](xref:Qdk.Std.Arrays.Windows) | Returns all consecutive subarrays of length `size`. |
| [Zipped](xref:Qdk.Std.Arrays.Zipped) | Given two arrays, returns a new array of pairs such that each pair contains an element from each original array. |
