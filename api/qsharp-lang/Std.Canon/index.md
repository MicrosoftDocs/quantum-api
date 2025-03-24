---
uid: Qdk.Std.Canon-toc
title: Std.Canon namespace
description: Table of contents for the Q# Canon namespace
author: azure-quantum-content
ms.author: quantumdocwriters
ms.date: 01/24/2025
ms.topic: landing-page
---

# Std.Canon

The Std.Canon namespace contains the following items:

| Name | Description |
|------|-------------|
| [ApplyCNOTChain](xref:Qdk.Std.Canon.ApplyCNOTChain) | Computes the parity of a register of qubits in-place. |
| [ApplyControlledOnBitString](xref:Qdk.Std.Canon.ApplyControlledOnBitString) | Applies `oracle` on `target` when `controlRegister` is in the state specified by `bits`. |
| [ApplyControlledOnInt](xref:Qdk.Std.Canon.ApplyControlledOnInt) | Applies a unitary operation on the target if the control register state corresponds to a specified nonnegative integer. |
| [ApplyP](xref:Qdk.Std.Canon.ApplyP) | Given a single-qubit Pauli operator, applies the corresponding operation to a single qubit. |
| [ApplyPauli](xref:Qdk.Std.Canon.ApplyPauli) | Given a multi-qubit Pauli operator, applies the corresponding operation to a quantum register. |
| [ApplyPauliFromBitString](xref:Qdk.Std.Canon.ApplyPauliFromBitString) | Applies a Pauli operator on each qubit in an array if the corresponding bit of a Boolean array matches a given input. |
| [ApplyPauliFromInt](xref:Qdk.Std.Canon.ApplyPauliFromInt) | Applies a Pauli operator on each qubit in an array if the corresponding bit of a Little-endian integer matches a given input. |
| [ApplyQFT](xref:Qdk.Std.Canon.ApplyQFT) | Applies the rotations of Quantum Fourier Transform (QFT) to a little-endian quantum register. |
| [ApplyToEach](xref:Qdk.Std.Canon.ApplyToEach) | Applies an operation to each element in a register. |
| [ApplyToEachA](xref:Qdk.Std.Canon.ApplyToEachA) | Applies an operation to each element in a register. The modifier `A` indicates that the single-element operation is adjointable. |
| [ApplyToEachC](xref:Qdk.Std.Canon.ApplyToEachC) | Applies an operation to each element in a register. The modifier `C` indicates that the single-element operation is controllable. |
| [ApplyToEachCA](xref:Qdk.Std.Canon.ApplyToEachCA) | Applies an operation to each element in a register. The modifier `CA` indicates that the single-element operation is controllable and adjointable. |
| [ApplyXorInPlace](xref:Qdk.Std.Canon.ApplyXorInPlace) | Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits. |
| [ApplyXorInPlaceL](xref:Qdk.Std.Canon.ApplyXorInPlaceL) | Applies a bitwise-XOR operation between a classical integer and an integer represented by a register of qubits. |
| [CX](xref:Qdk.Std.Canon.CX) | Applies the controlled-X (CX) gate to a pair of qubits. |
| [CY](xref:Qdk.Std.Canon.CY) | Applies the controlled-Y (CY) gate to a pair of qubits. |
| [CZ](xref:Qdk.Std.Canon.CZ) | Applies the controlled-Z (CZ) gate to a pair of qubits. |
| [Fst](xref:Qdk.Std.Canon.Fst) | Given a pair, returns its first element. |
| [Relabel](xref:Qdk.Std.Canon.Relabel) | Relabels the qubits in the `current` array with the qubits in the `updated` array. The `updated` array must be a valid permutation of the `current` array. |
| [Snd](xref:Qdk.Std.Canon.Snd) | Given a pair, returns its second element. |
| [SwapReverseRegister](xref:Qdk.Std.Canon.SwapReverseRegister) | Uses SWAP gates to reverse the order of the qubits in a register. |
