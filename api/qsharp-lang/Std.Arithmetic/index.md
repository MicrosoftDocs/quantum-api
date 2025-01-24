---
uid: Qdk.Std.Arithmetic-toc
title: Std.Arithmetic namespace
description: Table of contents for the Q# Arithmetic namespace
author: bradben
ms.author: brbenefield
ms.date: 01/24/2025
ms.topic: landing-page
---

# Std.Arithmetic

The Std.Arithmetic namespace contains the following items:

| Name | Description |
|------|-------------|
| [AddLE](xref:Qdk.Std.Arithmetic.AddLE) | Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys |
| [ApplyIfEqualL](xref:Qdk.Std.Arithmetic.ApplyIfEqualL) | Computes `if (c == x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is equal to the little-endian qubit register `x` |
| [ApplyIfEqualLE](xref:Qdk.Std.Arithmetic.ApplyIfEqualLE) | Computes `if x == y { action(target) }`, that is, applies `action` to `target` if register `x` is equal to the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfGreaterL](xref:Qdk.Std.Arithmetic.ApplyIfGreaterL) | Computes `if (c > x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater than the little-endian qubit register `x` |
| [ApplyIfGreaterLE](xref:Qdk.Std.Arithmetic.ApplyIfGreaterLE) | Computes `if x > y { action(target) }`, that is, applies `action` to `target` if register `x` is greater than the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfGreaterOrEqualL](xref:Qdk.Std.Arithmetic.ApplyIfGreaterOrEqualL) | Computes `if (c >= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater or equal to the little-endian qubit register `x` |
| [ApplyIfGreaterOrEqualLE](xref:Qdk.Std.Arithmetic.ApplyIfGreaterOrEqualLE) | Computes `if x >= y { action(target) }`, that is, applies `action` to `target` if register `x` is greater or equal to the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfLessL](xref:Qdk.Std.Arithmetic.ApplyIfLessL) | Computes `if (c < x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less than the little-endian qubit register `x` |
| [ApplyIfLessLE](xref:Qdk.Std.Arithmetic.ApplyIfLessLE) | Computes `if x < y { action(target) }`, that is, applies `action` to `target` if register `x` is less than the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfLessOrEqualL](xref:Qdk.Std.Arithmetic.ApplyIfLessOrEqualL) | Computes `if (c <= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less or equal to the little-endian qubit register `x` |
| [ApplyIfLessOrEqualLE](xref:Qdk.Std.Arithmetic.ApplyIfLessOrEqualLE) | Computes `if x <= y { action(target) }`, that is, applies `action` to `target` if register `x` is less or equal to the register `y`. Both qubit registers should be in a little-endian format. |
| [FourierTDIncByLE](xref:Qdk.Std.Arithmetic.FourierTDIncByLE) | Increments a little-endian register ys by a little-endian register xs using Quantum Fourier Transform. |
| [IncByI](xref:Qdk.Std.Arithmetic.IncByI) | Increments a little-endian register ys by an integer number c |
| [IncByIUsingIncByLE](xref:Qdk.Std.Arithmetic.IncByIUsingIncByLE) | Increments a little-endian register ys by an Int number c using provided adder. |
| [IncByL](xref:Qdk.Std.Arithmetic.IncByL) | Increments a little-endian register ys by a BigInt number c |
| [IncByLE](xref:Qdk.Std.Arithmetic.IncByLE) | Increments a little-endian register ys by a little-endian register xs |
| [IncByLEUsingAddLE](xref:Qdk.Std.Arithmetic.IncByLEUsingAddLE) | Generic operation to turn two out-place adders into one in-place adder |
| [IncByLUsingIncByLE](xref:Qdk.Std.Arithmetic.IncByLUsingIncByLE) | Increments a little-endian register ys by a BigInt number c using provided adder. |
| [LookAheadDKRSAddLE](xref:Qdk.Std.Arithmetic.LookAheadDKRSAddLE) | Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the carry-lookahead algorithm. |
| [MAJ](xref:Qdk.Std.Arithmetic.MAJ) | This applies the in-place majority operation to 3 qubits. |
| [ReflectAboutInteger](xref:Qdk.Std.Arithmetic.ReflectAboutInteger) | Reflects a quantum register about a given classical integer. |
| [RippleCarryCGAddLE](xref:Qdk.Std.Arithmetic.RippleCarryCGAddLE) | Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the ripple-carry algorithm. |
| [RippleCarryCGIncByLE](xref:Qdk.Std.Arithmetic.RippleCarryCGIncByLE) | Increments a little-endian register ys by a little-endian register xs using the ripple-carry algorithm. |
| [RippleCarryTTKIncByLE](xref:Qdk.Std.Arithmetic.RippleCarryTTKIncByLE) | Reversible, in-place ripple-carry addition of two integers. |
