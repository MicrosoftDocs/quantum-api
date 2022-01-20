---
uid: Microsoft.Quantum.Convert
title: Microsoft.Quantum.Convert namespace
ms.date: 1/20/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: namespace
qsharp.name: Microsoft.Quantum.Convert
qsharp.summary: >-
  This namespace contains functions for converting between various Q# data
  types.
---

# Microsoft.Quantum.Convert namespace

This namespace contains functions for converting between various Q# data
types.


<!-- summaries -->

## Operations

| Name | Summary |
|------|---------|
|[Call](xref:Microsoft.Quantum.Convert.Call) |Calls a function with a given input. |

## Functions

| Name | Summary |
|------|---------|
|[BigIntAsBoolArray](xref:Microsoft.Quantum.Convert.BigIntAsBoolArray) |Converts a given big integer to an array of Booleans. The 0 element of the array is the least significant bit of the big integer. |
|[BigIntAsString](xref:Microsoft.Quantum.Convert.BigIntAsString) |Converts a given integer number to an equivalent string representation. |
|[BoolArrayAsBigInt](xref:Microsoft.Quantum.Convert.BoolArrayAsBigInt) |Converts a given array of Booleans to an equivalent big integer. The 0 element of the array is the least significant bit of the big integer. |
|[BoolArrayAsInt](xref:Microsoft.Quantum.Convert.BoolArrayAsInt) |Produces a non-negative integer from a string of bits in little endian format. |
|[BoolArrayAsPauli](xref:Microsoft.Quantum.Convert.BoolArrayAsPauli) |Given a bit string, returns a multi-qubit Pauli operator represented as an array of single-qubit Pauli operators. |
|[BoolArrayAsResultArray](xref:Microsoft.Quantum.Convert.BoolArrayAsResultArray) |Converts a `Bool[]` type to a `Result[]` type, where `true` is mapped to `One` and `false` is mapped to `Zero`. |
|[BoolAsResult](xref:Microsoft.Quantum.Convert.BoolAsResult) |Converts a `Bool` type to a `Result` type, where `true` is mapped to `One` and `false` is mapped to `Zero`. |
|[BoolAsString](xref:Microsoft.Quantum.Convert.BoolAsString) |Converts a given boolean value to an equivalent string representation. |
|[DoubleAsInt](xref:Microsoft.Quantum.Convert.DoubleAsInt) |Converts a floating-point number to an integer by returning the truncation to its integral part. |
|[DoubleAsString](xref:Microsoft.Quantum.Convert.DoubleAsString) |Converts a given double-precision floating-point number to an equivalent string representation. |
|[DoubleAsStringWithFormat](xref:Microsoft.Quantum.Convert.DoubleAsStringWithFormat) |Converts a given double-precision floating-point number to an equivalent string representation, using the given format. |
|[FunctionAsOperation](xref:Microsoft.Quantum.Convert.FunctionAsOperation) |Converts functions to operations. |
|[IntAsBigInt](xref:Microsoft.Quantum.Convert.IntAsBigInt) |Converts a given integer to an equivalent big integer. |
|[IntAsBoolArray](xref:Microsoft.Quantum.Convert.IntAsBoolArray) |Produces a binary representation of a non-negative integer, using the little-endian representation for the returned array. |
|[IntAsDouble](xref:Microsoft.Quantum.Convert.IntAsDouble) |Converts a given integer to an equivalent double-precision floating-point number. |
|[IntAsString](xref:Microsoft.Quantum.Convert.IntAsString) |Converts a given integer number to an equivalent string representation. |
|[IntAsStringWithFormat](xref:Microsoft.Quantum.Convert.IntAsStringWithFormat) |Converts a given integer number to an equivalent string representation, using the given format. |
|[MaybeBigIntAsInt](xref:Microsoft.Quantum.Convert.MaybeBigIntAsInt) |Converts a given big integer to an equivalent integer, if possible. The function returns a pair of the resulting integer and a Boolean flag which is true, if and only if the conversion was possible. |
|[PauliArrayAsInt](xref:Microsoft.Quantum.Convert.PauliArrayAsInt) |Encodes a multi-qubit Pauli operator represented as an array of single-qubit Pauli operators into an integer. |
|[RangeAsIntArray](xref:Microsoft.Quantum.Convert.RangeAsIntArray) |Creates an array `arr` of integers enumerated by start..step..end. |
|[ResultArrayAsBoolArray](xref:Microsoft.Quantum.Convert.ResultArrayAsBoolArray) |Converts a `Result[]` type to a `Bool[]` type, where `One` is mapped to `true` and `Zero` is mapped to `false`. |
|[ResultArrayAsInt](xref:Microsoft.Quantum.Convert.ResultArrayAsInt) |Produces a non-negative integer from a string of Results in little endian format. |
|[ResultAsBool](xref:Microsoft.Quantum.Convert.ResultAsBool) |Converts a `Result` type to a `Bool` type, where `One` is mapped to `true` and `Zero` is mapped to `false`. |

<!-- /summaries -->
