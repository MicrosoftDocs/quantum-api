---
uid: qdk.microsoft.quantum.unstable.arithmetic-toc
title: Microsoft.Quantum.Unstable.Arithmetic namespace
description: Table of contents for the Q# Microsoft.Quantum.Unstable.Arithmetic namespace
author: bradben
ms.author: brbenefield
ms.date: 11/04/2024
ms.topic: landing-page
---

# Microsoft.Quantum.Unstable.Arithmetic

The Microsoft.Quantum.Unstable.Arithmetic namespace contains the following functions and operations:



| Name | Description |
|------|-------------|
| [AddLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.AddLE) | Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys  |
| [ApplyIfEqualL](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfEqualL) | Computes `if (c == x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is equal to the little-endian qubit register `x` |
| [ApplyIfEqualLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfEqualLE) | Computes `if x == y { action(target) }`, that is, applies `action` to `target` if register `x` is equal to the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfGreaterL](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfGreaterL) | Computes `if (c > x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater than the little-endian qubit register `x` |
| [ApplyIfGreaterLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfGreaterLE) | Computes `if x > y { action(target) }`, that is, applies `action` to `target` if register `x` is greater than the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfGreaterOrEqualL](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfGreaterOrEqualL) | Computes `if (c >= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is greater or equal to the little-endian qubit register `x` |
| [ApplyIfGreaterOrEqualLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfGreaterOrEqualLE) | Computes `if x >= y { action(target) }`, that is, applies `action` to `target` if register `x` is greater or equal to the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfLessL](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfLessL) | Computes `if (c < x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less than the little-endian qubit register `x` |
| [ApplyIfLessLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfLessLE) | Computes `if x < y { action(target) }`, that is, applies `action` to `target` if register `x` is less than the register `y`. Both qubit registers should be in a little-endian format. |
| [ApplyIfLessOrEqualL](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfLessOrEqualL) | Computes `if (c <= x) { action(target) }`, that is, applies `action` to `target` if a BigInt value `c` is less or equal to the little-endian qubit register `x` |
| [ApplyIfLessOrEqualLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ApplyIfLessOrEqualLE) | Computes `if x <= y { action(target) }`, that is, applies `action` to `target` if register `x` is less or equal to the register `y`. Both qubit registers should be in a little-endian format. |
| [FourierTDIncByLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.FourierTDIncByLE) | Increments a little-endian register ys by a little-endian register xs using Quantum Fourier Transform.  |
| [IncByI](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByI) | Increments a little-endian register ys by an integer number c  |
| [IncByIUsingIncByLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByIUsingIncByLE) | Increments a little-endian register ys by an Int number c using provided adder.  |
| [IncByL](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByL) | Increments a little-endian register ys by a BigInt number c  |
| [IncByLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByLE) | Increments a little-endian register ys by a little-endian register xs  |
| [IncByLEUsingAddLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByLEUsingAddLE) | Generic operation to turn two out-place adders into one in-place adder  |
| [IncByLUsingIncByLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.IncByLUsingIncByLE) | Increments a little-endian register ys by a BigInt number c using provided adder.  |
| [LookAheadDKRSAddLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.LookAheadDKRSAddLE) | Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the carry-lookahead algorithm.  |
| [MAJ](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.MAJ) | This applies the in-place majority operation to 3 qubits.  |
| [ReflectAboutInteger](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.ReflectAboutInteger) | Reflects a quantum register about a given classical integer.  |
| [RippleCarryCGAddLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.RippleCarryCGAddLE) | Sets a zero-initialized little-endian register zs to the sum of little-endian registers xs and ys using the ripple-carry algorithm.  |
| [RippleCarryCGIncByLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.RippleCarryCGIncByLE) | Increments a little-endian register ys by a little-endian register xs using the ripple-carry algorithm.  |
| [RippleCarryTTKIncByLE](xref:Qdk.Microsoft.Quantum.Unstable.Arithmetic.RippleCarryTTKIncByLE) | Reversible, in-place ripple-carry addition of two integers.  |
