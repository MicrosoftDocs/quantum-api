---
uid: Qdk.Std.Convert-toc
title: Std.Convert namespace
description: Table of contents for the Q# Convert namespace
ms.date: 06/02/2025
ms.topic: landing-page
---

# Std.Convert

The Std.Convert namespace contains the following items:

| Name | Description |
|------|-------------|
| [BigIntAsBoolArray](xref:Qdk.Std.Convert.BigIntAsBoolArray) | Produces a binary representation of a non-negative BigInt, using the little-endian representation for the returned array. |
| [BigIntAsInt](xref:Qdk.Std.Convert.BigIntAsInt) | Converts a BigInt number into Int. Raises an error if the number is too large to fit. |
| [BoolArrayAsBigInt](xref:Qdk.Std.Convert.BoolArrayAsBigInt) | Converts an array of Boolean values into a non-negative BigInt, interpreting the array as a binary representation in little-endian format. |
| [BoolArrayAsInt](xref:Qdk.Std.Convert.BoolArrayAsInt) | Produces a non-negative integer from a string of bits in little-endian format. `bits[0]` represents the least significant bit. |
| [BoolArrayAsResultArray](xref:Qdk.Std.Convert.BoolArrayAsResultArray) | Converts a `Bool[]` type to a `Result[]` type, where `true` is mapped to `One` and `false` is mapped to `Zero`. |
| [BoolAsResult](xref:Qdk.Std.Convert.BoolAsResult) | Converts a `Bool` type to a `Result` type, where `true` is mapped to `One` and `false` is mapped to `Zero`. |
| [ComplexAsComplexPolar](xref:Qdk.Std.Convert.ComplexAsComplexPolar) | Converts a complex number of type `Complex` to a complex number of type `ComplexPolar`. |
| [ComplexPolarAsComplex](xref:Qdk.Std.Convert.ComplexPolarAsComplex) | Converts a complex number of type `ComplexPolar` to a complex number of type `Complex`. |
| [DoubleAsStringWithPrecision](xref:Qdk.Std.Convert.DoubleAsStringWithPrecision) | Converts a given double-precision floating-point number to a string representation with desired precision, rounding if required. |
| [IntAsBigInt](xref:Qdk.Std.Convert.IntAsBigInt) | Converts a given integer `number` to an equivalent big integer. |
| [IntAsBoolArray](xref:Qdk.Std.Convert.IntAsBoolArray) | Produces a binary representation of a non-negative integer, using the little-endian representation for the returned array. |
| [IntAsDouble](xref:Qdk.Std.Convert.IntAsDouble) | Converts a given integer `number` to an equivalent double-precision floating-point number. |
| [ResultArrayAsBoolArray](xref:Qdk.Std.Convert.ResultArrayAsBoolArray) | Converts a `Result[]` type to a `Bool[]` type, where `One` is mapped to `true` and `Zero` is mapped to `false`. |
| [ResultArrayAsInt](xref:Qdk.Std.Convert.ResultArrayAsInt) | Produces a non-negative integer from a string of Results in little-endian format. |
| [ResultAsBool](xref:Qdk.Std.Convert.ResultAsBool) | Converts a `Result` type to a `Bool` type, where `One` is mapped to `true` and `Zero` is mapped to `false`. |
